const shoppingCart = {
  itemsInCart: ["The Great Gatsby"],
  handleClick(removeBook) {
    removeBook(this.itemsInCart);
  },
  displayCart(clickHandler) {
    const renderTarget = document.getElementById("cart");
    const itemsInCart = this.itemsInCart.map((item) => `<p>${item}</p>`);
    const checkoutButton = "<button id='checkout'>Check out</button>";

    renderTarget.innerHTML = itemsInCart.join("") + checkoutButton;
    document
      .getElementById("checkout")
      .addEventListener("click", () => this.handleClick(clickHandler));
  },
};
