# API
## Request (Req):
- URL (domain, route)
- Method (GET, POST, DELETE, PUT, PATCH)
- Headers
- Body (Optional)

## Response (Res)
- Headers
- Status Code: 100 - 200 - 300 - 400 - 500
- Data

- API Create Product:
1- URL: https://www.domain.com/api/products
2- METHOD: POST
3- Headers
4- Body { title, price, category, ... }

5- Headers
6- Status Code: 201 
7- { message: "Created Successfully", product }

- fetch 
- axios