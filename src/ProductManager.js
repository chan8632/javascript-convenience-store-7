import fs from "fs/promises";
class ProductManager {
  constructor() {
    this.products = this.loadProductsFromFile();
  }

  async loadProductsFromFile() {
    const data = await fs.readFile("public/products.md", "utf8");
    const lines = data.trim().split("\n");
    const parseProducts = setParseProducts(lines);
    return parseProducts;
  }

  setParseProducts(data) {
    return data.slice(1).map((line) => {
      const [name, price, quantity, promotion] = line.split(",");

      function formatPromotion(promotion) {
        if (promotion.trim() === null) {
          return null;
        }
        return promotion.trim();
      }

      return {
        name: name.trim(),
        price: parseInt(price.trim(), 10),
        quantity: parseInt(quantity.trim(), 10),
        promotion: formatPromotion(promotion),
      };
    });
  }

  getAvailableProducts() {
    return this.products.filter((product) => product.stock > 0);
  }

  getProductByName(productName) {
    const product = this.products.find((p) => p.name === productName);
    if (!product) throw new Error("[ERROR] 존재하지 않는 상품입니다.");
    return product;
  }

  updateStock(productName, quantity) {
    const product = this.getProductByName(productName); // 상품을 찾기 위해 getProductByName 사용
    if (product.stock < quantity)
      throw new Error("[ERROR] 재고 수량을 초과하여 구매할 수 없습니다.");
    product.stock -= quantity; // 구매 후 재고 차감
  }
}

export default ProductManager;
// export async function loadPromotions() {
//   const data = await fs.readFile("public/promotions.md", "utf8");
//   const lines = data.trim().split("\n");
//   const parsedPromotions = setParsePromotions(lines);
//   return parsedPromotions;
// }

// function setParsePromotions(data) {
//   return data.slice(1).map((line) => {
//     const [name, buy, get, start_date, end_date] = line.split(",");
//     return {
//       name: name.trim(),
//       buy: parseInt(buy.trim(), 10),
//       get: parseInt(get.trim(), 10),
//       start_date: new Date(start_date.trim()),
//       end_data: new Date(end_date.trim()),
//     };
//   });
// }
