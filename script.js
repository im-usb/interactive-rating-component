const feedBtns = document.querySelectorAll(".feed-btns");
const submitBtn = document.getElementById("submit");
const feedbackCard = document.querySelector(".feedback");
const thankYouCard = document.querySelector(".thank-you");
const points = document.getElementById("feedback-value");
const errorMsg = document.querySelector(".error");
let feedbackPoints = 0;

function removeActiveClasses() {
  feedBtns.forEach((feedBtn) => {
    feedBtn.classList.remove("active");
  });
}

function onSubmit(e) {
  e.preventDefault();
  if (feedbackPoints === 0) {
    errorMsg.classList.add("active");
  } else {
    feedbackCard.classList.remove("active");
    thankYouCard.classList.add("active");
    points.innerHTML = feedbackPoints;
  }
}

feedBtns.forEach((feedBtn) => {
  feedBtn.addEventListener("click", (e) => {
    if (feedbackPoints === 0) {
    }
    removeActiveClasses();
    e.target.classList.add("active");
    feedbackPoints = Number(e.target.value);
  });
});

submitBtn.addEventListener("click", onSubmit);
