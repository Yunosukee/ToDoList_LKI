const db = require('./db');

function postErrorResponse(err) {
	console.log(err)
	res.status(500).send('Internal Server Error')
};

//Notes

const getNotesByUserId = async (req, res) => {
	const userId = parseInt(req.params.userid)
	try {
		const result = await db.query('SELECT * FROM note.notespermissions JOIN note.notes ON note_id = notes.id where owner_id = $1 OR user_id = $1',
			[userId])
		res.json(result.rows)
	//	console.log(req)
	} catch (err) {
		postErrorResponse(err)
	}
}

const editNoteByNoteId = async (req, res) => {
	//const {userId} = req.header;
	const {noteId, note_header, note_body} = req.body;
	try {
		db.query('UPDATE note.notes SET note_header = $1, note_body = $2 WHERE id = $3',
			[note_header,note_body,noteId])
		res.status(200).send('OK')
	} catch (err) {
		console.log(err);
		res.status(500).send('WTF IDK')
	}
}

//Permissions

const getPermissionByNoteId = async (req, res) => {
	const noteId = parseInt(req.params.noteid)
  try {
		const result = await db.query('SELECT * FROM note.notespermissions WHERE note_id = $1', [noteId])
		res.json(result.rows)
	} catch (err) {
	  postErrorResponse(err)
	}
}

//Users

module.exports = {
	getNotesByUserId,
	editNoteByNoteId,
	getPermissionByNoteId,
}
