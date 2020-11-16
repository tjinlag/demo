import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';

let histories = null;

export const randomHistories = () => {
  if (!histories) {
    histories = Array(20).fill('').map(() => {
      const originalPrice = Math.round(faker.random.number(1e6)/1e4)*1e4
      let discount = Math.round(originalPrice * 0.02);
      const price = originalPrice - discount;
      return {
        id: uuidv4(),
        quantity: faker.random.number(5),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        originalPrice,
        discount,
        price,
        buyAt: faker.date.past().getTime(),
        status: faker.random.number(1) + 1, // 1 success, 2 pending, 3 fail
      };
    })
  }
  return histories;
}