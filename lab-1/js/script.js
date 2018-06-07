jQuery(document).ready(function ($) 
	{
		
	});
	
	var count = 0;
	var end = 0;
$.ajax({
  type: "GET",
  dataType: "jsonp",
  url: "https://api.instagram.com/v1/users/7499397463/?&access_token=7499397463.0e8bb94.6d163400746a4541990cfb5934a5f9bb",
  success: function(data) {

    $('.user_photo').attr("src",data.data.profile_picture);
    $('.user_name').text(data.data.username);
	$('.user_media_count').text("Публикаций: "+data.data.counts.media);	
  }
});

$.ajax({
  type: "GET",
  dataType: "jsonp",
  url: "https://api.instagram.com/v1/users/7499397463/media/recent/?&access_token=7499397463.0e8bb94.6d163400746a4541990cfb5934a5f9bb",
  success: function(data) {
	
    for (count = count; count <= end+4;)
	{
		var txt = data.data[count].caption;
		if(txt == null)
		{
			
			$(".latest").append("<li><a target='_blank' href='" + data.data[count].link +"'><img   src='" + data.data[count].images.low_resolution.url +"'></img></a><br><div><p> Количество лайков: "+data.data[count].likes.count+"</p><br><p> Количество комментариев: "+data.data[count].comments.count+"</p><br><p>Теги: "+ data.data[count].tags +"</p></div></li>");
			count++;
			
		}
		else
		{
			
			$(".latest").append("<li><a target='_blank' href='" + data.data[count].link +"'><img   src='" + data.data[count].images.low_resolution.url +"'></img></a><div><p>"+data.data[count].caption.text+"</p><br><p> Количество лайков: "+data.data[count].likes.count+"</p><br><p> Количество комментариев: "+data.data[count].comments.count+"</p><br><p>Теги: "+ data.data[count].tags +"</p></div></li>");
			count++;
		}
	}
	
	$(".latest li").addClass("flex center inner_publ");
	$(".latest li div").addClass("flex column publ_discr");
	
	end = count;
  }
});
	
	$('.load_img').click(function(data){
		
	
		$.ajax({
  type: "GET",
  dataType: "jsonp",
  url: "https://api.instagram.com/v1/users/7499397463/media/recent/?&access_token=7499397463.0e8bb94.6d163400746a4541990cfb5934a5f9bb",
  success: function(data) {
	
    for (count = count; count <= end+4;)
	{
		
		var txt = data.data[count].caption;
		if(txt == null)
		{
			
			$(".latest").append("<li><a target='_blank' href='" + data.data[count].link +"'><img   src='" + data.data[count].images.low_resolution.url +"'></img></a><br><div><p> Количество лайков: "+data.data[count].likes.count+"</p><br><p> Количество комментариев: "+data.data[count].comments.count+"</p><br><p>Теги: "+ data.data[count].tags +"</p></div></li>");
			count++;
		}
		else
		{
			$(".latest").append("<li><a target='_blank' href='" + data.data[count].link +"'><img   src='" + data.data[count].images.low_resolution.url +"'></img></a><div><p>"+data.data[count].caption.text+"</p><br><p> Количество лайков: "+data.data[count].likes.count+"</p><br><p> Количество комментариев: "+data.data[count].comments.count+"</p><br><p>Теги: "+ data.data[count].tags +"</p></div></li>");
			count++;
		}
		$(".latest li").addClass("flex center inner_publ publication");
		$(".latest li div").addClass("flex column publ_discr");
	}
	end = count;
  }
});
	  
	});
		