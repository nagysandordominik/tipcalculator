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

document.addEventListener("DOMContentLoaded", () => {
    const error = document.querySelector(".error");
    const total = document.querySelector(".total");
    const tipAmount = document.querySelector(".tip-amount");
    const reset = document.querySelector('.button-reset');
    const buttons = document.querySelectorAll('button');
    const custom = document.querySelector("#custom");
    var tip = 0;

    document.addEventListener("input", () => {
        if (checkCustomValue()) {
            display();
        }
        else {
            clearButtonClass();
            tip = custom.value;
            display();
        }
    })

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            const target = buttons[i].id;
            clearButtonClass();
            if (checkCustomValue()) {
                document.getElementById(target).classList.add('selected');
                tip = target;
                display();
            }
            else {
                tip = custom.value;
                display();
            }
        })
    }

    reset.addEventListener("click", () => {
        let bill = document.querySelector("#bill");
        let people = document.querySelector("#people");
        total.innerHTML = `$0.00`;
        tipAmount.innerHTML = `$0.00`;
        people.value = "";
        bill.value = "";
        custom.value = "";
        for (let i = 0; i < buttons.length; i++) {
            document.querySelectorAll('button')[i].classList = "";
        }
    })

    function clearButtonClass() {
        for (const i in buttons) {
            buttons[i].classList = "";
        }
    }

    function checkCustomValue() {
        if (custom.value === "" || custom.value === "0") return true;
        return false;
    }

    function display() {
        let bill = document.querySelector('#bill').value;
        let numberOfPeople = document.querySelector('#people').value;
        let people = document.querySelector('#people');
        if (numberOfPeople === "" || numberOfPeople === "0") {
            people.style.border = " 2px solid red";
            if (numberOfPeople === "") {
                error.innerHTML = "Can't be empty ";
            }
            else if (numberOfPeople === "0") {
                error.innerHTML = "Can't be zero ";
            }
        }
        else {
            error.innerHTML = "";
            people.style.border = "none";
            let tipAmountValue = (bill * tip) / 100;
            let tipAmountPerPerson = (Number(bill) * Number(tip)) / (100 * Number(numberOfPeople));
            tipAmountPerPerson = tipAmountPerPerson.toFixed(2);
            tipAmount.innerHTML = '$' + tipAmountPerPerson;
            let result = ((Number(bill) + Number(tipAmountValue)) / Number(numberOfPeople)).toFixed(2);
            total.innerHTML = '$' + result;
        }
    }

})