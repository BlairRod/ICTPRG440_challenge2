const colors = ['red', 'blue', 'yellow', 'green'];
const savedColors = [];

document.getElementById('spinButton').addEventListener('click', spinDelay);
document.getElementById('resetButton').addEventListener('click', resetAll);

function spinDelay() {
    setTimeout(spinColor, 2000);
}

function spinColor() {
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.getElementById('coloredDiv').style.backgroundColor = colors[randomNumber];
    savedColors.push(colors[randomNumber]);
    printColors();
    totalSpins();
    mostSpun();
    console.log(savedColors);
}

function printColors() {
    document.getElementById('resultsDisplayText').innerHTML = savedColors.join(' ');
}

function totalSpins() {
    document.getElementById('totalSpinsText').innerHTML = 'Total Spins: ' + savedColors.length;
}

function mostSpun() {
    const count = { red: 0, blue: 0, yellow: 0, green: 0 };
    let colorString = 'Most Spun: ';
    for (const element of savedColors) {
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }
    let mostCount = Math.max(count['red'], count['blue'], count['yellow'], count['green'])
    if (count['red'] == mostCount) colorString = colorString.concat('red ');
    if (count['blue'] == mostCount) colorString = colorString.concat('blue ');
    if (count['yellow'] == mostCount) colorString = colorString.concat('yellow ');
    if (count['green'] == mostCount) colorString = colorString.concat('green ');
    document.getElementById('mostSpunText').innerHTML = colorString;
    console.log(colorString);
}

function resetAll() {
    savedColors.length = 0;
    document.getElementById('resultsDisplayText').innerHTML = '&nbsp;';
    document.getElementById('totalSpinsText').innerHTML = 'Total Spins: ';
    document.getElementById('mostSpunText').innerHTML = "Most Spun: ";
    console.log(savedColors);
}