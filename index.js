


  let buttons = document.querySelectorAll('.btn');
  let string = ""

  Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "Ac"){
            document.querySelector('.input').innerHTML = "";
        }else
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector('.input').innerHTML = string;
        }else{
            string = string + e.target.innerHTML;
            document.querySelector('.input').innerHTML = string;
        }  
    })
  })
    