import { END_POINTS } from "./config.js";

function getSearchKey(key) {
  const search = location.search;
  const searchObj = new URLSearchParams(search);
  return searchObj.get(key);
}

$(() => {
  getProductDetails();
});

async function getProductDetails() {
  const product_id = getSearchKey("product_id");
  if (product_id) {
    try {
      const url = `${END_POINTS.products}/${product_id}`;
      const res = await $.get(url);
      //   console.log(res)
      addProductDeailsToDom(res);
    } catch (e) {
      console.log(e);
    }
  } else {
    location.pathname = location.pathname.replace("product", "index");
  }
}

function addProductDeailsToDom(productDetails) {
  const { name, price, photos, description, brand } = productDetails;

  $("#product-title").html(name);
  $("#product-brand").html(brand);
  $("#product-price").html(price);
  $("#product-description").html(description);
  $("#product-preview").attr({
    src: photos[0],
    alt: name,
  });
  const photosContainer = $("#product-previews");
  photos.forEach((photo, index) => {
    const photoFrame = $(`
    <div class="product-preview-item ${index === 0 ? "selected" : ""}">   
    <img src=${photo} alt="photo-${index + 1}" />
    </div>
    `);
    photosContainer.append(photoFrame);
  });
}
