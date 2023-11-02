const healthContainer = document.querySelector('.main__product-health-cards');


function renderCards(cardsType, container){
  cardsType.forEach(key => {
    const hearthImage = document.createElement('img');
    hearthImage.setAttribute('src', './assets/svg/heart.svg');
    hearthImage.setAttribute('alt', 'hearth logo');

    const productImage = document.createElement('img');
    productImage.classList.add('img__product');
    productImage.setAttribute('src', key.image);
    productImage.setAttribute('alt', 'product image');

    const titlePrduct = document.createElement('h3');
    titlePrduct.innerText = key.title;

    const descriptionProduct = document.createElement('p');
    descriptionProduct.innerText = key.description;

    container.append(hearthImage, productImage, titlePrduct, descriptionProduct);
  });
}

renderCards(cardHealt, healthContainer);