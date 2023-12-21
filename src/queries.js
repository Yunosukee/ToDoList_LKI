const { reset } = require('nodemon');
const db = require('./db');


const testGet = async (req, res) => {
	try {
		const result = await db.query('SELECT * FROM note.notes LEFT JOIN note.notespermissions ON notes.id = notespermissions.note_id')
	  res.json(result.rows)
	} catch (err) {
		console.log(err)
		res.status(500).send('smting rong')
	}
}
//Notes

const createNote = async (req, res) => {
	const {noteHeader, noteBody, ownerId} = req.body;
	try {
		db.query('INSERT INTO note.notes (note_header, note_body, owner_id) VALUES ($1, $2, $3)',
		[noteHeader,noteBody,ownerId])
		res.status(200).send('OK')
	} catch (err) {
		console.log(err)
		res.status(500).send('error')
	}
}

const getNotesByUserId = async (req, res) => {
	const userId = parseInt(req.params.userId);
	try {
		const result = await db.query('SELECT * FROM note.notes LEFT JOIN note.notespermissions ON notes.id = notespermissions.note_id WHERE owner_id = $1 OR user_id = $1', [userId])
		res.json(result.rows)
	} catch (err) {
		console.log(err)
		res.status(500).send('Internal Server Error')
	}
}

const editNoteByNoteId = async (req, res) => {
	//const {userId} = req.header;
	const {noteId, note_header, note_body} = req.body;
	const timenow = Date.now;
	try {
		db.query('UPDATE note.notes SET note_header = $1, note_body = $2, date_last_edit = $3 WHERE id = $4',
		[note_header, note_body, timenow, noteId])
		res.status(200).send('OK')
	} catch (err) {
		console.log(err);
		res.status(500).send('WTF IDK')
	}
}

const deleteNoteByNoteId = async (req, res) => {
	const noteId = parseInt(req.params.noteId);
	try {
		db.query('DELETE FROM note.notes WHERE id = $1',
		[noteId])
		res.status(200).send('OK')
	} catch (err) {
		console.log(err)
		res.status(500).send('error')
	}
}

//Permissions

const getPermissionByNoteId = async (req, res) => {
	const noteId = req.params.noteId;
  try {
		const result = await db.query('SELECT * FROM note.notespermissions WHERE note_id = $1', [noteId])
		res.json(result.rows)
	} catch (err) {
		console.log(err)
		res.status(500).send('Internal Server Error')
	}
}

const editPermissionByPermissionId = async (req, res) => {
	const {permissionId, userId, canEdit} = req.body;
	try {
		db.query('UPDATE note.notespermissions SET user_id = $1, canedit = $2 WHERE id = $3',
		[userId,canEdit,permissionId])
		res.status(200).send('Ok')
	} catch (err) {
		console.log(err)
		res.status(500).send('error')
	}

}

const deletePermissionByPermissionId = async (req, res) => {
	const permissionId = parseInt(req.params.permissionid)
	try {
		db.query('DELETE FROM note.notespermissions WHERE id = $1',
		[permissionId])
		res.status(200).send('OK')
	} catch (err) {
		console.log(err)
    res.status(500).send('error')
	}
}

//Users


module.exports = {
	testGet,
	createNote,
	getNotesByUserId,
	editNoteByNoteId,
  deleteNoteByNoteId,
	getPermissionByNoteId,
  editPermissionByPermissionId,
  deletePermissionByPermissionId,
}
