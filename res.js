'use strict';

exports.ok = function(values, res) {
  var data = {
      'status': 200,
      'values': values
  };
  
  res.json(data);
  res.end();
};

exports.created = function(values, res) {
  var data = {
      'status': 201,
      'values': values
  };
  
  res.json(data);
  res.end();
};

exports.accepted = function(values, res) {
  var data = {
      'status': 202,
      'values': values
  };
  
  res.json(data);
  res.end();
};

exports.no_content = function(values, res) {
  var data = {
      'status': 204,
      'values': values
  };
  
  res.json(data);
  res.end();
};

exports.moved_permanently = function(values, res) {
  var data = {
      'status': 301,
      'values': values
  };
  
  res.json(data);
  res.end();
};

exports.found = function(values, res) {
  var data = {
      'status': 302,
      'values': values
  };
  
  res.json(data);
  res.end();
};

exports.see_other = function(values, res) {
  var data = {
      'status': 303,
      'values': values
  };
  
  res.json(data);
  res.end();
};

exports.not_modified = function(values, res) {
  var data = {
      'status': 304,
      'values': values
  };
  
  res.json(data);
  res.end();
};

exports.temporary_redirect = function(values, res) {
  var data = {
      'status': 307,
      'values': values
  };
  
  res.json(data);
  res.end();
};

exports.bad_request = function(values, res) {
  var data = {
      'status': 400,
      'values': values
  };
  
  res.json(data);
  res.end();
};

exports.unauthorized = function(values, res) {
  var data = {
      'status': 401,
      'values': values
  };
  
  res.json(data);
  res.end();
};

exports.forbidden = function(values, res) {
  var data = {
      'status': 403,
      'values': values
  };
  
  res.json(data);
  res.end();
};

exports.not_found = function(values, res) {
  var data = {
      'status': 404,
      'values': values
  };
  
  res.json(data);
  res.end();
};

exports.method_not_allowed = function(values, res) {
  var data = {
      'status': 405,
      'values': values
  };
  
  res.json(data);
  res.end();
};

exports.not_acceptable = function(values, res) {
  var data = {
      'status': 406,
      'values': values
  };
  
  res.json(data);
  res.end();
};

exports.precondition_failed = function(values, res) {
  var data = {
      'status': 412,
      'values': values
  };
  
  res.json(data);
  res.end();
};

exports.unsupported_media_type = function(values, res) {
  var data = {
      'status': 415,
      'values': values
  };
  
  res.json(data);
  res.end();
};

exports.intrnal_server_error = function(values, res) {
  var data = {
      'status': 500,
      'values': values
  };
  
  res.json(data);
  res.end();
};

exports.not_implemented = function(values, res) {
  var data = {
      'status': 501,
      'values': values
  };
  
  res.json(data);
  res.end();
};
