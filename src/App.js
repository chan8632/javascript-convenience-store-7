import ProductManager from "./ProductManager.js";
import Receipt from "./Receipt.js";
import OutputView from "./views/OutputView.js";
import InputView from "./views/InputView.js";
import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  constructor() {
    this.productManger = new ProductManager();
  }
  async run() {
    OutputView.printProducts(this.productManger.getAvailableProducts());

    const receipt = new Receipt();

    while (true) {
      const input = await InputView.readProductSelection();
      const [productName, quantity] = this.parseInput(input);

      try {
        const product = this.productManger.getProductByName(productName);
        this.productManger.updateStock(productName, quantity);

        receipt.addItem(productName, quantity, product.price);

        OutputView.printReceipt(receipt);

        const additionalPurchase = await InputView.readAdditionalPurchase();
        if (additionalPurchase.toLowerCase() !== "y") break;

        OutputView.printProducts(this.productManger.getAvailableProducts());
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }
}

export default App;
