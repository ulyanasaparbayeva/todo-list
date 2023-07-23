function addProduct() {
  const productInput = document.getElementById("productInput");
  const productList = document.getElementById("productList");

  const product = productInput.value.trim();
  if (product !== "") {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    const productName = document.createElement("span");
    productName.classList.add("product-name");
    productName.textContent = product;
    productItem.appendChild(productName);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        productName.style.textDecoration = "line-through";
      } else {
        productName.style.textDecoration = "none";
      }
    });
    productItem.appendChild(checkbox);

    const deleteBtn = document.createElement("span");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
      productItem.remove();
    });
    productItem.appendChild(deleteBtn);

    productList.appendChild(productItem);
    productInput.value = "";
  }
}
