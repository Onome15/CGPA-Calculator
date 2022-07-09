function myFunc() {

    var grade1 = document.getElementById("grade").value;

    var unit = document.getElementById("unit").value;

    var tUnits = document.getElementById("tUnits").value;

    switch (grade1) {
        case 'a':
            return (5 * unit / tUnits);
            break;
        case 'b':
            return (4 * unit / tUnits);
            break;
        case 'c':
            return (3 * unit / tUnits);
            break;
        case 'd':
            return (2 * unit / tUnits);
            break;
        case 'e':
            return (1 * unit / tUnits);
            break;
        case 'f':
            return (0 * unit / tUnits);
            break;
        default:
            return ('Please input a valid grade');
    }

}


function myFunc2() {

    var grade2 = document.getElementById("grade2").value;

    var unit2 = document.getElementById("unit2").value;

    var tUnits = document.getElementById("tUnits").value;

    switch (grade2) {
        case 'a':
            return (5 * unit2 / tUnits);
            break;
        case 'b':
            return (4 * unit2 / tUnits);
            break;
        case 'c':
            return (3 * unit2 / tUnits);
            break;
        case 'd':
            return (2 * unit2 / tUnits);
            break;
        case 'e':
            return (1 * unit2 / tUnits);
            break;
        case 'f':
            return (0 * unit2 / tUnits);
            break;
        default:
            return ('');
    }
}


function myFunc3() {

    var grade3 = document.getElementById("grade3").value;

    var unit3 = document.getElementById("unit3").value;

    var tUnits = document.getElementById("tUnits").value;

    switch (grade3) {
        case 'a':
            return (5 * unit3 / tUnits);
            break;
        case 'b':
            return (4 * unit3 / tUnits);
            break;
        case 'c':
            return (3 * unit3 / tUnits);
            break;
        case 'd':
            return (2 * unit3 / tUnits);
            break;
        case 'e':
            return (1 * unit3 / tUnits);
            break;
        case 'f':
            return (0 * unit3 / tUnits);
            break;
        default:
            return ('');
    }
}


function myFunc4() {

    var grade4 = document.getElementById("grade4").value;

    var unit4 = document.getElementById("unit4").value;

    var tUnits = document.getElementById("tUnits").value;

    switch (grade4) {
        case 'a':
            return (5 * unit4 / tUnits);
            break;
        case 'b':
            return (4 * unit4 / tUnits);
            break;
        case 'c':
            return (3 * unit3 / tUnits);
            break;
        case 'd':
            return (2 * unit4 / tUnits);
            break;
        case 'e':
            return (1 * unit4 / tUnits);
            break;
        case 'f':
            return (0 * unit4 / tUnits);
            break;
        default:
            return ('');
    }
}


function myFunc5() {

    var grade5 = document.getElementById("grade5").value;

    var unit5 = document.getElementById("unit5").value;

    var tUnits = document.getElementById("tUnits").value;

    switch (grade5) {
        case 'a':
            return (5 * unit5 / tUnits);
            break;
        case 'b':
            return (4 * unit5 / tUnits);
            break;
        case 'c':
            return (3 * unit5 / tUnits);
            break;
        case 'd':
            return (2 * unit5 / tUnits);
            break;
        case 'e':
            return (1 * unit5 / tUnits);
            break;
        case 'f':
            return (0 * unit5 / tUnits);
            break;
        default:
            return ('');
    }
}


function myFun4() {
    // get the value returned by myFunc
    var funcA = myFunc();
    // get value returned by myFunc2
    var funcB = myFunc2();

    // if the  value  returned by both function is a number , add up the result 
    if (typeof funcA === 'number' && typeof funcB === 'number') {

        document.getElementById('demo').innerHTML = funcA + funcB;

    } else {
        // output error message to the user
        document.getElementById('demo').innerHTML = 'please input a valid grade';

    }
}


function totalFunc() {

    var a = myFunc();
    var b = myFunc2();
    var c = myFunc3();
    var d = myFunc4();
    var e = myFunc5();
    var y = "Your CGPA is - ";
    var x = "You Are A First Class Student";
    var finalAnswer = (a + b + c + d + e).toFixed(2);
    if (finalAnswer >= 4.50) {
        document.getElementById('demo').innerHTML = "Congratulations! You are in FIRST CLASS and your CGPA is -" + " " + finalAnswer;
    } else if (finalAnswer >= 3.50) {
        document.getElementById('demo').innerHTML = "Congratulations! You are in SECOND CLASS (Upper Division) and your CGPA is -" + " " + finalAnswer;
    } else if (finalAnswer >= 2.40) {
        document.getElementById('demo').innerHTML = "Congratulations! You are in SECOND CLASS (Lower Division) and your CGPA is -" + " " + finalAnswer;
    } else if (finalAnswer >= 1.50) {
        document.getElementById('demo').innerHTML = "You are in Third Class and your CGPA is -" + " " + finalAnswer;
    } else {
        document.getElementById('demo').innerHTML = "You are in pass grade, your CGPA is" + " " + finalAnswer;
    }

}