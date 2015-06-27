'use strict'

var ParentView = Backbone.View.extend({
	tagName:'li',

	className:'parent_li',

	template: _.template($("#parent-template").html()),

	events: {
    'click span': 'expandParent'
  	},

  	expandParent:function(event){
  		
  		$(event.currentTarget).children("i").toggleClass('glyphicon-minus-sign glyphicon-plus-sign');
  		$(event.currentTarget).next().slideToggle();

  	},
	render: function(cb){
		var self =this;
		$.post("/api/children/search", {parentId: this.model.id}, function(resp){
            if(resp.success){
            	var childCollection = new ChildList();
               	var children = resp.children;
				_.each(children, function(child){
		        	childCollection.push(new Child(child));
			     });
        		self.$el.html( self.template(self.model.toJSON()));

				var childView = new ChildListView({ collection: childCollection });
				self.$el.append(childView.render().el); 
				cb(self);
			}
            else{
                console.log("Error in ParentView"+resp);
            }		
		
		
        });
		
		
	}
});














