import { mock } from "remockjs";

export default {
  product: {
    code: 0,
    message: 'ok',
    data: mock({
      name: 'Fall Limited Edition Sneakers',
      'desc|1': [
        `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole. they'll withstand everything the weather can offer.`,
        '@sentence("en")'
      ],
      company_name: 'SNEAKER COMPANY',
      price: {
        original: 250,
        discount: 125
      },
      discount: 0.5,
      'images|4': [{
        small: '@image("200x100", color())',
        normal: '@image("1000x1000", color())'
      }]
    })
  }
};
