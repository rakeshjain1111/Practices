let counter = 0;
const counterValue = document.getElementById("counter-value");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const reset= document.querySelector('#reset');

// incrementBtn.addEventListener('click', addition);
// function addition(){
//     counter++;                                                         
//     counterValue.innerHTML=counter;
// }

incrementBtn.addEventListener('click', () =>{
    counter++;
    counterValue.innerHTML=counter;
});

decrementBtn.addEventListener('click', () =>{
    counter--;
    counterValue.innerHTML=counter;
});

reset.addEventListener('click', () =>{
    counter = 0;
    counterValue.innerHTML=counter;
});