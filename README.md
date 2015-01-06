Google App Engine Managed VM Vert.x Runtime Example
===================================================

This is an example [App Engine Managed VM](https://cloud.google.com/appengine/docs/managed-vms/) custom runtime for [Vert.x](http://vertx.io/).  The runtime example can be used to deploy Vert.x applications.

This is not an official Google product.

What is AppEngine Managed VM?
-----------------------------
Google AppEngine is a scalable platform-as-a-service that runs your application within Google's infrastructure.  AppEngine Managed VM lets you run your application with custom runtimes, such as NodeJS, Ruby, Java EE 7, or in this case, Vert.x.

Vert.x Custom Runtime
---------------------
The Vert.x custom runtime is stored in the docker/ directory.  To build the custom runtime, run:

    $ cd docker/
    $ docker build -t appengine-vertx-runtime

Running Vert.x Application
--------------------------
An example Vert.x application is stored in the vertx-example/ directory.

To run this application locally on http://localhost:8080:

    $ cd vertx-example/
    $ gcloud preview app run .

To deploy this application to a Google Cloud Platform project:

    $ cd vertx-example/
    $ gcloud preview app deploy --project YOUR_PROJECT_ID .
