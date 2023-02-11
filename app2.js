fetch("https://dummyapi.io/data/v1/post/?page=1&limit=10", {
  method: "GET",
  headers: { "app-id": "63e6471e22d89344ef88f305" },
})
  .then((res) => res.json())
  .then((data) => {
    const arr = data.data;

    // rendering post page data
    for (let i = 0; i < 10; i++) {
      const pd = document.querySelector(".post-div");

      const nDiv = document.createElement("div");
      nDiv.classList.add("post-div");
      nDiv.innerHTML = `  <div>
        <img id="doggo" class=" border border-blue-900  w-full lg:h-80 cursor-pointer" src=${
          arr[i].image
        } 
            alt="" />
    </div>
  
    <div>
        <h1 class="py-3 px-4 font-boldtext-sm lg:text-xl">${arr[
          i
        ].text.substring(0, 20)} ...</h1>
        <p class="py-3 px-4 text-sm lg:text-xl"> <Strong> Owner of photo : </Strong>${
          arr[i].owner.firstName
        } ${arr[i].owner.lastName}</p>
        <p class="py-3 px-4 text-sm lg:text-xl"> <Strong> Published date : </Strong>${arr[
          i
        ].publishDate.substring(0, 10)}  </p>
        <p class="py-3 px-4 text-sm lg:text-xl"> <Strong> Published time : </Strong>${arr[
          i
        ].publishDate.substring(10)} </p>
        <p class="py-3 px-4 text-sm lg:text-xl"> <Strong>No. of likes : </Strong> ${
          arr[i].likes
        }</p>
    </div>`;

      pd.appendChild(nDiv);
    }
  });
