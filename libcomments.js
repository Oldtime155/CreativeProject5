$(document).ready(function(){
    $("#addComment").click(function(){
        var myobj = {Name:$("#Name").val(),Comment:$("#libComment").val()};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
    	var url = "libcomment";
	$.ajax({
  		url:url,
  		type: "POST",
  		data: jobj,
  		contentType: "application/json; charset=utf-8",
		
	})
	 location.reload();
	});
	
	
      $(document).ready(function() {
      $.getJSON('libcomment', function(data) {
        console.log(data);
        var everything = "<ul>";
        for(var libcomment in data) {
          com = data[libcomment];
          everything += "<li>" + com.Name + " : " + com.Comment + "</li>";
        }
        everything += "</ul>";
        $("#libcomments").html(everything);
      })
    })

});