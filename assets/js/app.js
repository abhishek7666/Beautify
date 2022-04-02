$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        items :2,
        nav:false,
        // responsive:{
        //     // 0:{
        //     //     items:1
        //     // },
        //     // 600:{
        //     //     items:3
        //     // },
        //     // 1000:{
        //     //     items:5
        //     // }
        // }
    })
})
$(document).ready(function(){

	$('#bar1').barfiller({ barColor: '#fb527a' });
	$('#bar2').barfiller({ barColor: '#fb527a' });
	$('#bar3').barfiller({ barColor: '#fb527a' });
	$('#bar4').barfiller({ barColor: '#fb527a', duration: 3000 });
	
});