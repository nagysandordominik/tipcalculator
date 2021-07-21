const whichTip = document.querySelector('.tips');
whichTip.addEventListener("click", selectedTip);

function selectedTip(e) {
    if (e.target !== e.currentTarget) {
        const clickedTip = e.target.value;
        alert(clickedTip)
    }
}

const calculate = document.querySelector('#calculate');

calculate.addEventListener('click', function () {
    const billAmount = document.querySelector('#billInput').value;
    const tipAmount = billAmount / clickedTip;
    alert(tipAmount)
});
