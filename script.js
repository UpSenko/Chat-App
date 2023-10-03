function getBotResponse(input) {
    
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "I Love you Senpai!"){
        return "(interally screams) 😖";
    } else if(input =="what is your name"){
        return "Hello my name is Nella nice to and it is very nice meeting you ";
    } else if(input == "what are you doing"){
        return "Im gald you asked! Currently, I am just chilling. Yep, my favorit hobby =  nothing till you command me ";
    }
    
    //Greetings and Farerell
    if (input == "hello") {
        return "Hello Senpai!!";
    } else if (input == "goodbye") {
        return "Ill miss you , farewell Senpai";
        
  //Telling Time
    } else if (input == "what time is it" ) {
        return getTime() + " Sweety 😊";
        
  //One word responses
    } else if(input == "good"){
        return "alright then";
    } else if(input == "thank you") {
        return "😄 no prob";
    } else if(input == "nice") {
        return "😶🌫️👍";
    } if (input == "sorry"){
        var appology = ["Its okay 😁", " I forgive you", "Thank You", "Don't worry about it", "it happens","its fine"];
        var randomR = appology[Math.floor(Math.random()*appology.length)];
        return randomR;
  //Opening stuff
    } else if(input == "play music"){
        return "okay uwu=" + ~~window.open("https://open.spotify.com/playlist/012GSIqUOoikRrFa4wTW3T");
    } else if(input == "open youtube"){
        return " ^_^ done senpai └(^o^)┘--ya " + window.open("https://youtube.com");
    } else {
        var feedback = ["Why can't I understand you?", "HUM?", "Umm...", "...", "?"];
        var rfeedback= feedback[Math.floor(Math.random()*feedback.length)];
        return rfeedback;
    }
}
//collapsible function to make the chat toggle open or close on click




// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("mouseover", function() {
        this.classList.toggle("active");
       
        var content = this.nextElementSibling;
        
        if(content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px"; 
        }
    
    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    
    if (hours < 10) {
        hours = "0" + hours;
    }
    
     if (minutes < 10) {
         minutes = "0" + minutes;
    }
    
    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "How's it going senpai"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "I Love you Senpai!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1500)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

