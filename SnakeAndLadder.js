const NO_PLAY = 0;
const LADDER = 1;
const SNAKE = 2;
let START = 0;

let pos = 0, pos1 = 0, cntr1 = 0, cntr2 = 0, cntr3 = 0, cntr4 = 0, c1 = 0, c2 = 0, c3 = 0, c4 = 0;

console.log("Starting position of player is: " + START);
while (pos < 100 && pos1 < 100) {
    let con = 1;
    a: while (con == 1) {
        console.log("PLAYER 1");
        let roll = Math.floor(Math.random() * 10) % 5;
        cntr1++;
        console.log("Number on rolled dice is : " + roll);
        con = Math.floor(Math.random() * 10) % 3;
        console.log("Condition: " + con);
        switch (con) {
            case NO_PLAY:
                console.log("NO PLAY");
                console.log("New Position is: " + pos);
                cntr4++;
                break;
            case LADDER:
                console.log("Got LADDER");
                pos = pos + roll;
                if (pos <= 100)
                    console.log("New Position is: " + pos);
                else {
                    pos = pos - roll;
                    console.log("Remains at same position: " + pos);
                }
                cntr2++;
                continue a;
            case SNAKE:
                console.log("Got SNAKE");
                pos = pos - roll;
                if (pos <= 100) {
                    if (pos >= 0) {
                        console.log("New Position is: " + pos);
                    }
                    else {
                        pos = 0;
                        console.log("New Position is: " + pos);
                    }
                }
                else {
                    console.log("New position is:" + pos);
                }
                cntr3++;
                break;
            default:
                console.log("Default");
                break;
        }
    }
    let con1 = 1;
    b: while (con1 == 1 && pos1 < 100) {
        console.log("PLAYER 2");
        let roll1 = Math.floor(Math.random() * 10) % 6 + 1;
        c1++;
        console.log("Number on rolled dice is : " + roll1);
        con1 = Math.floor(Math.random() * 10) % 3;
        console.log("Condition: " + con1);
        switch (con1) {
            case NO_PLAY:
                console.log("NO PLAY");
                console.log("New Position is: " + pos1);
                c4++;
                break;
            case LADDER:
                console.log("Got LADDER");
                pos1 = pos1 + roll1;
                if (pos1 <= 100)
                    console.log("New Position is: " + pos1);
                else {
                    pos1 = pos1 - roll1;
                    console.log("Remains at same position: " + pos1);
                }
                c2++;
                continue b;
            case SNAKE:
                console.log("Got SNAKE");
                pos1 = pos1 - roll1;
                if (pos1 <= 100) {
                    if (pos1 >= 0) {
                        console.log("New Position is: " + pos1);
                    }
                    else {
                        pos1 = 0;
                        console.log("New Position is: " + pos1);
                    }
                }
                else {
                    console.log("New position is:" + pos1);
                }
                c3++;
                break;
            default:
                console.log("Default");
                break;
        }
    }
}

console.log();
console.log("-------------------");
if (pos == 100) {
    console.log("Player1 ROLLED DICE " + cntr1 + " time and got SNAKE " + cntr3 + " times and got LADDER " + cntr2 + " times and got NO PLAY " + cntr4 + " times to win the game");
    console.log("    PLAYER1 WON");
}
else {
    console.log("Player2 ROLLED DICE " + c1 + " time and got SNAKE " + c3 + " times and got LADDER " + c2 + " times and got NO PLAY " + c4 + " times to win the game");
    console.log("    PLAYER2 WON");
}
console.log("-------------------");


