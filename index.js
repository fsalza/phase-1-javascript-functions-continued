// code your solution here
function saturdayFun(activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`)
}

saturdayFun()

const mondayWork = function (activity = 'go to the office') {
    return (`This Monday, I will ${activity}.`)
}

mondayWork()
mondayWork('work from home')

function wrapAdjective(symbol = '*'){
    return function (word = "special"){
        return `You are ${symbol}${word}${symbol}!`
        
    }
}

wrapAdjective('%')("a dedicated programmer")