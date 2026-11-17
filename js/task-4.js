
const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = Object.fromEntries(
    [...new FormData(event.currentTarget)].map(([key, value]) => [key, value.trim()])
  );

  if (Object.values(data).includes("")) {
    return alert("All form fields must be filled in");
  }

  console.log(data);
  event.currentTarget.reset();
});