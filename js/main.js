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

const addForm = document.querySelector(".add-form");
const parrotModal = new bootstrap.Modal(document.querySelector("#add-parrot-modal"));

addForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  const nameInput = evt.target.elements.parrotTitle;
  const priceInput = evt.target.elements.price;
  const dateInput = evt.target.elements.parrot-date;

  const nameValue = nameInput.value;
  const priceValue = priceInput.value;
  const dateInput = 
})