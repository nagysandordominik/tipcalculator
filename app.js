// const whichTip = document.querySelector('.tips');
// whichTip.addEventListener("click", selectedTip);

// function selectedTip(e) {
//     if (e.target !== e.currentTarget) {
//         const clickedTip = e.target.value;
//     }
// }

const calculate = document.querySelector('#calculate');

calculate.addEventListener('click', function () {

    const billAmount = document.querySelector('#billInput').value;
    const tipAmount = billAmount / 10;
    alert(tipAmount)
});
