let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () =>{
    const options = ["rock" , "paper" , "scissors"]
    const randomIdx = Math.floor(Math.random() * 3)
    return options[randomIdx]
}

const drawGame = () =>{
    console.log("Game was Draw")
    msg.innerText = "Game was draw. Play again"
    msg.style.backgroundColor = "#242121"
}

const showWinner = (userWin , userChoice , compChoice , userScore , compScore) =>{
    if(userWin){
        console.log("you win")
        userscore++
        userScorePara.innerText = userscore
        msg.innerText = `You win! Your ${userChoice} beat ${compChoice}`
        msg.style.backgroundColor = "green"
    }
    else{
        console.log("you lose")
        compscore++
        compScorePara.innerText = compscore
        msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) =>{
    console.log("userChoice is =", userChoice)
    const compChoice = genCompChoice()
    console.log("compChoice is =", compChoice)

    if(userChoice === compChoice){
       drawGame()
    }
    else{
        let userWin = true
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true
        }
        else{
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin , userChoice , compChoice)
    }
}

choices.forEach((choice) =>{
   
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})