
var elForm = document.querySelector(".form");
var elFormInput = document.querySelector(".form__input");
var elFormPerson = document.querySelector(".form__person-result");
var elFormBike = document.querySelector(".form__bike-result");
var elFormCar = document.querySelector(".form__car-result");
var elFormPlane = document.querySelector(".form__plane-result");

elForm.addEventListener("submit", function(evt){
  evt.preventDefault()

  var elFormInputVal = Number(elFormInput.value.trim());
  var person =3.6;
  var bike =20.1;
  var car =70;
  var plane =800;

  if(elFormInputVal <= 0 || isNaN(elFormInputVal)){

    elFormPerson.textContent = "Raqam kiriting iltimos";
    elFormBike.textContent = "Raqam kiriting iltimos";
    elFormCar.textContent = "Raqam kiriting iltimos";
    elFormPlane.textContent = "Raqam kiriting iltimos";

    elFormPerson.classList.add("result-error");
    elFormBike.classList.add("result-error");
    elFormCar.classList.add("result-error");
    elFormPlane.classList.add("result-error");

    return
  }

  else{
    elFormPerson.classList.remove("result-error")
    elFormPerson.classList.add("result-success");
    elFormBike.classList.remove("result-error")
    elFormBike.classList.add("result-success");
    elFormCar.classList.remove("result-error")
    elFormCar.classList.add("result-success");
    elFormPlane.classList.remove("result-error")
    elFormPlane.classList.add("result-success");
  }

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

  elFormPerson.textContent = Math.round (onfoot()) + " soat" ;
  elFormBike.textContent = Math.round (bybike()) + " soat";
  elFormCar.textContent = Math.round (bycar()) + " soat";
  elFormPlane.textContent = Math.round (byplane()) + " soat";
})
