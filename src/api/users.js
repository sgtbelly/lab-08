'use strict';

import express from 'express';

import users from '../models/users.js';

const usersRte = express.Router();

let sendJSON = (data,response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.setheader('Content-Type', 'application/json');
  response.write(JSON.stringify(data) );
  response.end();
};

usersRte.get('/api/v2/users', (request,response,next) => {
  users.find()
    .then( data => {
      const outpu = {
        count: data.length,
        results: data,
      };
      sendJSON(output, response);
    })
    .catch(next);
});

usersRte.post('/api/v2/users', (request, response, next) => {
  users.save(request.body)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

usersRte.put('/api/v2/users/:id', (request, response, next) => {
  users.save(request.params.id, request.body)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

usersRte.patch('/api/v2/users/:id', (request,response,next) => {
  users.patch(request.params.id, request.body)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

usersRte.delete('/api/v2/users/:id', (request, response, next) => {
  users.delete(request.params.id)
    .then( result => sendJSON(result, response) )
    .catch( next );
});

export default usersRte;