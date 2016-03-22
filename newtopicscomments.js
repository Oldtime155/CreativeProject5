$(document).ready(function(){
    $("#addComment").click(function(){
        var myobj = {Name:$("#Name").val(),Comment:$("#newtopicsComment").val()};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
    	var url = "newtopicscomment";
	$.ajax({
  		url:url,
  		type: "POST",
  		data: jobj,
  		contentType: "application/json; charset=utf-8",
		
	})
	 location.reload();
	});
	
	
      $(document).ready(function() {
      $.getJSON('newtopicscomment', function(data) {
        console.log(data);
        var everything = "<ul>";
        for(var newtopicscomment in data) {
          com = data[newtopicscomment];
          everything += "<li>" + com.Name + " : " + com.Comment + "</li>";
        }
        everything += "</ul>";
        $("#newtopicscomments").html(everything);
      })
    })

});