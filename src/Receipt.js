class Receipt {
  constructor() {
    this.items = [];
    this.totalAmount = 0;
  }

  addItem(name, quantity, price) {
    const totalItemPrice = quantity * price;
    this.items.push({ name, quantity, price: totalItemPrice });
    this.totalAmount += totalItemPrice;
  }

  getFinalAmount() {
    return this.totalAmount;
  }
}

export default Receipt;
