$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrolly > 20){
          $('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
		
	})

});
//typing animation
		var typed = new Typed(".typing",{
			strings: ["Software Developer","Digital Marketer"],
			typeSpeed: 100,
			backSpeed: 60,
			loop: true
		});
		//typing animation
		var typed = new Typed(".typing-2",{
			strings: ["Software Developer","Digital Marketer"],
			typeSpeed: 100,
			backSpeed: 60,
			loop: true
		});