/* 

    Developed with ❤︎ | Bitic Evan
    ◉ evan-bitic.fr

*/

// Function displaying time
function displayDate () {

    var dateGlobale = new Date();

    // Definition hour, minute and second with the real values
    var hour = dateGlobale.getHours();
    var minute = dateGlobale.getMinutes();
    var second = dateGlobale.getSeconds();

    // Add 0 before the second number when the time have 1 number
    if( hour < 10 ) { hour = "0" + hour; }
    if( minute < 10 ) { minute = "0" + minute; }
    if( second < 10 ) { second = "0" + second; }

    // Insert into de html element with id heure
    document.getElementById("time").innerHTML= hour + ":" + minute + ":" + second;

    // reloaded all the one second
    setTimeout(displayDate,1000);
 
}

displayDate();
