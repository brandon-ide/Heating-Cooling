let actualTemp = Number(prompt("What is the current temperature?"));
let desiredTemp = Number(prompt("What is your desired temperature?"));

if (actualTemp == desiredTemp){
    console.log("Standby");
}

if (actualTemp > desiredTemp){
    console.log("Run A/C");
} 

if (actualTemp < desiredTemp){
    console.log("Run heat");
}
let tempCelsius = Number(prompt("Type a number"));
let targetUnit = prompt("Type the letter C, K, or F");

    switch (targetUnit) {
        case "C":
            console.log(tempCelsius);
            break;
        case "F":
            console.log(tempCelsius * 9/5 + 32);
            break;
        case "K":
            console.log(tempCelsius + 273.15);
            break;
        default:
            console.log("You did not type C, K, or F");
            break;
}










