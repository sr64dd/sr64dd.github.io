var enteredNumber = ""
var calling = false
let background = document.documentElement
let phoneScreen = document.getElementById("phonescreen")
let beep = new Audio("assets/phone/sounds/beep.ogg");

const delay = ms => new Promise(res => setTimeout(res, ms));

var validNumbers = [
    "6333 227 325",
    "1800 586 453",
    "3472 635 639",
    "1300 273 348",
    "1800 776 433"
]

function inputNumber(number) {
    if (!calling) {
        if (enteredNumber.length < 12) {
            enteredNumber = enteredNumber + number
            phoneScreen.innerHTML = enteredNumber
            if (enteredNumber.length == 4 || enteredNumber.length == 8) {
                enteredNumber = enteredNumber + " "
            }
            beep.play();
        }
        else {
            phoneScreen.innerHTML = "full."
        }
    }
}

function clearNumber() {
    if (!calling) {
        enteredNumber = ""
        phoneScreen.innerHTML = "cleared."
    }
}

const enterNumber = async () => {
    calling = true
    background.className = "darkbg"
    phoneScreen.innerHTML = "calling..."
    let dialup = new Audio("assets/phone/sounds/dial.ogg");
    dialup.play();
    await delay(6000);
    if (validNumbers.includes(enteredNumber)) {
        switch (enteredNumber) {
            case "6333 227 325" :
                new Audio("assets/phone/sounds/ijustneedaBreak.ogg").play();
                await delay(8000);
                break;
            case "1800 586 453" :
                new Audio("assets/phone/sounds/jungle.ogg").play();
                await delay(28000);
                break;
            case "3472 635 639" :
                new Audio("assets/phone/sounds/discmelody.ogg").play();
                await delay(17000);
                break;
            case "1300 273 348" :
                new Audio("assets/phone/sounds/promo.ogg").play();
                await delay(28500);
                break;
            case "1800 776 433" :
                new Audio("assets/phone/sounds/sr64.ogg").play();
                await delay(17000);
                break;
        } 
        phoneScreen.innerHTML = "enter a number"
    }
    else {
        phoneScreen.innerHTML = "wrong number!"
    }
    background.className = ""
    enteredNumber = ""
    calling = false
}