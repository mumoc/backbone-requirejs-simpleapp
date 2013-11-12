define([
       'jquery',
       'underscore',
       'backbone',
       'routers/base_router'
       ],
       function($, _, Backbone, BaseRouter){
         var initialize = function(){
          BaseRouter.initialize();
         }

         return { initialize: initialize };
       });
