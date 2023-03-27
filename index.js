const DOM = {
  // ordersTableBody/canvasPlaceToShow: null,
  ribA: null,
  ribB: null,
  x: null,
  y: null,
  area:null,

  rectanglesTableBody:null,

  //rectanglesCalculation: null,
};


let rectangles = [];

function init() {
  DOM.ribA = document.querySelector("#enterARibA");
  DOM.ribB = document.querySelector("#enterARibB");
  DOM.x = document.querySelector("#xLocation");
  DOM.y = document.querySelector("#yLocation");

  DOM.rectanglesTableBody = document.querySelector("#rectanglesTable tbody");

  //  DOM.rectanglesCalculation = document.querySelector("#cal");

  const calculateAndDrawButton = document.querySelector("#calculateAndDrawButton");
  calculateAndDrawButton.addEventListener("click", addARectangleFn);
  calculateAndDrawButton.addEventListener("click", drawcalculateFn);



  function addARectangleFn(event) {
    // console.log(event); // event
    // console.log(this); // button!
    rectangles.push(new Rectangle(DOM.ribA.value, DOM.ribB.value,
      DOM.x.value, DOM.y.value));
      console.log(DOM.rectanglesTableBody);
    //console.log(DOM.ordersTableBody);
    drawcalculateFn(rectangles);
    clearForm();
  }


}

// function draw() {

// }

function drawcalculateFn(rectanglesArray) {
  if (Array.isArray(rectanglesArray) === false) return;
  if((currentRectangle.ribA)===String) return;
  // clearTable/rectanglesdrawingFn();
  for (let index = 0; index < rectanglesArray.length; index++) {
    const currentRectangle = rectanglesArray[index];
    //do/create the calulation
   const tableRow = document.createElement("tr");

     const area = document.createElement("td");
     const calulationCurrentRectangle = (currentRectangle.ribA*currentRectangle.ribB)
     area.innerText = calulationCurrentRectangle;
    // area.innerText = currentRectangle.ribA

    

    // buttonDelete.addEventListener("click", function () {
     
    //     rectangles.splice(index, 1);
          
    //     drawcalculateFn(rectangles);
          
    
      
    //   });


     tableRow.append(area );
    DOM.rectanglesTableBody.append(tableRow);

    // DOM.rectanglesCalculation.append(area);
   
    console.log(area)


  }


}


function clearForm() {
  DOM.ribA.value = "";
  DOM.ribB.value = "";
  DOM.x.value = "";
  DOM.y.value = "";
}


init();