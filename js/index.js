const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  const data = await getPerson();
  showData(data);
});

async function getPerson() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  return data.results[0];
}
console.log(data);

function showData(data) {
  const { name, picture, location, phone, email } = data;
  document.getElementById("name").textContent = `${name.first} ${name.last}`;
  document.getElementById("first").textContent = `${name.first} ${name.last}`;
  document.getElementById("street").textContent = location.street.name;
  document.getElementById("phone").textContent = phone;
  document.getElementById("email").textContent = email;
  document.getElementById("photo").src = picture.large;
}

