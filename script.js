const startButton = document.querySelector("#startButton")


const things = {
    "Are you helpful":{
        "answered": false,
        "npc": "poobert"
    },
    "Are you slightly silly":{
        "answered": false,
        "npc": "poobert"
    },
    "Are you a yapper":{
        "answered": false,
        "npc": "poobert"
    },
    "Are you a Blåhaj":{
        "answered": false,
        "npc": "blargh"
    },
    "Do you have best fit":{
        "answered": false,
        "npc": "blargh"
    },
    "Are you blunt":{
        "answered": false,
        "npc": "blargh"
    },
    "Are you kind":{
        "answered": false,
        "npc": "heidi"
    },
    "Do you love your plants and your trash":{
        "answered": false,
        "npc": "heidi"
    },
    "Do you say haii!":{
        "answered": false,
        "npc": "heidi"
    },
    "Do you use only CAPS":{
        "answered": false,
        "npc": "ratticus"
    },
    "Are you goblin":{
        "answered": false,
        "npc": "ratticus"
    },
    "Do you have tom nook vibes":{
        "answered": false,
        "npc": "ratticus"
    },
    "Are you quiet and always thinking":{
        "answered": false,
        "npc": "player"
    },
    "Are you slightly lost":{
        "answered": false,
        "npc": "player"
    },
    "Are you whimsical":{
        "answered": false,
        "npc": "player"
    },
}

function takeRandomQuestion ()   {
    console.log(things)
}

startButton.addEventListener("click",  (event) =>{
    console.log("A")
    takeRandomQuestion()
})