const whichTip = document.querySelector('.tips');
whichTip.addEventListener("click", selectedTip, false);

function selectedTip(e) {
    if (e.target !== e.currentTarget) {
        const clickedTip = e.target.value;
    }
}

const calculate = document.querySelector('#calculate');

calculate.addEventListener('click', function () {
    const clickedTip = whichTip;
    const billAmount = document.querySelector('#billInput').value;
    const tipAmount = billAmount / clickedTip;
    alert(tipAmount)
});
