//random number generator 
const randomNumGen = (num) => {
    return Math.floor(Math.random() * num)
};

//random message component in a poperty of string
const randomMessage = {
    firstWord: ['great', 'strong', 'ecstatic', 'nearly there'],
    secondWord: ['bad', 'good', 'very good', 'ok', 'average'],
    thirdWord: ['going', 'persevering', 'trying harder']
}

//variable for taking all message
let allMessage = [];


//message generator function and set some output on allMessage
for (let comp in randomMessage) {

    //message generator all property length generator
    const numFromRandnum = randomNumGen(randomMessage[comp].length);
    //conditional for setting message 
    if (comp === 'firstWord') {
        allMessage.push(`You are ${randomMessage[comp][numFromRandnum]} .`)
    } else if (comp === 'secondWord') {
        allMessage.push(`You are having ${randomMessage[comp][numFromRandnum]} time.`)
    } else if (comp === 'thirdWord') {
        allMessage.push(`Keep ${randomMessage[comp][numFromRandnum]}.`)
    } else {
        allMessage.push('An error occurrd. Try again.')
    }

};

const formateAllMessage = (argu) => {
    const formatted = argu.join('\n');
    console.log(formatted);
};

//call formateAllMessage to formate all message from allMessage arry
formateAllMessage(allMessage)
