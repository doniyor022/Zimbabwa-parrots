const productTemplate = document.querySelector("#template");

const renderProduct = function (product) {
  const {
    id,
    title,
    img,
    price,
    birthDate,
    sizes,
    features
  } = product;

  const elProduct = productTemplate.content.cloneNode(true);

  const elProductImg = elProduct.querySelector(".parrot-img");
  elProductImg.src = img;

  const elProductTitle = elProduct.querySelector(".parrot-title");
  elProductTitle.textContent = title;

  const elProductPrice = elProduct.querySelector(".parrot-price");
  elProductPrice.textContent = price;

  const elProductSizes = elProduct.querySelector(".parrot-sizes");
  elProductSizes.textContent = sizes;

  const elProductBirth = elProduct.querySelector(".parrot-birthDate");
  elProductBirth.textContent = birthDate;

  const elProductFeatures = elProduct.querySelector(".parrot-features");
  elProductFeatures.textContent = features;

  return elProduct;
}

let showingProducts = products.slice();

const elParrotsWrapper = document.querySelector(".parrots-wrapper");

const renderProducts = function () {
  elParrotsWrapper.innerHTML = "";

  const productsFragment = document.createDocumentFragment();
  showingProducts.forEach(function (product) {
    const productItem = renderProduct(product);
    productsFragment.append(productItem)
  });
  elParrotsWrapper.append(productsFragment)
}
renderProducts();

elParrotsWrapper.addEventListener("click", function (evt) {
  if (evt.target.matches("button.btn-danger")) {
    const clickedItemId = +evt.target.dataset.id;

    const clickedItemIndex = products.findIndex(function (product) {
      return product.id === clickedItemId;
    });
    const clickedShowingItemIndex = showingProducts.findIndex(function (product) {
      return product.id === clickedItemId;
    });

    showingProducts.splice(clickedShowingItemIndex, [1]);
    products.splice(clickedItemIndex, [1]);

    renderProducts();
  }
})

elFilterForm = document.querySelector(".filter");

elFilterForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const searchValue = evt.target.elements.search.value;

  const searchRegExp = new RegExp(searchValue, "gi");
  showingProducts = products.filter(function (product) {
    return product.title.match(searchRegExp)
  });

  renderProducts();
})


// const parrotTitle = document.querySelector("#edit-parrotTitle");
// const parrotPrice = document.querySelector("#edit-price");
// const parrotDate = document.querySelector("#edit-date");

// const editForm = document.querySelector("#edit-form");
// const editParrotModalEl = document.querySelector("#edit-parrot-modal");
// const editParrotModal = new bootstrap.Modal(editParrotModalEl);

// editForm.addEventListener("click", function(evt){
//   if(evt.target.matches(".btn-secondary")){
//     const clickedItemId = +evt.target.dataset.id;

//     const clickedItemIndex = products.findIndex(function(product){
//       return product.id === clickedItemId
//     })
//     showingProducts.splice(clickedItemIndex, 1);
//     products.splice(clickedItemIndex, 1);

//     renderProducts();
//   }else if(evt.target.matches(".btn-secondary")){
//     const clickedId = +evt.target.dataset.id;

//     const clickedItem = products.find(function(product){
//       return product.id === clickedId
//     })

//     parrotTitle.value = clickedItem.title;
//     parrotPrice.value = clickedItem.price;
//     parrotDate.value = clickedItem.date;

//     editForm.setAttribute("data-editing-id", clickedItem.id)

//   }
// })

// renderProducts();


// const elAddForm = document.querySelector("#add-form");

// elAddForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   const
// })

const addForm = document.querySelector(".add-form");
const parrotModal = new bootstrap.Modal(document.querySelector("#add-parrot-modal"));

addForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const nameInput = evt.target.elements.parrotTitle;
  const priceInput = evt.target.elements.price;
  const dateInput = evt.target.elements.parrot_date;

  const nameValue = nameInput.value;
  const priceValue = priceInput.value;
  const dateValue = dateInput.value;

  if (nameValue.trim() && priceValue.trim() && dateValue.trim()) {
    const product = {
      id: Math.floor(Math.random() * 1000),
      title: nameValue,
      img: "https://picsum.photos/300/200",
      price: priceValue,
      addedDate: new Date().toISOString(),
    }
    product.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    showingProducts.push(product);

    addForm.reset();
    produktModal.hide();

    renderProducts();
  }
})