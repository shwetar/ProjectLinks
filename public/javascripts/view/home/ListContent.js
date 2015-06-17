'use strict';

var ListContent = Backbone.View.extend({
  el: $('.list-container'),
  template: _.template($("#list-content-template").html()),
  
  initialize: function(attrs){
  	this.options = attrs;
    this.render();
  },
  render: function(){
    this.$el.html(this.template({childlinks:this.options.links}));
  }
});

//new ListContent();