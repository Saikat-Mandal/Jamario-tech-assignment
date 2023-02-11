fetch("https://dummyapi.io/data/v1/post/?page=1&limit=10", {
  method: "GET",
  headers: { "app-id": "63e6471e22d89344ef88f305" },
})
  .then((res) => res.json())
  .then((data) => {
    const arr = data.data;

    // rendering home page data
    for (let i = 0; i < 10; i++) {
      const cd = document.querySelector(".card-div");

      const newDiv = document.createElement("div");
      newDiv.classList.add("doggo-div");
      newDiv.innerHTML = ` 
     <img id="doggo" class=" border border-blue-900 w-full h-80 cursor-pointer" src=${arr[i].image} alt="" />

     <p class="py-3 px-4 font-bold">${arr[i].text} </p>

     <div class="text-sm px-4 flex gap-5 py-3">
         <span class="card-items">#${arr[i].tags[0]}</span>
         <span class="card-items">#${arr[i].tags[1]}</span>
         <span class="card-items">#${arr[i].tags[2]}</span>
     </div>
     <div class=" px-4 flex gap-5 py-3 items-center">
         <img class="w-ful h-10 rounded-full" src=${arr[i].owner.picture} alt="" />
         <p>${arr[i].owner.firstName} ${arr[i].owner.lastName}</p>
     </div>`;

      cd.appendChild(newDiv);
    }
  });
