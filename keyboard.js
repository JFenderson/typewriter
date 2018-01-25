
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',' Too ato too nOt enot one totA not anot tOO aNot',' oat itain oat tainnate eate tea anne inant nean',' itant eate anot eat nato inate eat anot tain eat', ' nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentencesIndex = sentences.length;
let sentenceContainer = $('#sentence-container');
console.log(sentencesIndex);
let sentenceCounter = 0;

$("#keyboard-upper-container").hide();

$(document).keydown(function(e) {
    if(e.which === 16){
        $("#keyboard-upper-container").show();
        $("#keyboard-lower-container").hide();
    }
});

$(document).keyup(function(e) {
    if (e.which === 16){
        $("#keyboard-upper-container").hide();
        $("#keyboard-lower-container").show();
    }
    
});

$(document).bind("keydown", function(e){
    $("#" + (event.which)).css("background-color", "green");
});
$(document).bind("keyup", function (e) {
    $("#" + (event.which)).css("background-color", "");
});
$(document).bind("keydown", function (e) {
    $("#" + (event.which + 32)).css("background-color", "green");
});
$(document).bind("keyup", function (e) {
    $("#" + (event.which + 32)).css("background-color", "");
});
$(document).bind("keydown", function (e) {
    $("#32" + (event.which)).css("background-color", "green");
});
$(document).bind("keyup", function (e) {
    $("#32" + (event.which)).css("background-color", "");
});

const sentence = $(`<span>${sentences[0]}</span>`);
sentenceContainer.append($())

const configureSentence = (sentence) => {
    const splitSentence = sentence.split('')
    .join
    return splitSentence.map((character) => {
        return `<span id="target->${index}">${character}</span>`;
    });
    // let l = 'text';
    // l.split('');
});


let queue = sentences;
$(document).keydown(function(e){
    if(event.which !== 0) {
        let val = queue.shift();
        $("#sentence").append(val);
    }
});

const highlightTargetLetter = () => {

}



// $(document).keypress(function(e){
//     for (i = 0; i < ids.length; i++)
//     if(typeof ids == "number" && isFinite(id)){
//         console.log("true")

//     }
// })


