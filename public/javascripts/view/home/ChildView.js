'use strict'
var ChildView = Backbone.View.extend({
	tagName:'li',
	template: _.template($("#child-template").html()),
	events: {
    'click .child': 'showLinks'
  	},
	showLinks:function(event){
		var childlinks=$(event.currentTarget).data("child").links;
  	new ListContent({el: $(".list-container"), links: childlinks}).render();
  },
	render: function(){
    this.$el.html( this.template({childvar:this.model.toJSON()}));
    return this;  
  }
});
