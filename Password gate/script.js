function checkPassword() {
  const password = document.getElementById("passwordInput").value;
  const errorMsg = document.getElementById("errorMsg");

  if (password === "Game") {
    window.location.href = "game.html";
  } else {
    errorMsg.textContent = "Incorrect password. Try again!";
  }
}