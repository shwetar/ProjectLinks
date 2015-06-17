'use strict';
//var vent = _.extend({}, Backbone.Events);
var ContainerView = Backbone.View.extend({
    el: $("#content"),
    myChildView: null,
     
    render: function() {
    	this.$el.empty();
    	this.$el.append(this.myChildView.$el); 
    	//$(this.myChildView.$el).appendTo("#container");
        return this;
    }
});