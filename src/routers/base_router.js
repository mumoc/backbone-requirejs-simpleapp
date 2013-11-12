define([
       'jquery',
       'underscore',
       'backbone',
       'views/index_view'],
       function($, _, Backbone, IndexView){
         var BaseRouter = Backbone.Router.extend({
            routes: {
              '(/)' : 'index'
            },

            index: function() {
              indexView = new IndexView({ el: $('main') });
              indexView.render()
            }
         });

         var initialize = function(){
            var baseRouter = new BaseRouter();
            Backbone.history.start()
         };

         return { initialize: initialize };
       });

