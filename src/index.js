const express = require('express');
const query = require('./queries');

const swaggerUi = require('swagger-ui-express');
const swaggerAutogen = require('./swagger')
//biblioteka do autentyfikacji JOSE albo next-auth

const app = express();
const port = process.env.PORT || 3000

//swagger


app.get('/Notes/getnotesbyuserid/:userid',query.getNotesByUserId /* #swagger.tags = ['Notes']*/);
app.post('/Notes/editnotebynoteid/',query.editNoteByNoteId /* #swagger.tags = ['Notes']*/);

app.get('/Permissions/getpermissionbynoteid/:noteid',query.getPermissionByNoteId /* #swagger.tags = ['Permissions']*/);

swaggerAutogen().then(() => {
	app.use('/api-doc', swaggerUi.serve, (req,res,next) => {
		const swaggerFile = require('./swagger.json');
		swaggerUi.setup(swaggerFile)(req,res,next);
	})
}).finally(() => {
	app.listen(port, () => {
		console.log(`App is running at port: ${port}`);
	})
});

