'use strict';

var SignupView = Backbone.View.extend({
	events: {
      'click #signup': 'handleSignup'
    },
    template: _.template($("#signup-template").html()),

    initialize: function() {
      this.render();
    },
    handleSignup: function(){
      var userName = this.$el.find(".username").val();
      var password = this.$el.find(".password").val();

      $.post("/api/users/signup", {username: userName, password: password}, function(resp){

        if(resp.success){
          // console.log("success"+resp.success);
          // console.log("id"+resp.id);
          window.location.hash = "login";
        }
        else{
          alert("Error in signup"+resp);
        }
      });
    },
    
    render: function() {
        this.$el.html(this.template({}));
        return this;
      
    }
});
