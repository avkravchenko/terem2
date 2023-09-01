const submit = document.querySelector(".submit");
const form = document.querySelector(".form");
const jsonOutput = document.querySelector(".json-output");
const jsonOutputClose = document.querySelector(".json-output::before");

submit.addEventListener("click", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const jsonData = {};

  jsonOutput.classList.add("json-output--active");

  formData.forEach((value, key) => {
    jsonData[key] = value;
  });

  jsonOutput.textContent = JSON.stringify(jsonData, null, 2);
  try {
    const response = await fetch("/mockapi");
    const responseData = await response.json();
    alert(responseData.message);
  } catch (error) {
    console.error("Error:", error);
  }
});
