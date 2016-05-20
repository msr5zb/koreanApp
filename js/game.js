$(document).ready(function(){

    
    
    //40 Chars

    
    
    
    //Generate Word Map
    var words = {
                                 ㄱ:"g", ㄴ:"n", ㄷ:"d", ㄹ:"r", ㅁ:"m", ㅂ:"b", ㅅ:"s", ㅇ:"ng", ㅈ:"j", ㅊ:"ch", ㅋ:"k", ㅌ:"t", ㅍ:"p", ㅎ:"h",
                                 ㄲ:"kk", ㄸ:"tt", ㅃ:"pp", ㅆ:"ss", ㅉ:"jj",
                                 ㅏ:"a", ㅑ:"ya", ㅓ:"eo", ㅕ:"yeo", ㅗ:"o", ㅛ:"yo", ㅜ:"u", ㅠ:"yu", ㅡ:"eu", ㅣ:"i",
                                 ㅐ:"ae", ㅒ:"yae", ㅔ:"e", ㅖ:"ye", ㅘ:"wa", ㅙ:"wae", ㅚ:"oe", ㅝ:"wo", ㅞ:"we", ㅟ:"wi", ㅢ:"ui"   

    };    

    for (var i in words){
        console.log(i + ":" + words[i]);
    }
    
    console.log("Begin The Test...");
    
    var realWord = randomValueOf(words);
    $("#wordToGuess").html(realWord); 
    console.log("End");
    
    var fakeWordsList = generateFakeWordsList(realWord);
    
    $("#choice1").html(words[fakeWordsList[0]]); 
    $("#choice2").html(words[fakeWordsList[1]]); 
    $("#choice3").html(words[fakeWordsList[2]]); 
    $("#choice4").html(words[fakeWordsList[3]]); 
    
    var realChoice = Math.floor(Math.random()*4);
    console.log("Answer is Choice: " + realChoice);
    switch(realChoice){
        case 0: $("#choice1").html(words[realWord]); break; 
        case 1: $("#choice2").html(words[realWord]); break; 
        case 2: $("#choice3").html(words[realWord]); break; 
        case 3: $("#choice4").html(words[realWord]); break; 
    }

    //Fill Word to Guess
    
    
    //Fill Choices to Select From
    
    
    //Check Word
    function arrayContainsWord(word, array){
        for(var arrayWord in array){
            console.log("Comparing: " + array[arrayWord] + " and " + word);
            if(word == array[arrayWord]){
                console.log("BOOOOOP!");
                return true;
            }
        }
        return false;
    }
    
    
    function generateFakeWordsList(anythingButMe){
        var newWordList = [];        
         
        while(newWordList.length != 4){
            var newWord = randomValueOf(words);
            console.log(newWordList);
            if(arrayContainsWord(newWord, newWordList) || newWord == anythingButMe){
                console.log("BEEP!");
                continue;
            }
            else{
                console.log("Adding New Word: " + newWord);
                newWordList.push(newWord);
            }
                
                
        }
        return newWordList;
    }
    
    
    //Randomly Get Key from Word Map
    function randomValueOf( obj ) {
        //Creates an Array Containing all Keys    
        var keys = Object.keys(obj);

        //Grabs the Length of the Array
        var len = keys.length;

        //Uses Length to Find random number between 0 and length-1.
        var rnd = Math.floor(Math.random()*len);

        //Return key based on random number matched with previously generated array
        var key = keys[rnd];
        return key;
    } 
});
