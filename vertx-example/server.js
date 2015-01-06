// Copyright 2014 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var vertx = require('vertx');

var console = require('vertx/console');
var routes = new vertx.RouteMatcher();

// Health Check
routes.get('/_ah/health', function(req) {
  req.response.end("ok");
});

// Start Hook, called before App Engine route traffic to this instance.
routes.get('/_ah/start', function(req) {
  console.log("Starting...");
  req.response.end("ok");
});

// Stop Hook, called before App Engine shutdown this instance.
routes.get('/_ah/stop', function(req) {
  console.log("Stopping...");
  req.response.end("ok");
});

// Catch all - serve the index page
routes.getWithRegEx('.*', function(req) {
  req.response.headers['Content-Type'] = "text/html";
  req.response.end("<html><head><title>Hello World</title></head><body>Hello World</body></html>");
});

vertx.createHttpServer().requestHandler(routes).listen(8080);
