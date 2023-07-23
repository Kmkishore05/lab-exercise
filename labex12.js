function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }
  function submitted(){
      f = document.getElementById("txt").value;
      document.getElementById("para1").innerHTML = "Changed to: " + f;
  }
  
  function changeMode(){
      c = document.getElementById("card");
      if (c.style.color != "white"){
          c.style.color = "white"
          c.style.backgroundColor = "black"
      } else {
          c.style.color = "black"
          c.style.backgroundColor = "white"
      }
  }

