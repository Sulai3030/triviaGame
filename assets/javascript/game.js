var trivia;
//var score;
//var timer;
//var questions;
//var choices;
//var results;
var win;
var lost
var unanswered;
var timer;
var updateDisplay;
var gamearea;
var game;
var timeLeft;

let questions = [
    {
        question:
        "Which movie dircted by Martin Scorcese and starring Joe Pesci, Robert Deniro, and Ray Liotta won the BAFTA Awar for Best Picture?",
        
        choices: ["My Cousin Vinny?", "My Big Fat Greek Wedding?", "Goodfellas?", "Air America?"],
        
        correctAnswer: "Good Fellas",
    },
    
    {
        question:
        "Who had the first number one Rap Single?",
        
        choices:["MC Hammer", "DJ Jazzy Jeff and the Fresh Prince", "Vanilla Ice?", "Public Enemy?"],
        
        correctAnswer: "Vanilla Ice",
    },

        
    {   
        question:
        "Who lit the Olympics Torch at the 1996 Summer Olympics?",

        choices:
        ["The Counting Crows?", "Mayor Andrew Young?", "President Clinton", "Muhammed Ali","Chris Harwicke and Jenny McCarthy"],

        correctAnswer: "Muhammed Ali",
    },
   
    {   
        question:
        "Which stunning pair of FBI Agents should my girlfriend been dating?",
        
        choices:
        ["Agent Scully?","Agent Starling?","Agent Cooper?", "Agent Mulder"],
        
        correctAnswer: "Agent Scully",
    }
]
     var game = {

      win : 0,
      loss : 0,
      unanswered : 0,
      counter : 0
 };
 //setinterval to count down time
 function timeLeft(){
	$("#s_timer").countdowntimer({
		seconds : 1000
                ,size : "lg"
	});
};

// in the element with an id of time-left add an h2 saying About 10 Seconds Left!
    // console log 10 seconds left
 
  
  

//for loop to check answers    
//var trivia;
  //   for (i = 0; i < trivia.length; i++){
    // text += trivia[i] + "<questions>";                                           
 //}



// //IF statement to check if game is done
// if (questions){
//     $("#You Win!".click(){
        
//     };
// } else
// ("Sorry Try Again"();
// });

// else if (condition) {
//     ("Try again!") 
// }
// //check when all questions are done

// else/if

// //clear area
// //display the Trivia.win Trivia.lost Trivia.unanaswered

// //function for results
// updateDisplay {
//     "Results"
// }
// //make sure user clicks correct answer
// //if userChoices.val()===""
// //unaswer ++
// //if (userChoices)!=answer)
// //lost++
