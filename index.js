let homeScore = 0;
let guestScore = 0;

/* Passes in the team and score logged from the event listener */
function add(team, num) {
  num = parseInt(num); // Ensures the "num" is a number
  if (team === "home") {
    homeScore += num;
    console.log(homeScore);
  } else {
    guestScore += num;
  }
  render();
}

/* Renders and updates both scores */
function render() {
  let homeDisplay = document.querySelector("#home-points");
  let guestDisplay = document.querySelector("#guest-points");
  homeDisplay.textContent = homeScore;
  guestDisplay.textContent = guestScore;
  showLeader(homeDisplay, guestDisplay);
}

/* Adds styling to highlight the leading team's score */
function showLeader(home, guest) {
  if (homeScore > guestScore) {
    home.classList.add("highlight");
    guest.classList.remove("highlight");
  } else if (guestScore > homeScore) {
    home.classList.remove("highlight");
    guest.classList.add("highlight");
  } else {
    home.classList.remove("highlight");
    guest.classList.remove("highlight");
  }
}

function resetScores() {
  homeScore = 0;
  guestScore = 0;
  render(homeScore, guestScore);
}

/* 
 Captures the target btn value and team from the id. 
 Then passes them as arguments to the add() function 
*/
document.querySelectorAll(".btn").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const clickedEl = e.target;
    const clickedElValue = clickedEl.value;
    if (clickedEl.id.includes("home")) {
      add("home", clickedElValue);
    } else {
      add("guest", clickedElValue);
    }
  })
);

document.querySelector("#new-game-btn").addEventListener("click", resetScores);
