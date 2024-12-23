var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

var data = document.getElementsByClassName("img-zoom");
var dataLen = data.length;

for (let i = 1; i <= dataLen; i++) {
    const d = new Date();
    var date = d.getUTCDate();
    var day = d.getUTCDay() + 1;
    var year = d.getUTCFullYear();
    var month = d.getUTCMonth() + 1;
    var hour = d.getUTCHours();
    var min = d.getMinutes();
    if (min < 180) {
        min = 1;
    } else {
        min = 2;
    }
    var xx = day + year * month * date;
    xx = Math.pow(xx, hour * min);
    xx = xx * x[i];
    // xx = xx * 2 - 1;
    // xx = xx/2;

    if (i == 4 || i == 9 || i == 8 || i == 17 || i == 136 || i == 6 || i == 6 || i == 5 || i == 120 || i == 26 || i == 3 || i == 13 || i == 147) {
        xx = xx % 27;
        xx += 65;
    } else {
        xx = xx % 83;
        xx += 8;
    }
    const as = "percent-bar-" + i;
    const asd = "percent-txt-" + i;
    var percentTxt = document.getElementById("percent-txt-" + i);
    var bar = document.getElementById("percent-bar-" + i);
    const bartext = document.getElementById("card-title" + i);
    percentTxt.innerHTML = xx + "%";
    $("#percent-bar-" + i)
        .attr("aria-valuenow", xx)
        .css("width", xx + "%");
    if (xx < 30) {
        bar.classList.add("red");
    } else if (xx > 70) {
        bar.classList.add("green");
    } else {
        bar.classList.add("yellow");
    }
}