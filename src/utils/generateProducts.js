import { faker } from "@faker-js/faker";

faker.locale = "es";

export const generateProducts = () => {
  //   const numOfProducts = parseInt(
  //     faker.random.numeric(1, { bannedDigits: ["0"] })
  //   );
  const products = [];

  //   for (let i = 0; i < numOfProducts; i++) {
  //     products.push(generateProduct());
  //   }

  for (let i = 0; i < 100; i++) {
    products.push(generateProduct());
  }

  return {
    // name: faker.name.firstName(),
    // last_name: faker.name.lastName(),
    // birthgDate: faker.date.birthdate(),
    // email: faker.internet.email(),
    // phone: faker.phone.number(),
    // sex: faker.name.sex(),
    products,
  };
};

export const generateProduct = () => {
  return {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    code: faker.datatype.string(5),
    price: faker.commerce.price(),
    status: faker.datatype.boolean(1),
    stock: faker.random.numeric(1),
    category: faker.commerce.department(),
    thumbnail: faker.image.image(),
    id: faker.database.mongodbObjectId(),
  };
};
