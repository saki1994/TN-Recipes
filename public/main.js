
let categoriesBtn = document.querySelectorAll("p.categories-btn");
let sectionDiv = document.querySelectorAll(".section");




function looping(number1) {
  for (let i=0; i<sectionDiv.length; i++) {

       if (i === number1) {
         sectionDiv[i].style.visibility = "visible";
       } else {
       sectionDiv[i].style.visibility = "hidden";
       }
      }
}

function clicked(buttonClicked, divNumber) {

  const txt = buttonClicked.innerHTML;

  switch (txt) {
    case "Chicken":
       looping(divNumber)
      break
    case "Beef":
      looping(divNumber)
      break
    case "Pork":
      looping(divNumber)
      break
      case "Veggies":
      looping(divNumber)
      break
       case "Other Meat":
      looping(divNumber)
      break
      case "desserts-section":
     looping(divNumber)
     break
  }
};

for (let i = 0; i < categoriesBtn.length; i++) {
  categoriesBtn[i].addEventListener("click", () =>
    clicked(categoriesBtn[i],i)
  )
}
