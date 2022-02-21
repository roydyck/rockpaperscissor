function computerPlay() {
    let throwNum = Math.floor(Math.random() * 3) + 1;

    switch(throwNum) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return "Rock";
    }
}

for (let i = 0; i < 10; i++) {
    console.log(computerPlay());
}