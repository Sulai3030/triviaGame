//var trivia;
//var game;
//var score;
//var timer;
//var questions;
//var choices;
//var results;
//var win;
//var lost
//var unanswered;
//var counter;

var trivia = questions;
[{[
     trivia = [
        questions] ["Which movie dircted by Martin Scorcese and starring Joe Pesci, Robert Deniro, and Ray Liotta won the BAFTA Awar for Best Picture?"]
        [choices]["My Cousin Vinny?", "My Big Fat Greek Wedding?", "Goodfellas?", "Air America?"]
        [correctAnswer]["Good Fellas"]
     ]:
{
    trivia = [
        Question]
        ["Who had the first number one Rap Single?"]
        [choices]["MC Hammer", "DJ Jazzy Jeff and the Fresh Prince", "Vanilla Ice?", "Public Enemy?"]
        [correctAnswer]["Vanilla Ice"]
    ]:
{
        
    trivia = ["Who lit the Olympics Torch       at the 1996 Summer Olympics?",
        [choices]
        ["The Counting Crows?", "Mayor Andrew Young?", "President Clinton", "Muhammed Ali","Chris Harwicke and Jenny McCarthy"]
        [correctAnswer]["Muhammed Ali"]
    ]:
    {

        Question3:["Which stunning pair of FBI Agents should my girlfriend been dating?",
        [choices]["Agent Scully?","Agent Starling?","Agent Cooper?", "Agent Mulder"]
        [correctAnswer]["Agent Scully"]
        document.write(trivia)
};

var game = 
{
    var: 'win',
    var: 'lost',
    var: 'unanswered',
    var: 'counter'

    function setInterval() {
        (function(){ alert("Times"); }, 5000);
    }
        setInterval(fiveSeconds, 1000 * 5);
        setInterval(tenSeconds, 1000 * 10);
        setInterval(timesUp("Time's Up!"));
    }
        $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
console.log("10 seconds left");
    }
     $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
console.log("5 seconds left");
    }
    function timeUp() {
    console.log("done");
    $("#time-left").append("<h2>Time's Up!</h2>");
    console.log("time is up");
  }

