let url = "https://openapi.programming-hero.com/api/phones?search=";
let search = document.querySelector("#btn");
let phoneBox = document.querySelector("#phoneList");
let phonename = document.querySelector("#searchInput");

async function phoneSearch() {
  phoneBox.innerHTML = "";
  let res = await fetch(url + phonename.value);
  let data = await res.json();
  let phonearr = data.data;

  for (phone of phonearr) {
    let box = document.createElement("div");
    box.className = "phone-item";
    box.innerHTML = `
      <img src="${phone.image}" alt="${phone.phone_name}">
      <h2 class="name">${phone.phone_name}</h2>
      <p class="discription">There are many variations of passages of available, but the majority have suffered</p>
      <button class="btn" id="show-btn">Show Details</button>
    `;
    phoneBox.appendChild(box);

    let showBtn = box.querySelector("#show-btn");
    showBtn.addEventListener("click", () => {
      document.getElementById('popup-img').src = phone.image;
      document.getElementById('popup-title').innerText = phone.phone_name;
      document.getElementById('popup-description').innerText = "There are many variations of passages of available, but the majority have suffered"; 
      document.getElementById('popup').style.display = 'flex';
    });
  }
}

let showBtn = document.querySelectorAll('#show-btn');
for(phone of showBtn){
    phone.addEventListener('click', () => {
      document.getElementById('popup-description').innerText = "There are many variations of passages of available, but the majority have suffered"; 
      document.getElementById('popup').style.display = 'flex';
    });
  
}


document.querySelector('.close-btn').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'none';
});

search.addEventListener("click", phoneSearch);
phonename.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    phoneSearch();
  }
});
