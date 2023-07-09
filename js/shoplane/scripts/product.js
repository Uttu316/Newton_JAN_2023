import { Cart, END_POINTS } from "./config.js";

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
      onClickAddToCart(res);
    } catch (e) {
      console.log(e);
    }
  } else {
    location.pathname = location.pathname.replace("product", "index");
  }
}

function addProductDeailsToDom(productDetails) {
  const { name, price, photos, description, brand } = productDetails;

  document.title = `${name} |  Shopkart | A Trendy Ecommerce`;

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
    `)[0];
    photoFrame.addEventListener("click", function (e) {
      $("#product-preview").attr({
        src: photo,
      });
      $(".product-preview-item.selected").removeClass("selected");
      $(this).addClass("selected");
    });
    photosContainer.append(photoFrame);
  });
}

function onClickAddToCart(producDetails) {
  const cart = new Cart();
  cart.updateCartIcon();
  $("#add-to-cart").on("click", function (e) {
   cart.add(producDetails)
  });
}
