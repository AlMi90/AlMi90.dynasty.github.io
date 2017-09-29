$(function() {
	$(".head__filterBtn").click(function() {
		if($(".head__filterMenu").hasClass("none")){
			$(".head__filterMenu").fadeIn(400).removeClass("none")
		}
		else{
			$(".head__filterMenu").fadeOut(400).toggleClass("none")
		}
	})
})