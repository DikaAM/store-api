**Project Name:** Store API

**Description**

This Node.js and Express API provides a foundation for managing products in your online store. It offers functionalities to:

- Retrieve all products or filter them based on price, featured status, company, name, sorting, field selection, and numeric filters.
- Fetch a specific product by its ID.
- Create new products.
- Update existing products.
- Delete products.

This API is designed to be flexible and adaptable to your specific store requirements.

**Getting Started**

1. **Prerequisites:**
   - Node.js (version 14 or later recommended)
   - npm package manager (included with Node.js installation)

2. **Clone the Repository:**

   ```bash
   git clone https://github.com/DikaAM/store-api.git
   ```

3. **Install Dependencies:**

   ```bash
   cd store-api
   npm install
   ```

4. **Environment Variables:**

   Create a `.env` file in the root directory of your project to store sensitive information like your MongoDB connection string:

   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

   **Important:** Do not commit your `.env` file to version control.

5. **Start the Server:**

   ```bash
   npm start
   ```

**API Endpoints**

| Endpoint                  | Method        | Description                                           |
|---------------------------|---------------|-------------------------------------------------------|
| `/api/v1/products`        | `GET`          | Retrieves all products.                               |
| `/api/v1/products?`       | `GET`          | Filters products based on various query parameters.    | (See detailed filtering options below)
| `/api/v1/products/:id`   | `GET`          | Fetches a specific product by its ID.                |
| `/api/v1/products`        | `POST`         | Creates a new product.                                 | (Requires product data in the request body)
| `/api/v1/products/:id`   | `PUT`          | Updates an existing product.                          | (Requires product data in the request body)
| `/api/v1/products/:id`   | `DELETE`       | Deletes a product.                                     |

**Filtering Products (GET /api/v1/products?...)**

The GET request for `/api/v1/products` supports various query parameters to filter your products:

- `featured`: Boolean (`true` or `false`) to filter by featured status.
- `company`: String to filter by company name (case-insensitive).
- `name`: String to filter products containing the name (case-insensitive).
- `sort`: Comma-separated list of fields by which to sort (e.g., `price,-rating`).
- `fields`: Comma-separated list of fields to include in the response.
- `numericFilters`: Comma-separated list of numeric filters in the format `field<operator>value` (e.g., `price>$30,rating>=4`). Supported operators: `>`, `>=`, `=`, `<`, `<=`.
- `page`: Number (default: 1) for pagination.
- `limit`: Number (default: 10) to specify the number of products per page.

**Example Usage**

```bash
curl -X GET http://localhost:3000/api/v1/products?featured=true&sort=price,-rating
```

This request retrieves all featured products, sorted by price (ascending) and then rating (descending).

**Additional Notes**

- Error handling is implemented to return appropriate status codes and messages.
- Consider using a more robust environment variable management solution in production environments.

**Deployment**

- Deploy your API to a cloud hosting platform like Heroku, AWS, or Google Cloud Platform.
- Configure environment variables on your chosen platform.

**License**

MIT License

**Contributing**

We welcome contributions to this project! Please refer to the CONTRIBUTING.md file (if you choose to create one) for guidelines and instructions.

**Disclaimer**

This is a basic example API and may require further enhancements based on your specific requirements.
# store-api
