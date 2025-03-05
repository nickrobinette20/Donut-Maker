const donutMakers = new DonutMakers();

const donutCount = document.getElementById("donutCounter");
const autoClickerCounter = document.getElementById("autoClickerCounter");
const autoClickerPrice = document.getElementById("autoClickerPrice");
const autoClickerButton = document.getElementById("buyAutoClickerButton");
// const autoClicker = document.getElementById("autoClicker");

donutMakers.startTimer(updateDisplay);

function donutClick(){
    donutMakers.addDonut();
    updateUi();
}

function updateUi() {
    donutCount.innerText = donutMakers.getDonuts();
    autoClickerCounter.innerText = donutMakers.getAutoClickers();
    autoClickerPrice.innerText = donutMakers.getAutoClickerCost();
    autoClickerButton.disabled = donutMakers.canBuyAutoClicker();
}

function buyClicker(){
    donutMakers.buyAutoClicker();
    updateUi();
}

function updateDisplay(){
    donutMakers.activateAutoClickers();
    updateUi();
}

function reset(){
    donutMakers.reset();
    updateUi();
}