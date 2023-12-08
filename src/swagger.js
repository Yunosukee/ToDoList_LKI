const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endPointFiles = ['./index.js'];

//swagger

const config = {
	info: {
		title: 'Test API',
		description: '',
	},
	tags: [
		{
			'name': 'Notes',
		},
		{
			'name': 'Permissions',
		}
	],
	host: 'localhost:3000',
	schemes: ['http','https'],
};

module.exports = () => swaggerAutogen(outputFile,endPointFiles,config)

