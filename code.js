//wk1-2 countdown timer should run from 10....1 then Blastoff!!!
function startCountdown() {
    var count = 10;
    //the count down timer should display 10
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;

    setTimeout(function () {
        //after 1 sec. will run code in here
        //the count down timer should display 9
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 1
        count = count - 1;
    }, 1000); //set the wait time as 1 sec

    setTimeout(function () {
        //the count down timer should display 8
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 2000); //set the wait time as 2 sec

    setTimeout(function () {
        //the count down timer should display 7
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 3000); //set the wait time as 3 sec

    setTimeout(function () {
        //the count down timer should display 6
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 4000); //set the wait time as 4 sec

    setTimeout(function () {
        //the count down timer should display 5
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 5000); //set the wait time as 5 sec

    setTimeout(function () {
        //the count down timer should display 4
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 6000); //set the wait time as 6 sec

    setTimeout(function () {
        //the count down timer should display 3
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 7000); //set the wait time as 7 sec

    setTimeout(function () {
        //the count down timer should display 2
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 8000); //set the wait time as 8 sec

    setTimeout(function () {
        //the count down timer should display 1
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 9000); //set the wait time as 9 sec

    setTimeout(function () {
        //the count down timer should display Blastoff!!!
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    }, 10000);

}