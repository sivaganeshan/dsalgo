
var maxProfit = function(prices) {
    let max_gain = 0;
    let max_gain_sofar=0;

    for(let i=1; i<prices.length;i++){
        max_gain_sofar +=prices[i]-prices[i-1];
        if(max_gain_sofar>max_gain){
            max_gain=max_gain_sofar;
        }
    }
    return max_gain;
};

var coinChange = function(coins, amount) {
    
    let table = new Array(amount+1).fill(null);
    table[0]=[];
    for(let i=0; i<amount;i++){
        if(table[i] !==null){
            for(let coin of coins){
                let combinations= [...table[i],coin];
                if(coin+i < amount+1){
                    if(table[i+coin] === null || combinations.length< table[i+coin].length){
                        table[i+coin] = combinations;
                    }
                }
               
            }
        }
    }
    if(table[amount] !== null)
        {
            return table[amount].length;
        }
    return -1;
};

console.log(coinChange([1,2,5],11));
