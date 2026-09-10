(() => {
  const WIN_LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const cells = Array.from(document.querySelectorAll(".cell"));
  const statusEl = document.getElementById("status");
  const scoreXEl = document.getElementById("score-x");
  const scoreOEl = document.getElementById("score-o");
  const scoreDrawEl = document.getElementById("score-draw");
  const resetBtn = document.getElementById("reset-btn");
  const clearScoresBtn = document.getElementById("clear-scores-btn");

  let board = Array(9).fill(null);
  let current = "X";
  let locked = false;
  let scores = { X: 0, O: 0, draw: 0 };

  function setStatus(text, className = "") {
    statusEl.textContent = text;
    statusEl.className = "status" + (className ? ` ${className}` : "");
  }

  function renderScores() {
    scoreXEl.textContent = String(scores.X);
    scoreOEl.textContent = String(scores.O);
    scoreDrawEl.textContent = String(scores.draw);
  }

  function checkWinner() {
    for (const line of WIN_LINES) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a], line };
      }
    }
    if (board.every(Boolean)) return { winner: null, line: null, draw: true };
    return null;
  }

  function highlightWin(line) {
    line.forEach((i) => cells[i].classList.add("win"));
  }

  function paintCell(index, mark) {
    const cell = cells[index];
    cell.textContent = mark;
    cell.classList.toggle("x", mark === "X");
    cell.classList.toggle("o", mark === "O");
    cell.disabled = true;
    cell.setAttribute("aria-label", `Cell ${index + 1}, ${mark}`);
  }

  function handleMove(index) {
    if (locked || board[index]) return;

    board[index] = current;
    paintCell(index, current);

    const result = checkWinner();
    if (result) {
      locked = true;
      if (result.draw) {
        scores.draw += 1;
        setStatus("It’s a draw", "draw");
      } else {
        scores[result.winner] += 1;
        highlightWin(result.line);
        setStatus(`${result.winner} wins!`, result.winner === "X" ? "win-x" : "win-o");
      }
      renderScores();
      return;
    }

    current = current === "X" ? "O" : "X";
    setStatus(`${current}’s turn`);
  }

  function resetBoard() {
    board = Array(9).fill(null);
    current = "X";
    locked = false;
    cells.forEach((cell, i) => {
      cell.textContent = "";
      cell.disabled = false;
      cell.classList.remove("x", "o", "win");
      cell.setAttribute("aria-label", `Cell ${i + 1}`);
    });
    setStatus("X’s turn");
  }

  function clearScores() {
    scores = { X: 0, O: 0, draw: 0 };
    renderScores();
  }

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      handleMove(Number(cell.dataset.index));
    });
  });

  resetBtn.addEventListener("click", resetBoard);
  clearScoresBtn.addEventListener("click", clearScores);

  renderScores();
  setStatus("X’s turn");
})();
