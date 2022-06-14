let startRandomList = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine",
                        "Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen",
                        "Seventeen","Eightteen","Nineteen","Twentry"];
let middleRandomList = ["blind","running","drunk","sleeping","stunned","tripping",
                        "lifting","falling","scared","living","dead","jumping","slumped",
                        "tired","gaming","programming","adult",];
let endRandomList = ["mice","bags","people","oranges","children","elephants","roaches",
                        "teachers","men","athletes","officers","chairmen","plates",];

const pickRandomNum = (max) =>{
    return Math.floor(Math.random() * (max-1));
}

const generateRandomString = () =>{
    let firstWord = startRandomList[pickRandomNum(startRandomList.length)];
    let middleWorld = middleRandomList[pickRandomNum(middleRandomList.length)];
    let endWord = endRandomList[pickRandomNum(endRandomList.length)];

    return (`${firstWord} ${middleWorld} ${endWord}.`);
}

console.log(generateRandomString());