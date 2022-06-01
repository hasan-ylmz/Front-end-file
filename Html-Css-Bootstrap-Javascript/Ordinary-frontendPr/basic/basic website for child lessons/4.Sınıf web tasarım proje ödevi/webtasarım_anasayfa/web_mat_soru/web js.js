// Web tasarım js source code

var point = 0;
var arr = ["On binler - Onlar basamağı","Elli dört bin beş yüz kırk sekiz","24 578","1542 - 1458 - 1452 - 1371","45","Basit kesir","Doğru","11","48 metrekare","280"]; // soruların doğru cevapları
var pointArr = [0,0,0,0,0,0,0,0,0,0];
function control(qn,ans){
  var par_id = document.getElementById("qp" + qn);
  if (arr[qn-1] == ans){ // cevap doğru ise
    par_id.style.backgroundColor = "limegreen";
    if(pointArr[qn-1]==0){
      point += 10;
    }
    pointArr[qn-1] = 1;
  }
  else{ // cevap yanlış ise
    par_id.style.backgroundColor = "red";
    if(pointArr[qn-1]==1){
      point -= 10;
    }
    pointArr[qn-1] = 0;
  }
  document.getElementById("point").innerHTML = " Puan " + point;
}

var time_id = document.getElementById("time");
var seconds = 600;
t_int = setInterval(timer,1000);


function timer(){
  if(seconds <=0){
    time_id.innerHTML = "SÜRE DOLDU";
    time_id.style.color="limegreen";
  }
  else{
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    if(m<10){
      m = "0" + m;
    }
    if(s<10){
      s = "0" + s;
    }
    time_id.innerHTML = "Süre: " + m + ":" + s;
    seconds--;
  }
}