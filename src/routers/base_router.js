define([
       'jquery',
       'underscore',
       'backbone',
       ],
       function($, _, Backbone){
         var BaseRouter = Backbone.Router.extend({
            routes: {
              '(/)' : 'index'
            },

            index: function() {
              console.log('hello')
            }
         });

         var initialize = function(){
            var baseRouter = new BaseRouter();
            Backbone.history.start()
         };

         return { initialize: initialize };
       });

