const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const userName = input.value.trim();
  if (userName === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = userName;
  }
});
