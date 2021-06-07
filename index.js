/* eslint-disable max-len */
const {MagentoIntegration} = require('@sejazipper/magento-integration');
const _ = require('lodash');
const config = require('config');

const magento = new MagentoIntegration({
  accessToken: config.get('accessToken'),
  accessTokenSecret: config.get('accessTokenSecret'),
  consumerKey: config.get('consumerKey'),
  consumerSecret: config.get('consumerSecret'),
  url: config.get('url'),
});

const produtos = require('./resources/produtos.json');

const produtosWithImage = produtos.filter((el) => el.imagens);
console.log(`Produtos com imagem: ${produtosWithImage.length} of ${produtos.length}`);

const groupedProducts = _.groupBy(produtosWithImage, 'categoria');
const saveProductsFromCategory = (category, quantity) => {
  console.log(`Category size: ${groupedProducts[category].length}`);
  magento.saveZipperProducts(groupedProducts[category].slice(0, quantity));
};

console.log('Categories: ', Object.keys(groupedProducts));

saveProductsFromCategory('CHUTEIRA', 10);
saveProductsFromCategory('MEIA', 10);
saveProductsFromCategory('CAMISETA', 10);
saveProductsFromCategory('CALÇA', 10);
