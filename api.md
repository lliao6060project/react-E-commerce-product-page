# API Schema

## GET /api/product/:id

### response
```json
{
  "product": {
    "name": "xxxx",
    "desc": "xxxx",
    "company_name": "SNEAKER COMPANY",
    "price": {
      "original": 250,
      "discount": 125,
    },
    "discount": 0.5,
    "images": [{
      "small": "http://xxxxx/aaa.jpg",
      "normal": "http://xxxxx/aaa.jpg",
    }],
  }
}
```

## POST /api/cart
### request header
```json
{
  "X-Token": "xxxxx"
}
```
### response
```json
{
  "amount": 500,
  "products": [{
    "name": "xxxx",
    "price": 125,
    "amount": 4,
    "image_url": "http://xxxxx/aaa.jpg",
  }],
}
```