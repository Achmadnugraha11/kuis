function simpan() {
    const jwbpg1 = document.querySelector("#jwbpg1");
    const jwbpg2 = document.querySelector("#jwbpg2");
    const jwbpg3 = document.querySelector("#jwbpg3");
    const jwbpg4 = document.querySelector("#jwbpg4");
    const jwbpg5 = document.querySelector("#jwbpg5");
    const jwbpg6 = document.querySelector("#jwbpg6");
    const jwbpg7 = document.querySelector("#jwbpg7");
    const jwbpg8 = document.querySelector("#jwbpg8");
    const jwbpg9 = document.querySelector("#jwbpg9");
    const jwbpg10 = document.querySelector("#jwbpg10");
    const esaino1 = document.querySelector("#esaino1");
    const esaino2 = document.querySelector("#esaino2");
    const esaino3 = document.querySelector("#esaino3");
    const esaino4 = document.querySelector("#esaino4");
    const esaino5 = document.querySelector("#esaino5");

    const responeno1 = document.querySelector("#responeno1");
    const responeno2 = document.querySelector("#responeno2");
    const responeno3 = document.querySelector("#responeno3");
    const responeno4 = document.querySelector("#responeno4");
    const responeno5 = document.querySelector("#responeno5");
    const responeno6 = document.querySelector("#responeno6");
    const responeno7 = document.querySelector("#responeno7");
    const responeno8 = document.querySelector("#responeno8");
    const responeno9 = document.querySelector("#responeno9");
    const responeno10 = document.querySelector("#responeno10");
    const reno1 = document.querySelector("#reno1");
    const reno2 = document.querySelector("#reno2");
    const reno3 = document.querySelector("#reno3");
    const reno4 = document.querySelector("#reno4");
    const reno5 = document.querySelector("#reno5");

    const nilai = document.querySelector("#nilai");

    let response;
    let poin = 0;

    //  pg no 1
    if (jwbpg1.checked) {
        response = "Jawaban benar";
        responeno1.style = "color: #00cc00;";
        poin = poin + 10;
    } else {
        response = "Jawaban salah";
        responeno1.style = "color: red;";
    }
    responeno1.innerHTML = response;

    //  pg no2
    if (jwbpg2.checked) {
        response = "Jawaban benar";
        responeno2.style = "color: #00cc00;";
        poin = poin + 10;
    } else {
        response = "Jawaban salah";
        responeno2.style = "color: red;";
    }
    responeno2.innerHTML = response;

    //  pg no 3
    if (jwbpg3.checked) {
        response = "Jawaban benar";
        responeno3.style = "color:#00cc00";
        poin = poin + 10;
    } else {
        response = "jawaban salah";
        responeno3.style = "color: red";
    }
    responeno3.innerHTML = response;

    //  pg no 4
    if (jwbpg4.checked) {
        response = "Jawaban benar";
        responeno4.style = "color:#00cc00";
        poin = poin + 10;
    } else {
        response = "jawaban salah";
        responeno4.style = "color: red";
    }
    responeno4.innerHTML = response;

    //  pg no 5
    if (jwbpg5.checked) {
        response = "Jawaban benar";
        responeno5.style = "color:#00cc00";
        poin = poin + 10;
    } else {
        response = "jawaban salah";
        responeno5.style = "color: red";
    }
    responeno5.innerHTML = response;

    //  pg no 6
    if (jwbpg6.checked) {
        response = "Jawaban benar";
        responeno6.style = "color:#00cc00";
        poin = poin + 10;
    } else {
        response = "jawaban salah";
        responeno6.style = "color: red";
    }
    responeno6.innerHTML = response;

    //  pg no 7
    if (jwbpg7.checked) {
        response = "Jawaban benar";
        responeno7.style = "color:#00cc00";
        poin = poin + 10;
    } else {
        response = "jawaban salah";
        responeno7.style = "color: red";
    }
    responeno7.innerHTML = response;

    //  pg no 8
    if (jwbpg8.checked) {
        response = "Jawaban benar";
        responeno8.style = "color:#00cc00";
        poin = poin + 10;
    } else {
        response = "jawaban salah";
        responeno8.style = "color: red";
    }
    responeno8.innerHTML = response;

    //  pg no 9
    if (jwbpg9.checked) {
        response = "Jawaban benar";
        responeno9.style = "color:#00cc00";
        poin = poin + 10;
    } else {
        response = "jawaban salah";
        responeno9.style = "color: red";
    }
    responeno9.innerHTML = response;

    //  pg no 10
    if (jwbpg10.checked) {
        response = "Jawaban benar";
        responeno10.style = "color:#00cc00";
        poin = poin + 10;
    } else {
        response = "jawaban salah";
        responeno10.style = "color: red";
    }
    responeno10.innerHTML = response;

    nilai.innerHTML = poin;
}
