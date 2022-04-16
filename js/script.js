var elBall = document.querySelector("#ball");
var elSelOtms = document.querySelector("#otm");
var elBtn = document.querySelector(".btn");
var elOutMassage = document.querySelector(".out-massage");
var grantBall = 100;
var kontraktBall = 80;
var superBall = (grantBall / 2) ;

var otms = ["TDTU", "TATU", "O`zDMU", "SAMDU", "TashPMI"];

for (var otm of otms) {
  var newOption = document.createElement("option");
  newOption.textContent = otm;
  newOption.value = otm;
  elSelOtms.append(newOption)
}

elBtn.addEventListener ("click", function(evt) {
  evt.preventDefault();
  
  var ball = elBall.value.trim();

  if (ball == "" || ball.length > 5){
    elBall.style.borderColor = "red";
    return
  }

  var ballNumber = Number(ball)
  if (isNaN(ballNumber)){
    elBall.style.borderColor = "red";
    return
  }

  elBall.style.borderColor = "black";
  var massage = "";
  console.log(ball);
  if (ball >= grantBall){
    massage = "grant asosida o`qishga kirdingiz!"
  } else if (ball >= kontraktBall){
    massage = "kontrakt asosida o`qishga kirdngiz."
  } else if (ball >= superBall){
    massage = "o`qishga kira olmadingiz. Umidni so`ndirmang! Super-kontrakt uchun ariza topshiring."
  } else {
    massage = "o`qishga kira olmadingiz. Umidni so`ndirmang! Keyingi yil yana urinib ko`ring."
  }

  elOutMassage.textContent = `Siz ${elSelOtms.value}ga ${massage}`
})