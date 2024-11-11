import { loadProducts, loadPromotions } from "./FileLoader.js";
import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    const products = await loadProducts();
    const promotions = await loadPromotions();
  }
}

export default App;
