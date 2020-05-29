'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/')
        .post(todoList.create);

    app.route('/')
        .get(todoList.read);
    
    app.route('/')
        .put(todoList.update);

    app.route('/')
        .delete(todoList.delete);


};