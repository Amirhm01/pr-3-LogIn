let emailinput = document.getElementById('emailinput');
let mainbutton = document.getElementById('mainbutton').addEventListener('click', click);
emailinput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        click();
    }
});

function click() {
    let inp = emailinput.value.indexOf('@gmail.com');
    if (inp == -1) {
        let errortext = document.getElementById('error');
        errortext.style.display = 'inline-block';
    }
    else {
        alert("A one-time password has been sent to " + emailinput.value);
        let errortext = document.getElementById('error');
        errortext.style.display = 'none';
        let innervcode = document.getElementById('innervcode');
        innervcode.style.display = 'flex';
        timer = setInterval(timerfunction, 1000);
    }
}

function timerfunction() {
    let mins = document.getElementById('mins');
    let seconds = document.getElementById('seconds');
    if (seconds.innerHTML == 0) {
        if (mins.innerHTML == 0) {
            clearInterval(timer);
            seconds.innerHTML = 30;
            mins.innerHTML = 1;
            setTimeout(timerfunction, 1);
        }
        mins.innerHTML = 0;
        seconds.innerHTML = 60;
        timerfunction();
    }
    seconds.innerHTML -= 1;

}


// ---------------------------------------------------------------------






