
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',' Too ato too nOt enot one totA not anot tOO aNot',' oat itain oat tainnate eate tea anne inant nean',' itant eate anot eat nato inate eat anot tain eat', ' nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentenceContainer = $('#sentence');
let sentenceCounter = 0;
let queue = sentences;


$("#keyboard-upper-container").hide();

$(document).keydown(function(e) {
    if(e.which === 16){
        $("#keyboard-upper-container").show();
        $("#keyboard-lower-container").hide();
    }if (e.keyCode + 32) {
        $("#" + (event.which + 32)).css("background-color", "green"); 
    }
    $("#" + (event.which)).css("background-color", "green");
    $("#32" + (event.which)).css("background-color", "green");
    for(var i in splitSentence);
    
        sentenceCounter++;
        //console.log(sentenceCounter)
});

$(document).keyup(function(e) {
    if (e.which === 16){
        $("#keyboard-upper-container").hide();
        $("#keyboard-lower-container").show();
    } if (e.keyCode + 32) {
        $("#" + (event.which + 32)).css("background-color", "");
    }
    $("#32" + (event.which)).css("background-color", "");
    $("#" + (event.which)).css("background-color", "");


});
let configureSentence = sentences.map((sentence)=>{
    return sentence.split(' ');
    
});



let splitSentence = configureSentence.map((character,index) => {
            return `<span id="target-${index}">${character}</span>`
        }).join('');

//console.log(splitSentence);

sentenceContainer.append(splitSentence);
console.log(splitSentence);
let sentencesIndex = splitSentence.length;

// const highlightTargetLetter = () => {
//     if(e.which >= 97){
//         console.log("highlight");
//     }
// }


// console.log(sentenceCounter);
// console.log(configureSentence);
// console.log();



// $(document).keydown(function(e){
//     if(event.which !== 0) {
//         let val = queue.shift();
//         $("#sentence").append(val);
//     }
// });


