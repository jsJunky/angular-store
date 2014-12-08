angular-store
=============

Angular client for the store application.

General Architecture
-------

This is using the [cg-angular generator](https://github.com/cgross/generator-cg-angular) to scaffold the project out.

Right now the .less files are not being used but as the app grows it will be nice to have those separated during development. 

The [ApiService](https://github.com/jsJunky/angular-store/blob/master/service/ApiService.js) can be split up if the various api calls grows unmanageable. Also instead of using the promise.resolve pattern we can look to use angular's $resource factory to handle the restful calls. However, we aren't using many many POST requests at the moment so probably not necessary.

TODO
-------

Complete the tests for each module.

angular-store  --in progress