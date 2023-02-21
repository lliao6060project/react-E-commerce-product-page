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
  },

  cart_list: {
    code: 0,
    message: 'ok',
    data: mock({
      amount: 15,
      'products|3': [{
          id: "@id()",
          name: '@string("upper", 10, 15)',
          price: '@natural(99, 1000)',
          amount: 5,
          image_url: '@image("200x100", color())',
        }
      ]
    })
  },

  add_to_cart: {
    code: 0,
    message: 'ok',
    data: {}
  },

  delete_prod: {
    code: 0,
    message: 'ok',
    data: {}
  },
};
