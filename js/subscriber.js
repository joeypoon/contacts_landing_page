$("#subscribe-form").submit(function(event){
  event.preventDefault();
  var email = $("#email").val();
  var request = $.ajax({
    url: "",
    method: "POST",
    data: { subscriber: { email: email } },
    dataType: "json",
    success: function(json) {
      $(".alert").html("Subscribed " + json.email + " successfully");
      $(".alert").show();
    }
  });
});
