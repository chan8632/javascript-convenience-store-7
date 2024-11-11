import fs from "fs/promises";
export async function loadProducts() {
  const data = await fs.readFile("public/products.md", "utf8");
  const lines = data.trim().split("\n");
  const parseProducts = setParseProducts(lines);
  return parseProducts;
}

export async function loadPromotions() {
  const data = await fs.readFile("public/promotions.md", "utf8");
  const lines = data.trim().split("\n");
  const parsedPromotions = setParsePromotions(lines);
  return parsedPromotions;
}
function setParseProducts(data) {
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
function setParsePromotions(data) {
  return data.slice(1).map((line) => {
    const [name, buy, get, start_date, end_date] = line.split(",");
    return {
      name: name.trim(),
      buy: parseInt(buy.trim(), 10),
      get: parseInt(get.trim(), 10),
      start_date: new Date(start_date.trim()),
      end_data: new Date(end_date.trim()),
    };
  });
}
