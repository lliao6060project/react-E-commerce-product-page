import { mock } from "remockjs";

export default {
  product: {
    code: 0,
    message: 'ok',
    data: mock({
      'name|1': ['Fall Limited Edition Sneakers', '@string("en", 12, 15)'],
      'desc|1': [
        `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole. they'll withstand everything the weather can offer.`,
        '@sentence("en")'
      ],
      'company_name|1': ['SNEAKER COMPANY', '@string("upper", 4, 8) + " " + "COMPANY"'],
      price: {
        original: 250,
        discount: 125
      },
      discount: 0.5,
      images: [{
        small: '@image("200x100", "@color()")',
        normal: '@image("1000x1000")'
      }]
    })
  }
};
