/*for(var i = 0; i<=100; i++){
  //console.log(i);
  document.getElementById("coco").innerHTML += i + "<br>";
}*/

var result = 0 , num;

for(var i = false; i===false;){

  num = prompt("숫자를 입력하세요!");

  if(num === null){
    alert("합은" + result + "입니다.")
    i = true;
  }else{
    result += parseInt(num, 10);
  }
}
