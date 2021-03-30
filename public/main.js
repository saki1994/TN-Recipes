const btn = document.querySelectorAll(".categories-btn");
const cat = document.querySelectorAll(".section");


function categoriesLoop(number) {

  for(let i=0; i<cat.length; i++) {
     if (i === number)   {
      cat[i].style.display = "block"; 
  } else {
     cat[i].style.display = "none";
  }
}
}

function btnLoop(num1, num2) {

  const btnText = num1.innerHTML;

  switch (btnText) {
    case "Chicken":
      categoriesLoop(num2)
      break
    case "Beef":
      categoriesLoop(num2)
      break
    case "Pork":
      categoriesLoop(num2)
      break
    case "Veggies":
      categoriesLoop(num2)
      break
    case "Other Meat":
      categoriesLoop(num2)
      break
    case "Desserts":
      categoriesLoop(num2)
      break
  }
}

for (let i = 0; i < btn.length; i++) {

  btn[i].addEventListener("click", function() {
    btnLoop(btn[i], i);
  })
}
