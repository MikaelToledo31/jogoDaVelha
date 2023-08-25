const tabuleiro = document.querySelector(".tabuleiro");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const win = document.getElementById("win");
const btnReset = document.getElementById("reset");
let cont1 = 1;
let cont2 = 1;
const campos = document.querySelectorAll(".container");
const contador1 = document.getElementById("contador1");
const contador2 = document.getElementById("contador2");
let array = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
];

btnReset.addEventListener("click", resetTabuleiro);

campos.forEach(function (campo) {
  campo.addEventListener("click", evento);
});

function evento(ev) {
  if (player1.innerText === "vez de:\nplayer 1") {
    const x = document.createElement("h4");
    x.innerText = "X";
    ev.target.appendChild(x);
    ev.target.removeEventListener("click", evento);
    player1.innerText = "\nplayer 1";
    player2.innerText = "vez de:\nplayer 2";
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] === ev.target.dataset.pos) {
          array[i][j] = "X";
        }
      }
    }
  } else {
    const x = document.createElement("h4");
    x.innerText = "O";
    ev.target.appendChild(x);
    ev.target.removeEventListener("click", evento);
    player1.innerText = "vez de:\nplayer 1";
    player2.innerText = "\nplayer 2";
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] === ev.target.dataset.pos) {
          array[i][j] = "O";
        }
      }
    }
  }
  if (win.innerText === "Player 1 wins" || win.innerText === "Player 2 wins") {
    resetTabuleiro();
  }
  console.table(array);
  if (
    (array[0][0] === array[1][1] && array[0][0] === array[2][2]) ||
    (array[0][0] === array[0][1] && array[0][0] === array[0][2]) ||
    (array[0][0] === array[1][0] && array[0][0] === array[2][0])
  ) {
    if (array[0][0] === "X") {
      ganhador1();
    } else {
      ganhador2();
    }
  }
  // outro if
  if (
    (array[1][0] === array[1][1] && array[1][1] === array[1][2]) ||
    (array[0][2] === array[1][1] && array[1][1] === array[2][0]) ||
    (array[0][1] === array[1][1] && array[1][1] === array[2][1])
  ) {
    if (array[1][1] === "X") {
      ganhador1();
    } else {
      ganhador2();
    }
  }
  // outro if
  if (
    (array[2][0] === array[2][1] && array[2][0] === array[2][2]) ||
    (array[0][2] === array[1][2] && array[0][2] === array[2][2])
  ) {
    if (array[2][2] === "X") {
      ganhador1();
    } else {
      ganhador2();
    }
  }
}

function resetTabuleiro() {
  if (win.innerText === "Player 1 wins" || win.innerText === "Player 2 wins") {
    alert(
      win.innerText +
        "\nClick em ok ou pressione enter para iniciar um novo jogo"
    );
  }
  campos.forEach((container) => {
    const x = container.querySelector("h4");
    if (x) {
      container.removeChild(x);
    }
    campos.forEach(function (campo) {
      campo.addEventListener("click", evento);
    });
    container.addEventListener("click", evento);
    player1.innerText = "vez de:\nplayer 1";
    player2.innerText = "\nplayer 2";
    win.innerText = "-------------";
  });
  let h = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      array[i][j] = h.toString();
      h++;
    }
  }
}

function ganhador1() {
  win.innerText = "Player 1 wins";
  contador1.innerText = cont1;
  cont1++;
}

function ganhador2() {
  win.innerText = "Player 2 wins";
  contador2.innerText = cont2;
  cont2++;
}
