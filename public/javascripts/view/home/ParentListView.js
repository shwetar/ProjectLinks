'use strict';
//Backbone.pubSub = _.extend({}, Backbone.Events);
var ParentListView = Backbone.View.extend({
  tagName: 'ul',
  className:'.parents-list',
  template: _.template($("#parents-list-template").html()),
  render: function(){
    this.collection.each(function(parent){
      var parentView = new ParentView({ model: parent });
      parentView.render(function(data){
        this.$el.append(data.el);
      }.bind(this));
    }, this);
  return this; // returning this for chaining..
  },
  
});


