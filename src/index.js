const express = require('express');
const query = require('./queries');

const swaggerUi = require('swagger-ui-express');
const swaggerAutogen = require('./swagger')
//biblioteka do autentyfikacji JOSE albo next-auth

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());

app.get('/test',query.testGet /* #swagger.tags = ['test']*/)

app.post('/Notes/createNote',query.createNote /* #swagger.tags = ['Notes']*/)
app.get('/Notes/getNotesByUserId/:userId',query.getNotesByUserId /* #swagger.tags = ['Notes']*/);
app.post('/Notes/editNoteByNoteId/',query.editNoteByNoteId /* #swagger.tags = ['Notes']*/);
app.delete('/Notes/deteteNoteByNoteId/:noteId',query.deleteNoteByNoteId /* #swagger.tags = ['Notes']*/);

app.post('/Permissions/createPermission',query.createPermission /* #swagger.tags = ['Permissions']*/);
app.get('/Permissions/getPermissionByNoteId/:noteId',query.getPermissionByNoteId /* #swagger.tags = ['Permissions']*/);
app.post('/Permissions/editPermissionByPermissionId/',query.editPermissionByPermissionId /* #swagger.tags = ['Permissions']*/)
app.delete('/Permissions/deletePermissionByPermissionId/:permissionId',query.deletePermissionByPermissionId /* #swagger.tags = ['Permissions']*/)

app.post('/Users/login',query.login /* #swagger.tags = ['Users']*/);
app.post('/Users/createUser',query.createUser /* #swagger.tags = ['Users']*/);
app.get('/Users/getUserByUserId/:userId',query.getUserByUserId /* #swagger.tags = ['Users']*/);
//app.post('/Users/editUserByUserId/:userId',query. /* #swagger.tags = ['Users']*/);
//app.post('/Users/editUserPasswordByUserId/:userId',querry. /* #swagger.tags = ['Users']*/)
//app.post('/Users/editUserParametersByUserId/:userId',querry. /* #swagger.tags = ['Users']*/)
app.delete('/User/disableUserByUserId/:userId', query.disableUserByUserId /* #swagger.tags = ['Users']*/);

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

