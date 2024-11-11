import { loadProducts, loadPromotions } from "./FileLoader.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "./views/OutputView.js";
import InputView from "./views/InputView.js";
class App {
  async run() {
    const products = await loadProducts();
    const promotions = await loadPromotions();
    OutputView.printProducts(products);
    const 구매할상품과수량 = await InputView.readItem();
  }
}

export default App;
