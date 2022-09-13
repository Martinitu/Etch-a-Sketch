


const container = document.querySelector(".container")

    var numberOfColums = 16
    var numberOfDivs =  numberOfColums * numberOfColums
    var divHeight = 1000 / numberOfColums
   
 
    function promtColums(){
        var userColumns = prompt("Please enter the number of Colums");

        if (userColumns > 100 || userColumns < 0 || isNaN(userColumns))
        {
            alert("please enter a number between 1 and 100")
        } else {
        numberOfColums =+ userColumns;
         numberOfDivs =  numberOfColums * numberOfColums
        console.log(numberOfColums)
        createDivs(numberOfDivs)
        }
    }
   
   function createDivs(numberOfDivs) {
       for (let i = 1; i <= numberOfDivs; i++){
        console.log(numberOfColums)
    let newDiv = document.createElement("div");
    newDiv.style.heigth = divHeight;
    newDiv.style.width = divHeight;
    container.style["grid-template-columns"] = "repeat(" + numberOfColums + ", 1fr)";
    container.style["grid-template-rows"] = "repeat(" + numberOfColums + ", 1fr)"; 
    newDiv.classList = "squareDivs";
    container.appendChild(newDiv)
    }
    
    const divs =  document.querySelectorAll(".squareDivs")  
    divs.forEach(element => { 
   
    element.addEventListener('mouseenter', e => element.classList.remove("squareDivs"))
     element.addEventListener('mouseleave', e => element.classList.add("squareDivsChange"))
      
  });
}
    