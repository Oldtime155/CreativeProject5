$(document).ready(function(){
    $("#addComment").click(function(){
        var myobj = {Name:$("#Name").val(),Comment:$("#eduComment").val()};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
    	var url = "educomment";
	$.ajax({
  		url:url,
  		type: "POST",
  		data: jobj,
  		contentType: "application/json; charset=utf-8",
		
	})
	 location.reload();
	});
	
	
      $(document).ready(function() {
      $.getJSON('educomment', function(data) {
        console.log(data);
        var everything = "<ul>";
        for(var educomment in data) {
          com = data[educomment];
          everything += "<li>" + com.Name + " : " + com.Comment + "</li>";
        }
        everything += "</ul>";
        $("#educomments").html(everything);
      })
    })

});