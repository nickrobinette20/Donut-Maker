
class DonutMakers {
    constructor() {
        this.reset();
    }

    reset(){
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerCost = 10;
        this.multiplierCount = 0;
        this.multiplierCost = 10;
        this.multiplier = 1;
        this.timer;
    }

    startTimer(updateDisplay){
        if (this.timer == null) {
            this.timer = setInterval(() => {
            updateDisplay();
        }, 1000);
        }
    }

    addDonut() {
        this.donutCount += this.multiplier;
    }

    canBuyAutoClicker(){
        if (this.donutCount >= this.autoClickerCost) {
            return false;
        }else {
            return true;
        }
        
    }


    buyAutoClicker(){
        if (!this.canBuyAutoClicker()) {
            this.donutCount -= this.autoClickerCost;
            this.autoClickerCost = Math.round(this.autoClickerCost *= 1.1);
            return this.autoClickerCount += 1;
            }else{
                return this.autoClickerCount;
            }
    }

    getAutoClickerCost(){
        return this.autoClickerCost;
    }

    getDonuts(){
        return this.donutCount;
    }

    getAutoClickers(){
        return this.autoClickerCount;
    }

    activateAutoClickers(){
        return this.donutCount += this.autoClickerCount;
    }

    
}