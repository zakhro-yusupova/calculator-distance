
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


  function foot (){
    var onfoot = elFormInputVal / person;
    var onfootHours = Math.floor(onfoot);
    var onfootMinutes = Math.floor((onfoot - onfootHours)*60);
    var totalResult = (onfootHours + " soat " + onfootMinutes + " minut");

    return totalResult ;
  }

  function bicycle (){
    var bybike = elFormInputVal / bike;
    var bybikeHours = Math.floor(bybike);
    var bybikeMinutes = Math.floor((bybike - bybikeHours)*60);
    var totalBikeResult = (bybikeHours + " soat " + bybikeMinutes + " minut");

    return totalBikeResult ;
  }

  function transport (){
    var bycar = elFormInputVal / car;
    var bycarHours = Math.floor(bycar);
    var bycarMinutes = Math.floor((bycar - bycarHours)*60);
    var totalCarResult = (bycarHours + " soat " + bycarMinutes + " minut");

    return totalCarResult;
  }

  function airplane (){
    var byplane = elFormInputVal / plane;
    var byplaneHours = Math.floor(byplane);
    var byplaneMinutes = Math.floor((byplane - byplaneHours)*60);
    var totalPlaneResult = (byplaneHours + " soat " + byplaneMinutes + " minut");

    return totalPlaneResult;
  }

  elFormPerson.textContent = foot() ;
  elFormBike.textContent = bicycle() ;
  elFormCar.textContent = transport() ;
  elFormPlane.textContent = airplane() ;

})
