let clicks = sessionStorage.getItem("clicks");
let isPopupOpen = false;
const heroSectionButton = document.getElementById("heroSectionButton");
const popup = document.getElementById("popup");
const popupButton = document.getElementById("popupButton");
const popupIcon = document.querySelector(".popupIcon");

const togglePopup = () => {
  isPopupOpen = !isPopupOpen;

  isPopupOpen ? (popup.style.display = "flex") : (popup.style.display = "none");
};

const toggleButton = () => {
  clicks >= 5
    ? (popupButton.style.display = "flex")
    : (popupButton.style.display = "none");
};

const updatePopupText = () => {
  document.querySelector(
    ".popupBox p"
  ).innerHTML = `You have clicked <b>${clicks} times</b> to related button`;
};

const handleButtonClick = () => {
  if (clicks === null) clicks = 0;
  clicks++;
  sessionStorage.setItem("clicks", clicks);
  updatePopupText();
  toggleButton();
  togglePopup();
};

const resetClicks = () => {
  clicks = 0;
  sessionStorage.setItem("clicks", 0);
  updatePopupText();
  toggleButton();
};

heroSectionButton.addEventListener("click", handleButtonClick);
popupIcon.addEventListener("click", togglePopup);
popupButton.addEventListener("click", resetClicks);
