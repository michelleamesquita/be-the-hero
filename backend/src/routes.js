const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions',SessionController.create)//login, criar sessao

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile',ProfileController.index)

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes;

//listagem
// routes.get('/ongs',async(request,response) =>{
//      const ongs = await connection('ongs').select('*');

//      return response.json(ongs);
//  });


//cadastro
//routes.post('/ongs', async(request, response)=>{

    //pp.get('/users/:id',(request, response)=
    //const params = request.query; para get 

   // const params = request.params;

//    const { name, email, whatsapp, city, uf} = request.body;

//    const id = crypto.randomBytes(4).toString('HEX');

//    console.log(data);

//    await connection('ongs').insert({
//        id,
//        name,
//        email,
//        whatsapp,
//        city,
//        uf,

//    })

//    return response.json({id});

    // console.log(body)
    // return response.json({
    //     evento: 'Semana OmniStack 11.0',
    //     aluno: 'Michelle Araujo'
    // })
// });


