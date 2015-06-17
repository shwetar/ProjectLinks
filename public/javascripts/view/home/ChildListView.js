'use strict';

var ChildListView = Backbone.View.extend({
  tagName: 'ul',
  
  render: function(){
      this.collection.each(function(child){
          var childView = new ChildView({ model: child });
          this.$el.append(childView.render().el); 
      }, this);
      return this; // returning this for chaining..
  }
});

