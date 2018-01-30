
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',' Too ato too nOt enot one totA not anot tOO aNot',' oat itain oat tainnate eate tea anne inant nean',' itant eate anot eat nato inate eat anot tain eat', ' nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentenceContainer;
let sentenceCounter = 0;
let letterCounter = 0;
let upper;
let lower;
let errors;
var currentSentence = sentences[0];
var currentLetter = currentSentence[0];

var currentLetterDiv = $("#target-letter");
currentLetterDiv.text(currentLetter);
$("#words").append(sentences[sentenceCounter]);


$("#keyboard-upper-container").hide();

$(document).ready(()=>{
    upper = $("#keyboard-upper-container");
    lower = $("#keyboard-lower-container");
    sentenceContainer = $('#sentence');

   
});

$("#sentence").append(currentSentence);
$("#target-letter").append(currentLetter);



$(document).on('keydown keyup', (e)=> {
    if(e.keyCode === 16){
        if(e.type === 'keydown'){
         lower.hide();
         upper.show();
        }else {
         upper.hide();
         lower.show();
        }            
    }
});

$(document).keydown(function (e) {
    if (e.keyCode + 32) {
        $("#" + (event.which + 32)).addClass('highlight');
    }
    $("#" + (event.which)).addClass('highlight');
    $("#32" + (event.which)).addClass('highlight');
});

$(document).keyup(function (e) {
    if (e.keyCode + 32) {
        $("#" + (event.which + 32)).removeClass('highlight');
    }
    $("#32" + (event.which)).removeClass('highlight');
    $("#" + (event.which)).removeClass('highlight');


});



 $(document).keypress(function (event) {
        var keyPress = event.which;
        $('#' + keyPress).addClass('highlight');
        var currentSentence = sentences[sentenceCounter];
        var currentLetter = currentSentence[letterCounter];
        // if (start == undefined) { // if there is no value in start, set it to = the event.timeStamp
        //     start = event.timeStamp;
        // }
 });

$("#prompt-container").css("left", "+=17.5px");

letterCounter++;
var nextLetter = currentSentence[letterCounter];
currentLetterDiv.text(nextLetter);

document.onkeypress = function(e) {
    if (letterCounter < currentSentence.length - 1) { 
        if (e.which === currentLetter.charCodeAt()) { 
            $("#feedback").append("<span class = 'glyphicon glyphicon-ok'></span>"); 
        } else {
            $("#feedback").append("<span class = 'glyphicon glyphicon-remove'></span>");
            errors++;
        }
    }
}

if (letterCounter == currentSentence.length) { 
    $("#sentence").empty(); 
    sentenceCounter++;
    console.log(sentenceCounter)
    currentSentence = sentences[sentenceCounter]; 

    $("#sentence").append(sentences[sentenceCounter]); 
    letterCounter = 0; 
    if (sentenceCounter < sentences.length - 1) {
        var nextLetter = currentSentence[letterCounter];
    }
    currentLetterDiv.text(nextLetter); 
    $("#prompt-container").css({ left: 17 }); 
    $("#feedback").empty(); 
}


// if the shift key is pressed as false & keycode >=65 & <= 90..then would be truecode += 32....set var to key and set # to target the ids with truecode..if keydown then hightlight or add class.verify that the right key was pressed. if keytype == keyup...if the truecode equal the targetkeycode..the lettercounter should be equal to the sentences[senterncecounter].length{
// sentencecounter ++....
// }

/*
create a function to hold the split of the array. set the sentencecounter to 0..empty the sentencecontainer or div..split the sentence..create and map the slipt sentence and nest within the div(given)

*/

//const key = `#${trueCode}`;

// const configureSentence = () => {
// sentence = sentences[sentenceCounter];

// sentenceContainer.empty();

// let splitSentence = sentences.split('');

// let configuredSentence = splitSentence.map((character,index) => {
//             return `<span id="target-${index}">${character}</span>`
//         }).join('');
//         console.log(splitSentence)

// sentenceContainer.append(configuredSentence);
// }
/*
        to knwo what key to press...create the function..targetletter and use target with the letter counter..if ;ettercounter != 0..target-lettercounter - 1.removeclass...targetkeycode = trgetletter.text.charcode0...targetletter.addclass
*/



//console.log(splitSentence);





