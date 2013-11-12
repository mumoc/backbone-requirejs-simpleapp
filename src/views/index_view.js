define(['jquery', 'underscore', 'backbone', 'views/base_view', 'hbs!templates/index'],
       function($, _, Backbone, BaseView, tmplIndex){
        var IndexView = BaseView.extend({
          tmpl: tmplIndex
        });

        return IndexView;
       });
