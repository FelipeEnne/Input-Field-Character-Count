//let color = `#${Math.random().toString(16).substring(2, 8)}`;

const count = document.querySelector(".count");
const input = document.querySelector("input");

input.addEventListener("keyup", () => {
  count.innerHTML = input.value.length;
});
