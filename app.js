let textArea = document.getElementById("textInput");
textArea.addEventListener('input', function(){
    let storeValue = this.value; //all input value store here
    

    let letterCharecter = document.querySelector(".counter");
    letterCharecter.innerHTML = storeValue.length; //all charecter lenght store here



    let wordCount = document.querySelector(".word");
    storeValue = storeValue.trim();
    let arrayValue = storeValue.split(" "); //create stirng to array 
    let filterValue = arrayValue.filter(function(val){
        return val !== '';
    })
    wordCount.innerHTML = filterValue.length;

    
    function largestWord(catchValue){
        let largestWord = '';
        for(val of catchValue){
            if(val.length > largestWord.length){
                largestWord = val;
            }
        }
        document.getElementById("largestWord").innerHTML = largestWord;
    }
    largestWord(arrayValue);



    let countSentence = Array.from(storeValue);
    let sentenceCount = '';
    for(catchValue of countSentence){
        if(catchValue === "." || catchValue === "?" || catchValue === "!"){
            sentenceCount++;
        }
    }
    let senteceCount = document.querySelector(".sentece");
    senteceCount.innerHTML = sentenceCount;
    
    let voweCount = '';
    let consonentCount = '';
    for(vowel of countSentence){
        if(vowel === "A" || vowel === "a" || vowel === "E" || vowel === "e" || vowel === "I" || vowel === "i" || vowel === "O" || vowel === "o" || vowel === "u" || vowel === "U"){
            voweCount++;
        }else{
            consonentCount++;
        }
    } 
    document.querySelector(".vowel").innerHTML = voweCount;
    document.querySelector(".consonent").innerHTML = consonentCount;
    







})
