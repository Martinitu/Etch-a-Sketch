const container = document.querySelector(".container")



    for (let i = 1; i <= 256; i++){
    let newDiv = document.createElement("div");
    newDiv.classList = "squareDivs";
    container.appendChild(newDiv)
    }

    
      

  const divs =  document.querySelectorAll(".squareDivs")  
  console.log(divs)
 
  divs.forEach(element => { 
   
    element.addEventListener('mouseenter', e => element.classList.remove("squareDivs"))
     element.addEventListener('mouseleave', e => element.classList.add("squareDivsChange"))
      
  });