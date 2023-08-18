const URL =
  "https://api.unsplash.com/photos/?client_id=-yiBIESesLuo9rG7MpEFngNMs2sA852vOJxtLtkMFxs";

function createGallery() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      let section = document.querySelector("#gallerySection");
      let cart = document.querySelector("#cart");
      photos = json;
      console.log(photos);
      photos.forEach((photo) => {
        console.log(photo);
        // let title = document.createElement('h5');
        // let titleContent = document.createTextNode(photo.alt_description)
        let imageURL = photo.urls.regular;
        let image = document.createElement("img");
        image.src = imageURL;
        image.alt = photo.alt_description;
        image.setAttribute("class", "image");
        let boxImage = document.createElement("div");
     
        boxImage.appendChild(image);
        // boxImage.appendChild(title);
        // title.appendChild(titleContent);
        section.appendChild(boxImage);

        image.addEventListener("click", (e) => {
          addCart(e.target);
        });

        function addCart(image) {
          console.log(image);
          let boxCart = document.createElement("div");
          boxCart.setAttribute("class", "cart");
          let imageCart = document.createElement('img');

          imageCart.src = image.src;
          boxCart.appendChild(imageCart);
          cart.appendChild(boxCart);
        }
      });
    })
    .catch((err) => {
      console.log("Fetch error: " + err.message);
    });
}

createGallery();

console.log(cartArr);
