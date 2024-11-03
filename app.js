let url= "https://openapi.programming-hero.com/api/phones?search=";
let search = document.querySelector("#btn");
let phoneBox = document.querySelector("#phoneList");

let phonename = document.querySelector("#searchInput");






// if(phonename ===""){
//     alert("Please enter a phone number");
//     return;
// }


async function phoneSearch(){
    phoneBox.innerHTML = "";
    let res = await fetch(url+phonename.value);
    let data = await res.json();
    console.log(data)
    let phonearr = data.data;

console.log(phonearr);
   for(phone of phonearr) {
    
    console.log(phone);
    let box = document.createElement("div");
    box.className = "phone-item";
    box.innerHTML = `
   
    <img src="${phone.image}" alt="${phone.name}">
    <h2 class ="name">${phone.phone_name}</h2>
    <p class="discription">There are many variations of passages of available, but the majority have suffered</p>
   
    <button class="btn" id = "show-btn">Show Details</button>
  
    `;
    phoneBox.appendChild(box);
    
    // let showBtn = box.querySelector("#show-btn");
    // showBtn.addEventListener("click", () => {

    //     let detailBox = document.createElement("div");
    //     detailBox.className = "pop-up";
    //     detailBox.innerHTML = `
    //     <img src="${phone.image}" alt="${phone.name}">
    //      <h2>${phone.phone_name}</h2>
    //     <p>There are many variations of passages of available, but the majority have suffered</p>
    //     <button class="close-btn">Close</button>
    //     `;
    //     phoneBox.appendChild(detailBox);
    //     let closeBtn = detailBox.querySelector(".close-btn");
    //     closeBtn.addEventListener("click", () => {
    //         detailBox.style.display = "none";
    //     })
    // })

   }
    
}



search.addEventListener("click", phoneSearch);
phonename.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        phoneSearch();
    }
});

