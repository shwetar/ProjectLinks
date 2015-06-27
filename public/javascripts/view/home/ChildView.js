'use strict'
var ChildView = Backbone.View.extend({
	tagName:'li',
	template: _.template($("#child-template").html()),
	events: {
    'click .child': 'showLinks',
    //'click #add-link-button':'addLink'
  	},
	showLinks:function(event){
    event.preventDefault();
    this.currentChild=$(event.currentTarget).data("child");
    this.currentId = $(event.currentTarget).data("id");
		new ListContent({el: $(".list-container"),currentChild:this.currentChild});
    return this;
    //event.stopPropagation();
  },
  
	render: function(){
    this.$el.html( this.template({childvar:this.model.toJSON()}));
    return this;  
  }
});
