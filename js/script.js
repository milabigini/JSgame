
//var alle opgeslagen spullen in een box
//queryselector selecteert uit het document het onderdeel tussenhaakjes(# is een id)
//const de afbeeldingen op de map zullen niet meer veranderen
const koeAfbeelding = document.querySelector('img#koe')
const boomAfbeelding = document.querySelector('img#bomen')
const graanAfbeelding = document.querySelector('img#graan')
const steenAfbeelding = document.querySelector('img#steen')

var pop = document.querySelector('img#pop')
var huis = document.querySelector('img#huis')
var button = document.querySelector('button')
var graanKnop = document.querySelector('button#graanknop')
var steenKnop = document.querySelector('button#steenknop')
var gameOver = document.querySelector('audio#dood')
var kusGeven = document.querySelector('audio#kusgeven')



//de status begint bij 0 en telt in de functie op
var boomStatus = 0;
var koeStatus = 0;
//array(lijst begint tellen vanaf 0) voor mijn poppetjes positie
var leftPosities = ['-240px', '219px', '391px', '527px', '110px']
var topPosities = ['768px', '533px', '841px', '489px', '899px']

var audio = document.getElementById('audio')

//functie laat de code op een specifiek moment uitvoeren
//if en else uit opdracht week 2 de dobbelsteen
function boomHakken() {
    //boomstatus kan niet hoger dan 2
    if (boomStatus < 2) {
        //als boomstatus onder 1 dan verandert de tekst en mijn img
        if (boomStatus < 1) {
            huis.src = 'img/huisje1.png';
            document.querySelector('p').textContent = 'goedzo alleen je hebt alleen nog niet genoeg';
        }
        //anders verandert het mijn afb en tekst naar huisje2 etc. 
        else {
            huis.src = 'img/huisje2.png';
            document.querySelector('p').textContent = 'Nu kunnen we je huis gaan bouwen.';
            koeAfbeelding.addEventListener('click', koeMelken);
            button.addEventListener('click', maakHuis)
            //https://www.youtube.com/watch?v=SHNKHN82Czs

        }
    }
    //settimeout voert de functie uit na een bepaald aantal seconden
    setTimeout(vanHuisNaarBoom, 4000);
    boomStatus = boomStatus + 1;
    //zorgt ervoor dat #pop beweegt naar de bomen pakt het eerste getal uit de array
    pop.style.left = leftPosities[0]
    pop.style.top = topPosities[0]
    //zorgt ervoor dat de audio speelt
    audio.play()

}

//functie is geconnect met de button
function maakHuis() {
    huis.src = 'img/huisje3.png';
    document.querySelector('p').textContent = 'Laten we nu wat anders verzamelen.';
    document.querySelector('button').textContent = 'klaar';

}


function vanHuisNaarBoom() {
    pop.style.left = leftPosities[0]
    pop.style.top = topPosities[0]
    pop.style.left = leftPosities[1]
    pop.style.top = topPosities[1]

}

//events maken je website interactief
boomAfbeelding.addEventListener('click', boomHakken);


function koeMelken() {
    if (koeStatus < 2) {
        if (koeStatus < 1) {
            huis.src = 'img/huisje4.png';
            document.querySelector('p').textContent = 'goedzo je hebt alleen nog niet genoeg drinken';
            button.addEventListener('click', Nogniet)

        } else {

            huis.src = 'img/huisje5.png';
            document.querySelector('p').textContent = 'Zo hebben we wel genoeg.';
            document.querySelector('button').textContent = 'klaar';
            button.addEventListener('click', gewonnen)

        }
        function Nogniet() {
            document.querySelector('p').textContent = 'Je hebt nog niet genoeg.';
            document.querySelector('button').textContent = 'Klaar';
            huis.src = 'img/huisje4.png';
        }

        function gewonnen() {
            huis.src = 'img/huisje5.png';
            document.querySelector('p').textContent = 'Goedzo binnen de tijd! nu lekker dansen';
            clearInterval(tijd);
            document.querySelector('button').textContent = 'Speel opnieuw';
            button.addEventListener('click', opnieuw)
            //https://www.google.nl/search?hl=nl&tbs=simg:CAQS6gEJrPfoVF7eAkIa3gELELCMpwgaOgo4CAQSFNo9niLILJ8jphnkC_1426BD2AqQDGhqIRT4OdfwEt1wS5aGQT1bwEEaTr3fzYEh5JCAFMAQMCxCOrv4IGgoKCAgBEgR6k96NDAsQne3BCRp_1ChgKBWdpcmx52qWI9gMLCgkvYS8zNjJmbWgKGAoFaGFwcHnapYj2AwsKCS9hL2JmNmRrZgoZCgZsb3ZlbHnapYj2AwsKCS9hL2R6a2hmXwoXCgRzb2Z02qWI9gMLCgkvYS8ydmttbXgKFQoDY2F02qWI9gMKCggvbS8wMXlyeAw&sxsrf=ALiCzsYl8o4LvgK6uqZ3XFE2wcFmLYn91Q:1653497965243&q=cute+hello+kitty+gif&tbm=isch&sa=X&ved=2ahUKEwico-v2j_v3AhVEDuwKHc8nD84Qwg4oAHoECAEQMw&biw=920&bih=647&dpr=2
            pop.src = 'img/party.gif';
            //https://www.youtube.com/watch?v=nJHbQEbP79w\
            audio.src = 'audio/gewonnen.mp3';
            audio.play()

        }

        //herlaad de pagina in de server (ik snap niet waarom true)
        //bron: https://www.freecodecamp.org/news/location-reload-method-how-to-reload-a-page-in-javascript/#:~:text=True%20reloads%20the%20page%20from,reload(true)%3B
        function opnieuw() {
            window.location.reload(true);
        }

        setTimeout(vanKoeNaarHuis, 3000);
        koeStatus = koeStatus + 1;
        pop.style.left = leftPosities[2]
        pop.style.top = topPosities[2]
        //src specificeerd welke audio je wil gebruiken
        //https://www.youtube.com/watch?v=Ow0oYCtN6No
        audio.src = 'audio/koe.mp3';
        audio.play()
        steenKnop.style.display = 'none'
        graanKnop.style.display = 'none'

        


    }
}
function vanKoeNaarHuis() {
    pop.style.left = leftPosities[2]
    pop.style.top = topPosities[2]
    pop.style.left = leftPosities[1]
    pop.style.top = topPosities[1]
}


function inGraan() {
    document.querySelector('p').textContent = 'Weet je zeker dat je in het graan wil gaan? Zo niet klik dan op een andere actie.';
   //geholpen door Timon
    graanKnop.style.display = 'inline'
    graanKnop.addEventListener('click', graanKus)
    steenKnop.style.display = 'none'


    pop.style.left = leftPosities[3]
    pop.style.top = topPosities[3]


    setTimeout(normaal, 6000);
}



graanAfbeelding.addEventListener('click', inGraan);

function graanKus() {
    document.querySelector('p').textContent = 'Daar is je vriendje! Klik nu op wat anders.';
    //https://www.google.nl/search?sa=G&hl=nl&tbs=simg:CAQS9QEJVzOx_1vGz5NYa6QELELCMpwgaOgo4CAQSFNo9niKfI8gsphnnApAR9gL-NqQDGhpCpostIYIaONXv_1qRBYa63NQXnXe0Un-R31SAFMAQMCxCOrv4IGgoKCAgBEgRSaJvfDAsQne3BCRqJAQoWCgNkb3TapYj2AwsKCS9tLzAyN2N0ZwoYCgVoYXBwedqliPYDCwoJL2EvYmY2ZGtmChcKBHNvZnTapYj2AwsKCS9hLzJ2a21teAoYCgVnaXJsedqliPYDCwoJL2EvMzYyZm1oCiIKEGFuaW1hdGVkIGNhcnRvb27apYj2AwoKCC9tLzA5NWJiDA&sxsrf=ALiCzsZdHtftfeXgDqHoK-I9m98HfVEAUQ:1653498051107&q=hello+kitty+love+you+gif&tbm=isch&ved=2ahUKEwj4iOSfkPv3AhWDt6QKHefwBC4Qwg4oAHoECAEQMw&biw=920&bih=647&dpr=2
    pop.src = 'img/kiss.gif';
    //https://www.youtube.com/watch?v=6bBRuY4e3wY
    kusGeven.play()
}

function normaal() {
    pop.src = 'img/pop.gif';

}



function inSteen() {

    document.querySelector('p').textContent = 'Weet je zeker dat je naar de stenen wil gaan? Zo niet klik dan op een andere actie.';
    steenKnop.style.display = 'inline'
    steenKnop.addEventListener('click', steendood)
    graanKnop.style.display = 'none'




    pop.style.left = leftPosities[4]
    pop.style.top = topPosities[4]


}


steenAfbeelding.addEventListener('click', inSteen);

function steendood() {
    //clearinterval annuleert setinterval

    clearInterval(tijd);
    document.querySelector('p').textContent = 'Dat waren giftige paddenstoelen.. Je bent dood.';
    //https://www.google.nl/search?sa=G&hl=nl&tbs=simg:CAQS6wEJ0Wr0mLNIrSca3wELELCMpwgaOQo3CAQSFNo9niLILJAR5wKfI6YZ9gLoEKQDGhlGZx8UUi_1PyXbtlrreg-NpHRBeBHFwY6EOIAUwBAwLEI6u_1ggaCgoICAESBGZo72MMCxCd7cEJGoABChYKA2RvdNqliPYDCwoJL20vMDI3Y3RnChgKBWdpcmx52qWI9gMLCgkvYS8zNjJmbWgKGAoFaGFwcHnapYj2AwsKCS9hL2JmNmRrZgoXCgRzb2Z02qWI9gMLCgkvYS8ydmttbXgKGQoGbG92ZWx52qWI9gMLCgkvYS9kemtoZl8M&sxsrf=ALiCzsaeLefItisBuxTchSjZFXnwuEpnPw:1653498016171&q=cute+hello+kitty+gif&tbm=isch&ved=2ahUKEwiI0Y-PkPv3AhXHDOwKHUpkAsEQwg4oAHoECAEQMw&biw=920&bih=647&dpr=2
    pop.src = 'img/cry.gif';
    //https://mixkit.co/free-sound-effects/game-over/
    gameOver.play()


    setTimeout(gameover, 8000);

}


function gameover() {
    window.location.reload(true);

}

//https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
//wou bij gameover geluid toevoegen lukte mij niet?
var begin = 45;
var h1 = document.querySelector('h1')
//setinterval roept een functie op in miliseconden het gaat door tot clearinterval
var tijd = setInterval(function () {
    //pijl is een overzichtelijke manier om een functie op te schrijven
    if (begin <= 0) {
         setTimeout(gameover, 8000);

        gameOver.play()
        document.querySelector('h1').textContent = 'gameover';


    } else {


        document.querySelector('h1').textContent = begin + 'seconden';

    }
    //-=1 is dat je van begin (60) er steeds 1 aftrekt in de tijd van 1000 (1seconden)

    begin -= 1;
}, 1000);





