$(document).ready(function(){
    //console.log("ready!");
var keys = []
var $hlight = $('.key'), $span = $('span'),$space = $('#32');

var ids = $('.key').map(function(){
    return $(this).attr('id');
});
console.log(ids);

    // var i = 0;
    // var ids = [];
    // $(".class").each(function () {
    //     ids[i++] = $(this).attr("id"); //this.id
    // });


    $(document).keydown(function(e) {
        if(e.keyCode === 16){
            $("#keyboard-upper-container").toggle();
            $("#keyboard-lower-container").toggle();
            
        }
        keys[e.keyCode] = e.type == 'keydown';

        //var l = keys.length;
            // for (i = 0; i < ids.length; i++) {
            //     if (ids[i]) {
            //         $('ids').toggleClass('highlight');
            //         console.log(i + "pressed");
            //     }
            // } 
        $hlight.toggleClass('highlight','#32');

          
            //console.log("b has been pressed");
        
    });

    $(document).keyup(function(e) {
        // var $hlight = $('span.key'), $span = $('span'), $space = $('#32');
        if (e.keyCode === 16){
            $("#keyboard-upper-container").toggle();
            $("#keyboard-lower-container").toggle();
        }
        keys[e.keyCode] = e.type == 'keyup';
        // var l = keys.length;
        //     for(i = 0;i < l; i++){
        //         if(keys[i]){
        //             $('keys[i]').toggleClass('highlight')
        //             console.log(i + "no pressed");
        //         }
        //     } 
        $hlight.toggleClass('highlight','#32');
            //console.log("class added");

       
    });


    // var map = {}; // You could also use an array
    // onkeydown = onkeyup = function (e) {
    //     e = e || event; // to deal with IE
    //     map[e.keyCode] = e.type == 'keydown';
    //     /* insert conditional here */
    //}






        // var l = key.length;
        //         for(i = 0;i < l; i++){
        //             if(keys[i]){
        //                 console.log(i + "pressed");
        //             }
        //         } 


    // function changeKeys() {
    //     var html = '';
    //     for (var i in keys) {
    //         if(!keys.hasOwnProperty(i)) continue;
            
    //     }
    // }













})