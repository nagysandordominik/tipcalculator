// const whichTip = document.querySelector('.tips');
// whichTip.addEventListener("click", selectedTip);

// function selectedTip(e) {
//     if (e.target !== e.currentTarget) {
//         const clickedTip = e.target.value;
//         alert(clickedTip)
//     }
// }
// const calculate = document.querySelector('#calculate');

// calculate.addEventListener('click', function () {
//     const billAmount = document.querySelector('#billInput').value;
//     const tipAmount = billAmount / clickedTip;
//     alert(tipAmount)
// });

const bill = document.getElementById('billInput');
const tipBtns = document.querySelectorAll('.tipButton');
const tipCustom = document.getElementById('custom');
const people = document.getElementById('peopleInput');
const resetBtn = document.querySelector('reset');