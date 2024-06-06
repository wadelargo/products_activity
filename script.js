fetch('https://dummyjson.com/products')
  .then((response) => response.json())
  .then((data) => {
    let productsDiv = document.getElementById('products');

    data.products.forEach((product) => {
      let productDiv = document.createElement('div');
      productDiv.className = "product";

      let titleH4 = document.createElement('h4');
      titleH4.className = "title";

      let descriptionDiv = document.createElement('div');
      descriptionDiv.className = "description";

      let priceDiv = document.createElement('div');
      priceDiv.className = "price";

      let image = document.createElement('img');
      image.className = "image";
      image.src = product.images[0]; 

      descriptionDiv.innerText = product.description;
      titleH4.innerText = product.title;
      priceDiv.innerText = product.price + ' PHP';

      productDiv.appendChild(image);

      productDiv.append(titleH4);
      productDiv.append(descriptionDiv);
      productDiv.append(priceDiv);

      productsDiv.append(productDiv);
    });
  });