$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newState = $(this).data("eaten");
  
      var updateAvail = {
        devour: newState
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: updateAvail
      }).then(
        function() {
          console.log("changed devoured to", newState);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var Burger = {
        name: $("#newBurg").val().trim(),
        devour: $("[name=devour]:checked").val().trim()
      };
  
      
      $.ajax("/api/burgers", {
        type: "POST",
        data: Burger
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
  