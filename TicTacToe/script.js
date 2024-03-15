let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = false;

let winingPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame = () => {
    turnO = false;
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
    msgContainer.classList.add("hide");
}
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        checkDraw();
    });
})
const disableBtns = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const drawWinner = () => {
    msg.innerText = `Game was Draw`;
    msgContainer.classList.remove("hide");
}
const checkWinner = () => {
    for(let pattern of winingPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                disableBtns();
                showWinner(pos1Val);
            }
        }
    };
}

const checkDraw = () => {
    let filled = true;
    boxes.forEach((box) => {
        if(box.innerText == ""){
            filled = false;
        }
    });
    if(filled){
        drawWinner();
    }
}


