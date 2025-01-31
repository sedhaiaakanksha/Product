function search() {
  console.log("called");
  const searchInput = document.querySelector(".search").value.toLowerCase();
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    const productDesc = product
      .querySelector(".desc p")
      .innerText.toLowerCase();
    if (productDesc.includes(searchInput)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

const allButtons = document.querySelectorAll(".btn1 button");

allButtons.forEach((button) => {
  console.log("clicked");
  button.addEventListener("click", () => {
    button.classList.add("ADDEDCART");
    button.innerHTML = "Added ✅";
    button.style.boxShadow = "0 0 15px 2px orange";

    setTimeout(() => {
      button.innerHTML = "Add to cart";
      button.classList.remove("ADDEDCART");
      button.style.boxShadow = "none";
    }, 1600);
  });
});
