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

// Loop through questions, and pluck out question like questions[i].question


var i;
for (i = 0; i < questions.length; i++) { 
    var text = questions[i];
    console.log(text);
}

// Then display questions in html elements
//Same loop; display anwer choices (might need 2nd loop inside the first one) questions[i].choices
for (var i=0; i<=2; i++)
{
    document.getElementById('questions').innerHTML+= '<p>'+ questions[i].question+'</p><br><br>';
    for (var j=0; j<=2; j++){
        document.getElementById('questions').innerHTML+='<input type="radio" name='+j+'>'+questions[i].choice+j+'<br>';
            }
}
   

 //setinterval to count down time
 //function timeLeft(){
//	$("#s_timer").countdowntimer({
//		seconds : 1000
//              ,size : "lg"
//	});
//};
setInterval(function() {
    // code to run every 5 seconds
    var last = parseInt($('#timeLeft').val());
    $('#timeLeft').val(last - 5);
  }, 5000)

  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
    // console log 10 seconds left
    var timeLeft = document.createElement('timeLeft');
    timeLeft.id = 'block';
    timeLeft.className = 'block';
    
    // Create the inner div before appending to the body
    var innerDiv = document.createElement('div');
    innerDiv.className = 'block-2';
    
    // The variable iDiv is still good... Just append to it.
    timeLeft.appendChild(innerDiv);
    
    // Then append the whole thing onto the body
    document.getElementsByTagName('body')[0].appendChild(iDiv);
     
  
  

//for loop to check answers    
//var trivia;
//    for (i = 0; i < trivia.length; i++){
//    text += trivia[i] + "<questions>";                                           
// }



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
