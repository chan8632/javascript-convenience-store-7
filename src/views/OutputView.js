import { MissionUtils } from "@woowacourse/mission-utils";

class OutputView {
  printProducts(products) {
    MissionUtils.Console.print(`안녕하세요. W편의점입니다.
현재 보유하고 있는 상품입니다.
        `);
    products.forEach((product) => {
      MissionUtils.Console.print(
        `- ${product.name} ${product.price}원 ${product.quantity}개 ${product.promotion}`
      );
    });
  }

  printReceipt(receipt) {
    MissionUtils.Console.print("============== W 편의점 ================");
    MissionUtils.Console.print(receipt);
    receipt.items.forEach((item) => {
      MissionUtils.Console.print(
        `${item.name}\t${item.quantity}\t${item.price}`
      );
    });
    MissionUtils.Console.print("====================================");
    MissionUtils.Console.print(
      `총구매액\t\t${receipt.totalQuantity}\t${receipt.totalAmount}`
    );
    MissionUtils.Console.print(`내실돈\t\t\t${receipt.finalAmount}`);
  }
}

export default new OutputView();
