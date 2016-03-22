$(document).ready(function(){
    $("#addComment").click(function(){
        var myobj = {Name:$("#Name").val(),Comment:$("#gospelComment").val()};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
    	var url = "gospelcomment";
	$.ajax({
  		url:url,
  		type: "POST",
  		data: jobj,
  		contentType: "application/json; charset=utf-8",
		
	})
	 location.reload();
	});
	
	
      $(document).ready(function() {
      $.getJSON('gospelcomment', function(data) {
        console.log(data);
        var everything = "<ul>";
        for(var gospelcomment in data) {
          com = data[gospelcomment];
          everything += "<li>" + com.Name + " : " + com.Comment + "</li>";
        }
        everything += "</ul>";
        $("#gospelcomments").html(everything);
      })
    })

});

