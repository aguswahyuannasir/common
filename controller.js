'use strict';

var response    = require('./res');
var fs          = require("fs");


exports.create = function(req, res) {
  let obj = {
      address   : "",
      username  : "",
      password  : "",
      port      : ""
  };

  var data = JSON.stringify(obj, null, 4);

  fs.exists('config.json', function(exists) {
    
    if (exists) {
      fs.readFile('config.json', (err, data) => {
        if (err) {
          response.no_content(err, res);
          return;
        };
        let val = JSON.parse(data);
        var msg = [
          "File is exists !",
          val
        ];
        response.ok(msg, res);

      }); 
        
    } else {

      fs.writeFile("./config.json", data, (err) => {
        if (err) {
            response.not_modified(err, res);
            return;
        };

        let val = JSON.parse(data);
        var msg = [
          "File has been created !",
          val
        ];

        response.ok(msg, res)
      });

    }

  });
  
};


exports.read = function(req, res) {

  fs.exists('config.json', function(exists) {
    
    if (exists) {

      fs.readFile('config.json', (err, data) => {
        if (err) {
          response.no_content(err, res);
          return;
        };
        let val = JSON.parse(data);
        response.ok(val, res);
      }); 

    } else {

      response.not_found("File not exists, Please create before process !", res);

    }

  });
  
};


exports.update = function(req, res) {
  var address   = req.body.address;
  var username  = req.body.username;
  var password  = req.body.password;
  var port      = req.body.port;

  let obj = {
      address   : address,
      username  : username,
      password  : password,
      port      : port
    };
  
  let data = JSON.stringify(obj, null, 4);


  fs.exists('config.json', function(exists) {
    
    if (exists) {
      
      fs.writeFile('config.json', data, (err) => {
        if (err) {
          response.not_modified(err, res);
          return;
        };
        let val = JSON.parse(data);
        response.ok(val, res);
      });

    } else {

      response.not_found("File not exists, Please create before process !", res);

    }

  });
  
};


exports.delete = function(req, res) {

  fs.exists('config.json', function(exists) {
    
    if (exists) {

      fs.unlink('config.json', function (err) {
        if (err) {
          response.not_modified(err, res);
          return;
        };
        if (err) throw err;
        response.ok("File deleted!", res);
      });

    } else {

      response.not_found("File not exists, Please create before process !", res);

    }

  });
  
};



