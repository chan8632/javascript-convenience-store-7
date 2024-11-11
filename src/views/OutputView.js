import { MissionUtils } from "@woowacourse/mission-utils";

const OutputView = {
  printProducts(products) {
    MissionUtils.Console.print(`안녕하세요. W편의점입니다.
현재 보유하고 있는 상품입니다.
        `);
    products.forEach((product) => {
      MissionUtils.Console.print(
        `- ${product.name} ${product.price}원 ${product.quantity}개 ${product.promotion}`
      );
    });
  },
};

export default OutputView;
