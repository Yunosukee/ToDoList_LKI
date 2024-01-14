const { Pool } = require('pg');

const pool = new Pool({
	user: "Notes",
	password: "YeYonAQzxloVnxdG8Uw9",
	host: "czechulab.duckdns.org",
	port: 21370,
	database: "Notesdb"
});

module.exports = {
	query: (text, params) => pool.query(text, params)
}
