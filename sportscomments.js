$(document).ready(function(){
    $("#addComment").click(function(){
        var myobj = {Name:$("#Name").val(),Comment:$("#sportsComment").val()};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
    	var url = "sportscomment";
	$.ajax({
  		url:url,
  		type: "POST",
  		data: jobj,
  		contentType: "application/json; charset=utf-8",
		
	})
	 location.reload();
	});
	
	
      $(document).ready(function() {
      $.getJSON('sportscomment', function(data) {
        console.log(data);
        var everything = "<ul>";
        for(var sportscomment in data) {
          com = data[sportscomment];
          everything += "<li>" + com.Name + " : " + com.Comment + "</li>";
        }
        everything += "</ul>";
        $("#sportscomments").html(everything);
      })
    })

});
