const END_POINTS = {
  products: "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
};

$(() => {
  getProducts();
});

async function getProducts() {
  try {
    const res = await $.get(END_POINTS.products);
    createProductsList(res)
  } catch (e) {
    console.log(e);
  }
}

function createProductsList(products) {
  products.forEach((product) => {
    const card = createCard(product);
    if (product.isAccessory) {
      $("#accessories").append(card);
    } else {
      $("#clothings").append(card);
    }
  });
}

function createCard(productDetails) {
  const { brand, name, preview, price, id } = productDetails;
  return $(
    `
    <a class="product-category-card-link" href="/product?product_id=${id}">
        <div class="product-category-card" >
        <img  class="product-category-card-img" src=${preview} alt=${name} />
        <div class="product-category-card-details">
          <h3 class="product-category-card-title">${name}</h3>
          <p class="product-category-card-brand">${brand}</p>
          <p class="product-category-card-price">Rs ${price}</p>
        </div>
      </div>
    </a>
        `
  );
}
