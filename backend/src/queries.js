const { reset } = require('nodemon');
const db = require('./db');


function isBoolean(i){
	if (i == 0 || i == 1){
		return true
	} else {
		return false
	}
}

function isNumber(i){
	if (i > 0){
		return true
	} else {
    return false
	}  
}



const testGet = async (req, res) => {
	try {
		const result = await db.query('SELECT * FROM note.notes LEFT JOIN note.notespermissions ON notes.id = notespermissions.note_id')
		console.log(result)
	  res.json(result.rows)
	} catch (err) {
		console.log(err)
		res.status(500).send('smting rong')
	}
}
//Notes

const createNote = async (req, res) => {
	const {noteHeader, noteBody, ownerId} = req.body;
	if(isNumber(ownerId)){
		try {
			db.query('INSERT INTO note.notes (note_header, note_body, owner_id) VALUES ($1, $2, $3)',
				[noteHeader,noteBody,ownerId])
			res.status(200).send('OK')
		} catch (err) {
			console.log(err)
			res.status(500).send('error')
		}
	} else {
		console.log("'CreateNote' - ownerId is " + ownerId)
		res.status(400).send('ownerId is out of scope')
	}
}

const getNotesByUserId = async (req, res) => {
	const userId = parseInt(req.params.userId);
	if(isNumber(userId)){
		try {
			const result = await db.query('SELECT * FROM note.notes LEFT JOIN note.notespermissions ON notes.id = notespermissions.note_id WHERE owner_id = $1 OR user_id = $1', [userId])
			res.json(result.rows)
		} catch (err) {
			console.log(err)
			res.status(500).send('Internal Server Error')
		}
	} else {
		console.log("'getNotesByUserId' - ownerId is " + userId)
		res.status(400).send('userId is out of scope')
	}
}

const editNoteByNoteId = async (req, res) => {
	const {noteId, note_header, note_body} = req.body;
	const timenow = new Date(Date.now()).toISOString();
	if(isNumber(noteId)){
		try {
			db.query('UPDATE note.notes SET note_header = $1, note_body = $2, date_last_edit = $3 WHERE id = $4',
				[note_header, note_body, timenow, noteId])
			res.status(200).send('OK')
		} catch (err) {
			console.log(err);
			res.status(500).send('WTF IDK')
		}
	} else {
		console.log("'editNoteByNoteId' - noteId is " + noteId)
		res.status(400).send('noteId is out of scope')
	}
}

const deleteNoteByNoteId = async (req, res) => {
	const noteId = parseInt(req.params.noteId);
	if(isNumber(noteId)){
		try {
			db.query('DELETE FROM note.notes WHERE id = $1',
				[noteId])
			res.status(200).send('OK')
		} catch (err) {
			console.log(err)
			res.status(500).send('error')
		}
	} else {
    console.log("'deleteNoteByNoteId' - noteId is " + noteId)
		res.status(500).send('noteId is out of scope')
	}
}

//Permissions

const createPermission = async (req, res) => {
	const {noteId, userId, canEdit} = req.body;
	if(isNumber(noteId) && isNumber(userId) && isBoolean(canEdit)){
		try {
			db.query('INSERT INTO note.notespermissions (note_id, user_id, canedit) VALUES ($1, $2, $3)',
				[noteId, userId, canEdit]) 
			res.status(200).send('OK')
		} catch (err) {
			console.log(err)
			res.status(500).send('error')
		}
	}else{
		console.log("'createPermission' - noteId is " + noteId + ", userId is " + noteId + ", canEdit is " + canEdit)
	  res.status(400).send('One of parameters is out of scope')
	}
} 

const getPermissionByNoteId = async (req, res) => {
	const noteId = req.params.noteId;
	if(isNumber(noteId)){
		try {
			const result = await db.query('SELECT * FROM note.notespermissions WHERE note_id = $1', [noteId])
			res.json(result.rows)
		} catch (err) {
			console.log(err)
			res.status(500).send('Internal Server Error')
		}
	} else {
		console.log("'getPermissionByNoteId' - noteId is " + noteId)
		res.status(400).send('noteId is out of scope')
	}
}

const editPermissionByPermissionId = async (req, res) => {
	const {permissionId, userId, canEdit} = req.body;
	if(isNumber(permissionId) && isNumber(userId) && isBoolean(canEdit)){
		try {
			db.query('UPDATE note.notespermissions SET user_id = $1, canedit = $2 WHERE id = $3',
				[userId,canEdit,permissionId])
			res.status(200).send('Ok')
		} catch (err) {
			console.log(err)
			res.status(500).send('error')
		}
	} else {
    console.log("'editPermissionByPermissionId' - permissionId is " + permissionId + ", userId is " + userId + ", canEdit is " + canEdit)
		res.status(400).send('One of parameters is out of scope')
	}
}

const deletePermissionByPermissionId = async (req, res) => {
	const permissionId = parseInt(req.params.permissionid)
	if(isNumber(permissionId)){
		try {
			db.query('DELETE FROM note.notespermissions WHERE id = $1',
				[permissionId])
			res.status(200).send('OK')
		} catch (err) {
			console.log(err)
			res.status(500).send('error')
		}
	} else {
    console.log("'deletePermissionByPermissionId' - permissionId is " + permissionId)
		res.status(400).send('permissionId is out of scope')
	}
}

//Users

const login = async (req, res) => {
	const {login, password} = req.body;
	try {
		const result = await db.query('SELECT id, password, isactive FROM note.users WHERE login = $1', [login]) 
		if(result.rowCount == 1){
			if(result.rows[0].isactive != 0){
				if(result.rows[0].password === password){
					res.json(result.rows[0].id)
					//res.status(200).send('Ok')
				} else {
					res.status(400).send('Wrong password')
				}
			} else {
				res.status(400).send('Account is disabled')
			}
		} else {
		res.status(400).send('Wrong username')
		}
	} catch (err) {
		console.log(err)
		res.status(500).send('error')
	}
}

const createUser = async (req, res) => {
	const {login, name, surname, password} = req.body;
	try {
    db.query('INSERT INTO note.users (login, name, surname, password) VALUES ($1, $2, $3, $4)',
		  [login, name, surname, password])
		res.status(200).send('OK')
	} catch (err) {
		console.log(err)
		res.status(500).send('error')
	}
}

const getUserByUserId = async (req, res) => {
	const userId = parseInt(req.params.userId);
	if(isNumber(userId)){
		try{
			const result = await db.query('SELECT name, surname, isadmin, isactive FROM note.users WHERE id = $1', [userId])
			res.json(result.rows)
		} catch (err) {
			console.log(err)
			res.status(500).send('error')
		}
	} else {
		console.log("'getUserByUserId' - userId is " + userId)
		res.status(400).send('userId is out of scope')
	}
}

const editUserPasswordByUserId = async (req, res) => {
	const {userId, newPassword} = req.body;
	if(isNumber(userId)){
		try{
			db.query('UPDATE note.users SET password = $1 WHERE id = $2', [newPassword, userId])
			res.status(200).send('OK')
		} catch (err) {
			console.log(err)
			res.status(500).send('Internal Server Error')
		}
	} else {
		console.log("'editUserPasswordByUserId' - userId is " + userId)
		res.status(400).send('userId is out of scope')
	}
}

const disableUserByUserId = async (req, res) => {
	const userId = parseInt(req.params.userId);
	if (isNumber(userId)){
		try{
			db.query('UPDATE note.users SET isactive = false WHERE id = $1', [userId])
			res.status(200).send('Ok')
		} catch (err) {
			console.log(err)
			res.status(500).send('error')
		}
			const result = await db.query('SELECT id FROM note.notes WHERE owner_id = $1', [userId])
		  const values = result.rows.map(row => row.id);
			values.forEach((element) => db.query('DELETE from note.notespermissions WHERE note_id = $1', [element]))
	} else {
		console.log("'deleteUserByUserId' - userId is " + userId)
		res.status(400).send('userId is out of scope')
	}
}




module.exports = {
	//test
	testGet,
	//note
	createNote,
	getNotesByUserId,
	editNoteByNoteId,
  deleteNoteByNoteId,
	//permissions
	createPermission,
	getPermissionByNoteId,
  editPermissionByPermissionId,
  deletePermissionByPermissionId,
	//users
	login,
	createUser,
  getUserByUserId,
	editUserPasswordByUserId,
	disableUserByUserId,
}
