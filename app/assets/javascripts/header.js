$(function(){

  $(".detailed_header").on("click", function(){
    $(".menu").toggleClass('open-menu');
    $(".content").css({"width":"calc(100% - 300px)", "margin-left":"200px", "opacity": "0.6", "transition": ".7s ease-in-out"})
    // $(".index").css({"height":"100%", "width":"100%",  "transition": ".7s ease-in-out"})
  })

  $(document).on("click", ".close-menu", function(){
    $(".content").css({"width":"100%", "margin-left":"0px", "transition": ".7s ease-in-out"})
  })

  $(document).on("click", ".menu", function(){
    $(".content").css({"width":"100%", "margin-left":"0px", "opacity": "1","transition": ".7s ease-in-out", })
    // $(".index").css({"height":"100%", "width":"100%" ,  "transition": ".7s ease-in-out"})
  })

  $(".humberger_icon").on({"mouseenter": function(){
    console.log("発火")
    $("span#humberger").css({"background":"black"})},
    
    'mouseleave': function(){
    $("span#humberger").css({"background":"#555"})
		}
  })
})