// window.onload = function() {


//     let num = 10;
//     var list = document.getElementsByTagName('li');
//     for (let i = 0; i < list.length; i += 1) {
//         console.log(list[i]);
//         list[i].innerText = 'new item' + i;

//     }
// };

// function onClick() {
//     alert('i was onClicked!');
// };
function timeFunc() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    document.getElementById("clock").value = "" + hour + ":" + min + ":" + sec;
}
setInterval(timeFunc, 1000);