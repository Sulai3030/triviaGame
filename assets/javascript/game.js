//var score;
//var timer;
//var questions;
//var choices;
//var results;
var trivia;
var win;
var lost
var unanswered;
var timer;
var updateDisplay;
var gamearea;
var game;
var timeLeft;
var victory;
/*
var counter = 0;
questions[0]
once user selects an answer, 2 things:
    1. compare the selected value to corect answer
    2. increment counter to 1, display questions[1] to page
*/
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

//radiobtn hide code
var t;

$(function(){
    $('#h4').on('keypress', function(){
      clearTimeout(t);
      
      t = setTimeout(function(){
        $('.form-group:eq(1)').fadeIn();
      }, 1000);
    });
});


// Loop through questions, and pluck out question like questions[i].question
console.log(questions[0].choices[0])

for(var i=0; i<questions.length;i++)
{//print out the questions
   console.log("Question "+ i+1+ " " +questions[i].question);
   //print out each choice for the question
   for(var x=0; x< questions[i].choices.length;x++)
   {
       console.log(questions[i].choices[x]);
   }
};

var i;
for (i = 0; i < questions.length; i++) { 
    var text = questions[i];
    console.log(text);
}
console.log(questions[0].choices);
questions[0]
// Then display questions in html elements
//Same loop; display answer choices (might need 2nd loop inside the first one) questions[i].choices
for (var i=0; i<=questions.length; i++)
{
    //DEBUG UNDEFINED VALUE BEING PUSHED INTO HTML ELEMENTS
    document.getElementById('questions').innerHTML+= '<p>'+ questions[i].question+'</p><br><br>';
    for (var j=0; j<4; j++){
        //THE PROBLEM IS ON LINE 92
        document.getElementById('questions').innerHTML+='<input type="radio" name='+j+'>'+questions[i].choices[j]+'<br>';
            }
}
   

 //setinterval to count down time
function timeLeft(){
	$("#s_timer").countdowntimer({
		seconds : 1000
              ,size : "lg"
	});
};
//ONLY ALLOW ONE BUTTON TO BE CLICKED PER CHOICE
//ON SUBMIT 

//setInterval(function() {
    // code to run every 5 seconds
 //   var last = parseInt($('#timeLeft').val());
// $('#timeLeft').val(last - 1);
//  }, 1000)

  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
    // console log 10 seconds left
    var number = 10;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
    $("#resume").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();

    var timeLeft = document.createElement('timeLeft');
    timeLeft.id = 'block';
    timeLeft.className = 'block';
    
    // Create the inner div before appending to the body
    var innerDiv = document.createElement('div');
    innerDiv.className = 'block-2';
    
    // The variable iDiv is still good... Just append to it.
    timeLeft.appendChild(innerDiv);
    
    // Then append the whole thing onto the body
    document.getElementsByTagName('body')[0].appendChild(timeLeft);
     

  

//for loop to check answers    
//var trivia;
//    for (i = 0; i < trivia.length; i++){
//    text += trivia[i] + "<questions>";                                           
// }



 //IF statement to check if game is done

if (questions){
     $("#You Win!".click());
} else if (results){"#Sorry, Try Again. Womp Womp!"} //else {
//     ("Try again!") 
//}


//check when all questions are done

// else/if

// //clear area


// //display the Trivia.win Trivia.lost Trivia.unanaswered
function victory() {
    alert("#You Win!");
}

// NEED SUBMIT BUTTON
//$("#submitbtn").on(function(event){
    $( "#submitbtn" ).submit(function( event ) {
        alert( "Handler for .submit() called." );
        event.preventDefault();
      });
    //logic for checking submiitted answers with correct // // answers




// //make sure user clicks correct answer
// //if userChoices.val()===""
// //unaswer ++
// //if (userChoices)!=answer)
// //lost++


/*
QUestions Array => Good

Setting up inputs: 
<input type="radio" name='+j+'>'+questions[i].choices[j]>

<input type='radio' data-value='Q1-1'>My Cousin Vinny</input>
on click:
- grab the data value of clicked radio input (Q3-4)

Answers Array => [{Q1: 'My Cousin Vinny'}, {Q2: }, {Q3: 'Muhammad Ali'}, {Q4: }];

- Answers array is filled up with value for each Question
- On Submit, compare the value for each question in arnswer array to correct answer
*/