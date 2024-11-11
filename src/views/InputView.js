import { MissionUtils } from "@woowacourse/mission-utils";

class InputView {
  readItem() {
    return MissionUtils.Console.readLineAsync(
      "구매하실 상품명과 수량을 입력해 주세요. (예: [사이다-2],[감자칩-1])\n"
    ).then((input) => this.parseInt(input));
  }

  parseInt(input) {
    return input
      .replace(/[\[\]]/g, "")
      .split(",")
      .map((item) => {
        const [name, quantity] = item.split("-");
        return { name: name.trim(), quantity: parseInt(quantity.trim(), 10) };
      });
  }
}

export default new InputView();
