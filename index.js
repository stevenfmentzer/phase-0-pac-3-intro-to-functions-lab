function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    let response;

    if (string === string.toLowerCase()){
        response = "I can\'t hear you!";
    }
    else if (string === string.toUpperCase()){
        response = "YES INDEED!"
    }
    else if (string === "Let\'s have dinner together!"){
        response = "I would love to!";
    }
    return response;
}