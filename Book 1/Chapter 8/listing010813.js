const shoppingCart = {
  itemInCart: ["The Great Gatsby"],
  displayCart() {
    const renderTarget = document.getElementById("cart");
    const itemsInCart = this.itemInCart.map((item) => `<p>${item}</p>`);
    const checkoutButton = "<button id='checkout'>Check out</button>";

    renderTarget.innerHTML = itemsInCart.join("") + checkoutButton;
  },
};
