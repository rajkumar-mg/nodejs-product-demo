# NodejsProductDemo

* This is simple demo Application for NodeJS with Angular.
* This is created to describe the basic functionality for NodeJS and its routing.

# Dependices
** Angular CLI 15.2.4 **
** Node 16.19.1
** NPM 8.19.3 **

# Configuration and Scripts
** Angular and NodeJS was compined on single application **
** node-api folder have NodeJS Codes **
** Written separate npm script to run NodeJS project - 'npm run serve-api' **
** Used default npm script to run Angular Project - 'npm run serve' **
** To run both projects written custom script - 'npm run start' **
** Use http://localhost:4200/ to check the Angular. **
** Use http://localhost:3030/ to check the NodeJS. **

# Angular
* The Angular project have two components. 
* Product List Component used to list all products added in inventory.
* Cart List Component used to list the cart products and used to place order.
* /products and /purchase API integrated. Localstorage used to save cart items.
* Angular Material and Bootstrap used for designs.

# NodeJS
* The NodeJS project have two routes and two services.
* Prducts routes have two API menthod. One is to list all products and list product by name
* Cart routes have one API method. Purchase used to accept cart items.
* Enhanced error handling services written.

