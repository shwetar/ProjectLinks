'use strict';

var HomeView = Backbone.View.extend({
    template: _.template($("#home-template").html()),
    events: {
        'click .add-parent-button': 'addParent'
    },

    initialize: function(options) {
        this.options = options;
        _.bindAll(this, 'render');
        //localStorage.setItem("parents",JSON.stringify([{"id":1,"name":"Test Orange"},{"id":2,"name":"Test Apple"}]));
        //localStorage.setItem("children",JSON.stringify([{"id":1,"name":"Test Orange child1","parentID":1,"private":"N","links":["www.google.com","www.yahoo.com"]},{"id":2,"name":"Test orange child2","parentID":1,"private":"N","links":["www.cnn.com","www.msn.com"]},{"id":3,"name":"Test Apple child1","parentID":2,"private":"N"},{"id":4,"name":"Test Apple child2","parentID":2,"private":"N"}]));                
       
        this.render();
    },
    addParent: function(){

    },

    render: function() {
        this.$el.html(this.template({}));
        var parentListView;
        $.post("/api/parents/search", {id: this.options.id}, function(resp){
            if(resp.success){
                var parents= resp.parent; 
                var parentCollection = new ParentList();

                //_.each(parents, function(parent){
                    parentCollection.push(new Parent(parents));
                //});
                parentListView = new ParentListView({ collection: parentCollection });
                $(".sidebar-container").append(parentListView.render().el);
                
            }
            else{
                console.log("Homeview"+resp);
            }
        });

        return this;
        
    }
});





