define(['jquery', 'underscore', 'backbone'],
       function($, _, Backbone){
        var BaseView = Backbone.View.extend({
          initialize: function(options){
            this.options = options;
            if (this.model) { this.listenTo(this.model, 'change', this.render); }
          },

          render: function(){
            if (typeof(this.beforeRender) === 'function') { this.beforeRender(); }
            this.$el.html(this.tmpl(this.data));
            return this;
          }
        });

        return BaseView;
       });
