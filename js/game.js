$(document).ready(function(){

    //Provide Word Options!
    
    //Generate word map based off Selection
    
    $("#wordChoice").click(function(){
        
        console.log("Sending");
        
        var wordBag = {};
        
        $('input[type=checkbox]').each(function () {
           if (this.checked) {
               
               var wordChoice = $(this).val();
               var choice = wordChoice.split(":");
               wordBag[choice[0]] = choice[1]
           }
        });
        
        for(var word in wordBag){
            console.log(word + ":" + wordBag[word]);   
        }
        
        
        
    });
    
    
    
    
    
    

    
    //Generate Word Map
    var words = {
                 ㄱ:"g", ㄴ:"n", ㄷ:"d", ㄹ:"r", ㅁ:"m", ㅂ:"b", ㅅ:"s", ㅇ:"ng", ㅈ:"j", ㅊ:"ch", ㅋ:"k", ㅌ:"t", ㅍ:"p", ㅎ:"h",
                 ㄲ:"kk", ㄸ:"tt", ㅃ:"pp", ㅆ:"ss", ㅉ:"jj",
                 ㅏ:"a", ㅑ:"ya", ㅓ:"eo", ㅕ:"yeo", ㅗ:"o", ㅛ:"yo", ㅜ:"u", ㅠ:"yu", ㅡ:"eu", ㅣ:"i",
                 ㅐ:"ae", ㅒ:"yae", ㅔ:"e", ㅖ:"ye", ㅘ:"wa", ㅙ:"wae", ㅚ:"oe", ㅝ:"wo", ㅞ:"we", ㅟ:"wi", ㅢ:"ui"   
    };    
    
    
    var correctAnswer = updateWord();
    var points = 0;
    $(".choice").click(function(){
        console.log(this.innerHTML);
        
        if(this.innerHTML == correctAnswer){
            console.log("Correct!");
            $("#choice1").css('background-color', '');
            $("#choice2").css('background-color', '');
            $("#choice3").css('background-color', '');
            $("#choice4").css('background-color', '');
            points++;
            updatePoints(points, "correct");
            correctAnswer = updateWord();
            
        }
        else{
            console.log("Incorrect!");
            $(this).css('background-color', 'red');
            points--;
            updatePoints(points, "incorrect");
        }
    
    
    });
    
    
    
    function updateWord(){  
        
        $("#gameContent").css('opacity', '0');
        var realWord = randomValueOf(words);
        setTimeout(function() {  
            
            $("#wordToGuess").html(realWord); 

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
            $("#gameContent").css('opacity', '1'); }, 300);
        
        return words[realWord];
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
    
    function updatePoints(points, value){
        
        if(value == "incorrect"){
            //$("#gamePoints").css('color', 'red'); 
            $("#pointsAdder").html("-1");
            $("#pointsAdder").css('color', 'red');
            setTimeout(function() { $("#pointsAdder").html(''); }, 400);
            setTimeout(function() { $("#pointsAdder").css('color', ''); }, 400);
        }
        else{
            //$("#gamePoints").css('color', 'green'); 
            $("#pointsAdder").html("+1");
            $("#pointsAdder").css('color', 'green');
            setTimeout(function() { $("#pointsAdder").html(''); }, 400);
            setTimeout(function() { $("#pointsAdder").css('color', ''); }, 400);
        }
        $("#gamePoints").html(points);
        //setTimeout(function() { $("#gamePoints").css('color', ''); }, 400);
    }
});
