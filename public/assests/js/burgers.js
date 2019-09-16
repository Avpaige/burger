$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newState = $(this).data("newsleep");
  
      var newBurgerAvail = {
        devour: newState
      };
  
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: newBurgerAvail
      }).then(
        function() {
          console.log("changed sleep to", newState);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var Burger = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=devour]:checked").val().trim()
      };
  
      
      $.ajax("/api/burgers", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("Burger added");
          location.reload();
        }
      );
    });
  
    $(".delete-burg").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });
  