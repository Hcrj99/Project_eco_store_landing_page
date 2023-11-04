const healthContainer = document.querySelector('.main__product-health-cards');
const furnitureContainer = document.querySelector('.main__product-furniture-cards');


function renderCards(cardsType, container){
  cardsType.forEach(key => {
    const sectionCards  = document.createElement('section');
    sectionCards.classList.add('product__cards');

    const divImage = document.createElement('div')
    const hearthImage = document.createElement('img');
    hearthImage.setAttribute('src', './assets/svg/heart.svg');
    hearthImage.setAttribute('alt', 'hearth logo');

    divImage.append(hearthImage);

    const productImage = document.createElement('img');
    productImage.classList.add('img__product');
    productImage.setAttribute('src', key.image);
    productImage.setAttribute('alt', 'product image');

    const titlePrduct = document.createElement('h3');
    titlePrduct.innerText = key.title;

    const descriptionProduct = document.createElement('p');
    descriptionProduct.innerText = key.description;

    sectionCards.append(divImage, productImage, titlePrduct, descriptionProduct);

    container.append(sectionCards);
  });
}

renderCards(cardHealt, healthContainer);
renderCards(cardFurniture, furnitureContainer);