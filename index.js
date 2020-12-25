
const names = [
    {
        Q: 'Heater 1'
    },
    {
        W: 'Heater 2'
    },
    {
        E: 'Heater 3'
    },
    {
        A: 'Heater 4'
    },
    {
        S: 'Heater 6'
    },
    {
        D: 'Open High Hat'
    },
    {
        Z: 'Kick + Hat'
    },
    {
        X: 'Kick'
    },
    {
        C: 'Closed High Hat'
    }

];

function play(alphabet) {
    // console.log('value of alphabet:', alphabet);
    var sound = document.getElementById(alphabet);
    // console.log(sound);
    sound.play();
    document.getElementsByClassName("drum-pad").innerHTML = Q;
}




