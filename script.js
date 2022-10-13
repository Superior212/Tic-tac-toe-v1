let letter = "X";
const showLetter = (e) => {
  if (letter == "X" && e.target.innerText == "") {
    e.target.innerText = letter;
    letter = "O";
  } else if (letter == "O" && e.target.innerText == "") {
    e.target.innerText = letter;
    letter = "X";
  }
  var a = A.innerHTML;
  var b = B.innerHTML;
  var c = C.innerHTML;
  var d = D.innerHTML;
  var ee = E.innerHTML;
  var f = F.innerHTML;
  var g = G.innerHTML;
  var h = H.innerHTML;
  var i = I.innerHTML;

  if (
    (a == "X" && b == "X" && c == "X") ||
    (d == "X" && ee == "X" && f == "X") ||
    (g == "X" && h == "X" && i == "X") ||
    (a == "X" && d == "X" && g == "X") ||
    (b == "X" && ee == "X" && h == "X") ||
    (c == "X" && f == "X" && i == "X") ||
    (a == "X" && ee == "X" && i == "X") ||
    (c == "X" && ee == "X" && g == "X")
  ) {
    scoreBoard1.innerHTML++
    display.innerHTML =`PLAYER 1 HAS WON`
    A.innerHTML = "";
    B.innerHTML = "";
    C.innerHTML = "";
    D.innerHTML = "";
    E.innerHTML = "";
    F.innerHTML = "";
    G.innerHTML = "";
    H.innerHTML = "";
    I.innerHTML = "";
  } else if (
    (a == "O" && b == "O" && c == "O") ||
    (d == "O" && ee == "X" && f == "O") ||
    (g == "X" && h == "O" && i == "O") ||
    (a == "O" && d == "O" && g == "O") ||
    (b == "O" && ee == "O" && h == "O") ||
    (c == "O" && f == "O" && i == "O") ||
    (a == "O" && ee == "O" && i == "O") ||
    (c == "O" && ee == "O" && g == "O")
  ) {
    scoreBoard2.innerHTML++
    display.innerHTML =`PLAYER 2 HAS WON`
    A.innerHTML = "";
    B.innerHTML = "";
    C.innerHTML = "";
    D.innerHTML = "";
    E.innerHTML = "";
    F.innerHTML = "";
    G.innerHTML = "";
    H.innerHTML = "";
    I.innerHTML = "";

  } else if (
    A.innerHTML != "" &&
    B.innerHTML != "" &&
    C.innerHTML != "" &&
    D.innerHTML != "" &&
    E.innerHTML != "" &&
    F.innerHTML != "" &&
    G.innerHTML != "" &&
    H.innerHTML != "" &&
    I.innerHTML != ""
  ) {
    display.innerHTML =`OPPS IT A DRAW GAME`
    A.innerHTML = "";
    B.innerHTML = "";
    C.innerHTML = "";
    D.innerHTML = "";
    E.innerHTML = "";
    F.innerHTML = "";
    G.innerHTML = "";
    H.innerHTML = "";
    I.innerHTML = "";
    display.innerHTML ="";
  }
};

const startGame =()=>{
    A.innerHTML = "";
    B.innerHTML = "";
    C.innerHTML = "";
    D.innerHTML = "";
    E.innerHTML = "";
    F.innerHTML = "";
    G.innerHTML = "";
    H.innerHTML = "";
    I.innerHTML = "";
    display.innerHTML ="";
}