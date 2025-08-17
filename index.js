const studyBtn = document.getElementById("yes");
const animeBtn = document.getElementById("no"); 
const row = document.querySelector(".btn-row");

studyBtn.addEventListener("mouseenter", () => {
  const rowWidth = row.offsetWidth;
  const rowHeight = row.offsetHeight;
  const btnWidth = studyBtn.offsetWidth;
  const btnHeight = studyBtn.offsetHeight;

  const maxLeft = rowWidth - btnWidth;
  const maxTop = rowHeight - btnHeight;

  const randomLeft = Math.floor(Math.random() * maxLeft);
  const randomTop = Math.floor(Math.random() * maxTop);

  studyBtn.style.left = randomLeft + "px";
  studyBtn.style.top = randomTop + "px";
});

const prompts = [
  "Studying? Pfft… who needs real-life skills when you have imaginary powers?",
  "Ah yes, because watching fictional teenagers solve world crises will totally help your exams.",
  "Wow, such dedication… to ignoring all your responsibilities.",
  "Keep watching, genius. Maybe knowledge will magically download into your brain.",
  "Grades are overrated anyway… said no successful person ever.",
  "Another episode? Sure, let’s pretend binge-watching counts as productivity.",
  "Congrats! You’ve officially trained your thumb, not your brain."
];

animeBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * prompts.length);
  alert(prompts[randomIndex]); // or use console.log / popup div instead of alert
});

