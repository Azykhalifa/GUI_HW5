/*
NAME: Mohmmadazhar Khalifa
Date 12/16/2021
Email: mohmmadazhar_khalifa@student.uml.edu

File Description: This is the Javascript file which add the functionality of
drag and drop to the scrabble game and also performs the validations. Also, does
the score calculation for the game.
*/


//Scrabble Words stored in Array. References  Prof. Heines array.
var ScrabbleTiles = [] ;
ScrabbleTiles[0] = { "letter": "A", "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_A.jpg" } ;
ScrabbleTiles[1] = { "letter": "B", "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_B.jpg"  } ;
ScrabbleTiles[2] = { "letter": "C", "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_C.jpg"  } ;
ScrabbleTiles[3] = { "letter": "D", "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_D.jpg"  } ;
ScrabbleTiles[4] = { "letter": "E", "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_E.jpg" } ;
ScrabbleTiles[5] = { "letter": "F", "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_F.jpg"  } ;
ScrabbleTiles[6] = { "letter": "G", "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_G.jpg"  } ;
ScrabbleTiles[7] = { "letter": "H", "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_H.jpg"  } ;
ScrabbleTiles[8] = { "letter": "I", "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_I.jpg"  } ;
ScrabbleTiles[9] = { "letter": "J", "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_J.jpg"  } ;
ScrabbleTiles[10] = { "letter": "K", "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_K.jpg"  } ;
ScrabbleTiles[11] = { "letter": "L", "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_L.jpg"  } ;
ScrabbleTiles[12] = { "letter": "M", "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_M.jpg"  } ;
ScrabbleTiles[13] = { "letter": "N", "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_N.jpg"  } ;
ScrabbleTiles[14] = { "letter": "O", "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_O.jpg"  } ;
ScrabbleTiles[15] = { "letter": "P", "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_P.jpg"  } ;
ScrabbleTiles[16] = { "letter": "Q", "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_Q.jpg"  } ;
ScrabbleTiles[17] = { "letter": "R", "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_R.jpg"  } ;
ScrabbleTiles[18] = { "letter": "S", "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_S.jpg"  } ;
ScrabbleTiles[19] = { "letter": "T", "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_T.jpg"  } ;
ScrabbleTiles[20] = { "letter": "U", "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_U.jpg"  } ;
ScrabbleTiles[21] = { "letter": "V", "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_V.jpg"  } ;
ScrabbleTiles[22] = { "letter": "W", "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_W.jpg"  } ;
ScrabbleTiles[23] = { "letter": "X", "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_X.jpg"  } ;
ScrabbleTiles[24] = { "letter": "Y", "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_Y.jpg"  } ;
ScrabbleTiles[25] = { "letter": "Z", "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_Z.jpg"  } ;
ScrabbleTiles[26] = { "letter": "Blank", "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "file" : "./Image/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"  } ;

//letters left on the board
var totalScrabbles = 100;
var totalScore = 0;     // total score
var lineScore = 0;      // score of current line
var wordScoredArr = [null, null, null, null, null, null, null];        //value of each placed tile
var elementsPlaced = [null, null, null, null, null, null, null];  //element of each placed tile
var flag = true; // flag for first placed tile
var placed =false;
var firstIndex = -1;    //first tile placed index
var currentIndex = -1;  //currently placed tile index



//Create rack
function CreateRack(){
    //Generate 7 letters
    let countLetters = 0
    let letters = []        //Generated ketters array
    while (countLetters < 7){
        if(totalScrabbles < 7){
            break;
        }
        let generated_number = Math.floor(Math.random() * 26);      //Generate random number between 0-26 (inclusive)
        if(ScrabbleTiles[generated_number]["number-remaining"] === 0){      //If the word has no number-remaining generate new word
        }else{
            //If word is found decrement number-remaining and add the letters array
            ScrabbleTiles[generated_number]["number-remaining"] = ScrabbleTiles[generated_number]["number-remaining"]-1
            totalScrabbles--;
            countLetters++
            letters.push(generated_number)
        }
    }

    // If there are letters in the array add to game
    if(letters.length !== 0){
        addLetterToGame(letters)
    }
}

// Add letters to the rack
function addLetterToGame(letters){
    $( ".letters" ).empty();
    for(let i = 0; i < letters.length; i++){
        $( ".letters" ).append( '<img id="'+letters[i]+'" src="'+ScrabbleTiles[letters[i]]["file"]+'" alt="'+ScrabbleTiles[letters[i]]["letter"]+'" class="letter draggable">' );
    }
}


//Score game
function GameScore() {

    let startIndex = -1;
    let WordValue = "";
    //word start index
   for(let i=0;i<wordScoredArr.length;i++){
        if(wordScoredArr[i]!=null){
            startIndex = i;
            break;
        }
   }
   //will be true if any tile is placed
   if(startIndex!=-1){
    //convert value to letter
    for(let i = startIndex;i<wordScoredArr.length;i++){
        if(wordScoredArr[i]!=null){
            WordValue += ScrabbleTiles[wordScoredArr[i]].letter;
        }
        else{
            break;
        }
    }
  var wordResult = WordValue.toLowerCase();

   //Validating from dictionary if word found
    if(dictionaryCheck[wordResult]){
        CalculateLineScore(true);
    }
    else{
        CalculateLineScore(false);
    }
   }

}


// Create new scrabble line
function NextLine(){
    if(totalScrabbles < 7){
        $( "#game-over" ).text("Game Over");
    }
    else{
        $( "#spnRemTiles" ).text(totalScrabbles-9);
    }
    totalScore = totalScore + lineScore;
    $( "#score" ).text(totalScore);

    //totalScrabbles
    lineScore =0;
    wordScoredArr = [null, null, null, null, null, null, null];;
    CreateRack();
}

// Start over the game
function StartAgain(){
    $( "#game-over" ).text("");
    for(let i = 0; i < ScrabbleTiles.length; i++){
        ScrabbleTiles[i]["number-remaining"] = ScrabbleTiles[i]["original-distribution"]
    }
    totalScrabbles = 100;
    totalScore = 0;
    lineScore = 0;
    wordScoredArr = [null, null, null, null, null, null, null];
    $( "#score" ).text(totalScore + lineScore);
    $( "#spnRemTiles" ).text(totalScrabbles-9);
    CreateRack();
    console.log(wordScoredArr);
}

// Assign what should be the drag and drops
function drag_and_drop(){
    $( ".draggable" ).draggable({snap: ".target" ,
    start: function(event, ui) {
       placed = false;

  },
  drag: function(event, ui) {

  },
  stop: function(event, ui) {
    //tile animating back to rack on dropped outside
   if(!placed){
        $(ui.helper[0]).animate({
                    top: "0px",
                    left: "0px"
                });

   }
  }});
    $( ".target" ).droppable({
        drop: function( event, ui ) {
            // for first tile place
            if(flag){
                $(ui.draggable).draggable( 'disable' );
                flag = false;
                firstIndex = parseInt($(this).attr('id'));
                wordScoredArr[parseInt($(this).attr('id'))] = $(ui.draggable).attr('id');
                elementsPlaced[parseInt($(this).attr('id'))] = $(ui.draggable);
                CalculateLineScore(true);
            }
            // Remaining tile place
            else{
                currentIndex = parseInt($(this).attr('id'));
                CheckTilePlacement((ui.draggable));
            }
            placed = true;
        },
        out: function( event, ui ) {
            CompareSameTileOut(ui.draggable);
        }
      });

}

$( function() {

    CreateRack()      // Generate rack on page load
    drag_and_drop()

    // When next line is clicked the next line should show
    $( "#newline" ).click(function() {
        flag = true;
        NextLine()
        drag_and_drop()
    });

    // When start over is clicked start the game over
    $( "#start-again" ).click(function() {
        flag = true;
        StartAgain()
        drag_and_drop()
    });
});

//Tile Place Check
function CheckTilePlacement(div){
    let placeTile = false;
    // Checking position is valid for tile placement
    if(firstIndex!=-1&&currentIndex!=-1){
        if(wordScoredArr[currentIndex]==null){
            if(currentIndex==0&&wordScoredArr[currentIndex+1]!=null){
                placeTile = true;
            }
            else if(currentIndex==(wordScoredArr.length-1)&&wordScoredArr[currentIndex-1]!=null){
                placeTile = true;
            }
            else if(wordScoredArr[currentIndex-1]!=null || wordScoredArr[currentIndex+1]!=null ){
                placeTile = true;
            }
        }
    }
    //if tile is overlapped or both sides are empty then animate back to rack
    if(!placeTile){
        $(div).animate({
            top: "0px",
            left: "0px"
        });
    }
    // Tile is placed and array is for storing element and its id
    else{
        if(wordScoredArr[currentIndex]==null){
            wordScoredArr[currentIndex] = $(div).attr('id');
            elementsPlaced[currentIndex] = (div);
            GameScore();
        }

    }

}
//Compare element if its moved from scrabble board to empty array index
function CompareSameTileOut(div){
    for(let i = 0;i<elementsPlaced.length;i++){
        if(elementsPlaced[i]!=null){
            if($(div).is($(elementsPlaced[i]))){
                wordScoredArr[i] = null;
                GameScore();
            }
        }
    }
}
// Calculate per line score
function CalculateLineScore(word){
    let multiple = 1;
    let startIndex = -1;
    let scoreLine = 0;
    if(word){


       for(let i=0;i<wordScoredArr.length;i++){
            if(wordScoredArr[i]!=null){
                startIndex = i;
                break;
            }
        }
        if(startIndex!=-1){
            for(let i = startIndex;i<wordScoredArr.length;i++){
                if(wordScoredArr[i]!=null){
                    scoreLine +=parseInt(ScrabbleTiles[wordScoredArr[i]].value);
                    if(i==1){
                        multiple *=2;
                    }
                    else if(i==5){
                        multiple *=2;
                    }
                }
                else{
                    break;
                }
            }
            lineScore = scoreLine;
            lineScore *=multiple;

            // update element score
            $( "#score" ).text(totalScore +"+"+ lineScore);
        }
    }
    else{
        // update element score to zero if words not exist in dictionary
        lineScore = 0;
        $( "#score" ).text(totalScore +"+"+ 0);
    }


}
