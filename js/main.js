
var elForm = document.querySelector(".form");
var elFormInput = document.querySelector(".form__input");
var elFormPerson = document.querySelector(".form__person-result");
var elFormBike = document.querySelector(".form__bike-result");
var elFormCar = document.querySelector(".form__car-result");
var elFormPlane = document.querySelector(".form__plane-result");

elForm.addEventListener("submit", function(e){
  e.preventDefault()

  var elFormInputVal = elFormInput.value;
  var person =3.6;
  var bike =20.1;
  var car =70;
  var plane =800;


  function onfoot(){
    return elFormInputVal / person;
  }

  function bybike(){
    return elFormInputVal / bike;
  }


  function bycar(){
    return elFormInputVal / car;
  }


  function byplane(){
    return elFormInputVal / plane;
  }

  elFormPerson.textContent = Math.round (onfoot()) + "soat" ;
  elFormBike.textContent = Math.round (bybike()) + "soat";
  elFormCar.textContent = Math.round (bycar()) + "soat";
  elFormPlane.textContent = Math.round (byplane()) + "soat";
})