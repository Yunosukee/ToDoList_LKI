const { Pool } = require('pg');

const pool = new Pool({
	user: "Notes",
	password: "YeYonAQzxloVnxdG8Uw9",
	host: "192.168.88.4",
	port: 5432,
	database: "Notesdb"
});

module.exports = {
	query: (text, params) => pool.query(text, params)
}
