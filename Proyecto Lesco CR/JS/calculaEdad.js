

function calculaEdad() {
    var fechaactual = new Date();
    let nacimiento = document.getElementById("nacimiento").value;
    var fecha = new Date(nacimiento);
    var edad = fechaactual.getFullYear() - fecha.getFullYear();
    var m = fechaactual.getMonth() - fecha.getMonth();
  
    if (m < 0 || (m === 0 && fechaactual.getDate() < fecha.getDate())) {
      edad--;
    }
    document.getElementById("edad").value=edad;
    return edad;
  }