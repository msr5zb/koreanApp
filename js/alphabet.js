$(document).ready(function() {
        
        //40 Chars
        var koreanSymbols = 
                            [
                                 "ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ",
                                 "ㄲ", "ㄸ", "ㅃ", "ㅆ", "ㅉ",
                                 "ㅏ", "ㅑ", "ㅓ", "ㅕ", "ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅡ", "ㅣ",
                                 "ㅐ", "ㅒ", "ㅔ", "ㅖ", "ㅘ", "ㅙ", "ㅚ", "ㅝ", "ㅞ", "ㅟ", "ㅢ"     
                            ];
        
        var englishCounterParts = 
                            [
                                 "g", "n", "d", "r", "m", "b", "s", "ng", "j", "ch", "k", "t", "p", "h",
                                 "kk", "tt", "pp", "ss", "jj",
                                 "a", "ya", "eo", "yeo", "o", "yo", "u", "yu", "eu", "i",
                                 "ae", "yae", "e", "ye", "wa", "wae", "oe", "wo", "we", "wi", "ui"
                            ];
          
        
        var symbolIndex = Math.floor((Math.random() * 40));
        var points = 0;
        var flag = 0;
        var cheatFlag = 0;    
    
        updateWord();
        
        $("#inputlg").keyup(function (e) {
            if (e.keyCode == 13){   
                
                //Multi Answer Solutions
                if(koreanSymbols[symbolIndex] == "ㄱ"){
                    if($("#inputlg").val() == "g" ||$("#inputlg").val() == "k"){
                        rightAnswer();
                    }
                    else{
                        wrongAnswer();
                    }                
                }
                else if(koreanSymbols[symbolIndex] == "ㄷ"){
                    if($("#inputlg").val() == "d" || $("#inputlg").val() == "t"){
                        rightAnswer();
                    }
                    else{
                        wrongAnswer();
                    }                
                }
                else if(koreanSymbols[symbolIndex] == "ㄹ"){
                    if($("#inputlg").val() == "r" || $("#inputlg").val() == "l"){
                        rightAnswer();
                    }
                    else{
                        wrongAnswer();
                    }                
                }
                else if(koreanSymbols[symbolIndex] == "ㅂ"){
                    if($("#inputlg").val() == "b" || $("#inputlg").val() == "p"){
                        rightAnswer();
                    }
                    else{
                        wrongAnswer();
                    }
                }                    
                    
                
                //Normal Solutions
                else if($("#inputlg").val() == englishCounterParts[symbolIndex]){
                    rightAnswer();
                }
                else{
                    wrongAnswer();
                }
            }
        });
   
        function updateWord(){
            if(flag == 1){
                
                //Multi Answer Solutions
                if(koreanSymbols[symbolIndex] == "ㄱ"){
                   $("#answerStatus").html("Correct: " + koreanSymbols[symbolIndex]+ " = g,k"); 
                }
                else if(koreanSymbols[symbolIndex] == "ㄷ"){
                   $("#answerStatus").html("Correct: " + koreanSymbols[symbolIndex]+ " = d,t"); 
                }
                else if(koreanSymbols[symbolIndex] == "ㄹ"){
                   $("#answerStatus").html("Correct: " + koreanSymbols[symbolIndex]+ " = r,l"); 
                }
                else if(koreanSymbols[symbolIndex] == "ㅂ"){
                   $("#answerStatus").html("Correct: " + koreanSymbols[symbolIndex]+ " = b,p"); 
                }                    
                    
                
                //Normal Solutions               
                else{
                    $("#answerStatus").html("Correct: " + koreanSymbols[symbolIndex]+ " = " + englishCounterParts[symbolIndex]);   
                }           
                    
                $("#answerStatus").css("background-color", "green");
                symbolIndex = Math.floor((Math.random() * 40));
                
            }
            else if(flag == -1){
                 //Multi Answer Solutions
                if(koreanSymbols[symbolIndex] == "ㄱ"){
                   $("#answerStatus").html("Incorrect: " + koreanSymbols[symbolIndex]+ " = g,k"); 
                }
                else if(koreanSymbols[symbolIndex] == "ㄷ"){
                   $("#answerStatus").html("Incorrect: " + koreanSymbols[symbolIndex]+ " = d,t"); 
                }
                else if(koreanSymbols[symbolIndex] == "ㄹ"){
                   $("#answerStatus").html("Incorrect: " + koreanSymbols[symbolIndex]+ " = r,l"); 
                }
                else if(koreanSymbols[symbolIndex] == "ㅂ"){
                   $("#answerStatus").html("Incorrect: " + koreanSymbols[symbolIndex]+ " = b,p"); 
                }                    
                    
                //Normal Solutions             
                else{
                    $("#answerStatus").html("Incorrect: " + koreanSymbols[symbolIndex]+ " = " + englishCounterParts[symbolIndex]); 
                }
                $("#answerStatus").css("background-color", "red");
                
            }
            else{
                $("#answerStatus").html("Best of Luck!"); 
            }
                  
            $("#symbol").html(koreanSymbols[symbolIndex]); 
            $("#inputlg").val("");
            $("#points").html("Points: " + points);   
        }
        
        function rightAnswer(){
            points++;
            flag = 1;
            updateWord();  
        }
        
        function wrongAnswer(){
            points--;
            points--;
            flag = -1;
            updateWord(); 
        }
        
        $("#cheatButton" ).click(function() {
            if(cheatFlag == 0){
                $(this).html("Hide Cheat Sheet");
                cheatFlag = -1;
                $("#cheatSheet").css("height", "500px");
                $("#cheatButton").hover(function(){
                    $(this).css("background-color", "red");
                    }, function(){
                    $(this).css("background-color", "darkred");
                });
            }
            else{
                $(this).html("Show Cheat Sheet");
                cheatFlag = 0;
                $("#cheatSheet").css("height", "0px");
                $("#cheatButton").hover(function(){
                    $(this).css("background-color", "midnightblue");
                    }, function(){
                    $(this).css("background-color", "dodgerblue");
                });
            }
        });
        
    });