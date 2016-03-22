$(document).ready(function(){
    $("#addComment").click(function(){
        var myobj = {Name:$("#Name").val(),Comment:$("#newmajorsComment").val()};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
    	var url = "newmajorscomment";
	$.ajax({
  		url:url,
  		type: "POST",
  		data: jobj,
  		contentType: "application/json; charset=utf-8",
		
	})
	 location.reload();
	});
	
	
      $(document).ready(function() {
      $.getJSON('newmajorscomment', function(data) {
        console.log(data);
        var everything = "<ul>";
        for(var newmajorscomment in data) {
          com = data[newmajorscomment];
          everything += "<li>" + com.Name + " : " + com.Comment + "</li>";
        }
        everything += "</ul>";
        $("#newmajorscomments").html(everything);
      })
    })

});

