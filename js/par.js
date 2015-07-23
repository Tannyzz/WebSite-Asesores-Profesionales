$(document).ready(function(){
      $('.parallax').parallax();
      $(".button-collapse").sideNav();

     var options = [{selector: '#propuesta', offset: 300, callback: 'Materialize.showStaggeredList("#propuesta")'}]; 
     Materialize.scrollFire(options); 
     var sys = [{selector: '#sys', offset: 300, callback: 'Materialize.showStaggeredList("#sys")'}]; 
     Materialize.scrollFire(sys); 

    });