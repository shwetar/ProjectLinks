'use strict';

var ListContent = Backbone.View.extend({
  //className:'.list-container',
  //el: $('.list-container'),
  template: _.template($("#list-content-template").html()),
  events: {
    'click #add-link-button':'addLink',
    'click #delete-link-button':'deleteLink'
  	},
  initialize: function(attrs){
  	this.options = attrs;
    //this.model.on("change",this.renderLinks,this);
    this.render();
  },
  
  addLink:function(event){
    event.preventDefault();
    var currentChild=this.options.currentChild;
     var self = this;
     var linkName = "http://"+$(".link-name").val();
     
    $.post("/api/children/addlink", {link: linkName, id: currentChild.id, parentId:currentChild.parentID}, function(resp){
          if(resp.success){
            //new ListContent({el: $(".list-container"),currentChild:currentChild.links}).render();
            var links = currentChild.links;
            links.push(linkName);
            $('span[data-Id='+currentChild.id+']').data("child").links = links;
            self.render();
             
          }
          else{
              console.log("ListContent"+resp);
          }
      });
  },

  deleteLink: function(event){
    event.preventDefault();
    var self = this;
    var currentChild=this.options.currentChild;
    var idx=$(event.currentTarget).data("link");
    console.log("idx" +idx);
    var links=this.options.currentChild.links;
    links.splice(idx,1);
    $.post("/api/children/deletelink", {link: links, id: currentChild.id, parentId:currentChild.parentID}, function(resp){
          if(resp.success){
            //new ListContent({el: $(".list-container"),currentChild:currentChild.links}).render();
            // var links = currentChild.links;
            // links.push(linkName);
            $('span[data-Id='+currentChild.id+']').data("child").links = links;
            self.render();
             
          }
          else{
              console.log("ListContent"+resp);
          }
      });


  },

  renderLinks:function(){
     this.$el.html(this.template({childlinks:this.model.toJSON().links}));
  },

  render: function(){
    this.$el.html(this.template({childlinks:this.options.currentChild.links}));
    //return this;
  },

});


