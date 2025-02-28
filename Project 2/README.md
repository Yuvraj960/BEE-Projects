# E-Commerce API

This is a simple E-Commerce API that allows you to create, read, update and delete products. It is built using Node.js, Express.js and MongoDB.

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Open the folder in your VS Code editor
4. Open the folder in your VS code terminal by right clicking on the folder and selecting `Open in Integrated Terminal`
5. Run `nodemon script.js` to start the server
6. Go to VS Code Extensions and install `Thunder Client` to test the API
7. Open Thunder Client by clicking on the thunder icon on the left side of the VS Code editor
8. Go to `Collections` and click on 3 lines on the top right corner
9. Click on `Import Collection` and select the `API Endpoints.json` file in your code folder!
10. You are now ready to test the API!
11. You have now collection named `Ecommerce` in your Thunder Client. Click on the collection and you will see all the API endpoints. Click on any endpoint to test it.

## Database

1. The database used in this project is MongoDB. After you ran the server you have to go to `MongoDBCompass` installed on your local pc.
2. On Connection Tab, Click on `+` icon to add a new connection.
3. Be sure that the URI is `mongodb://localhost:27017` by default. Then add the connection name `ecommerce`.
4. Check the option `Favorite this connection` and click on `Save & Connect`.
5. Your basic database connection is created!
6. After API testing is done, you can check the database by clicking on the `ecommerce` connection and you will see the database `ecommerce` and the collection `products`.

## API Endpoints

1. GET all products: This is GET request for all products. It will return all the products in the database.
2. GET product by ID: This is GET request for a single product. It will return a single product based on the product ID.
3. Add new product: This is POST request to add a new product. It will add a new product to the database.
4. Update product: This is PUT request to update a product. It will update a product based on the product ID.
5. Delete product: This is DELETE request to delete a product. It will delete a product based on the product ID.

## Testing the API

1. Open Thunder Client in your VS Code editor by clicking on the thunder icon on the left side of the editor.
2. Go to collections and click on `Ecommerce` collection.
3. First we have to add some products
    - Click on `Add new product` endpoint
    - Go to `Body` tab then Click on `JSON` and add the product details in this type of JSON format:
        ```json
        {
            "name": "Laptop",
            "price": 900,
            "description": "High-end gaming laptop",
            "category": "Electronics",
            "stock": 100
        }
        ```
    - Click on `Send` button to add the product
    - You will see the response in the right side of the editor as 
        ```
        Status: 201 Created
        Size: 146 Bytes
        Time: 22 ms
        ```
    - This means the product is added successfully
4. For testing `Get All Products`:
   - Click on `Get all products` endpoint
   - Click on `Send` button
   - You will get the list of JSON objects of all the products in the database on right side of the editor
5. For testing `Get Product by ID`:
   - Click on `Get product by ID` endpoint
   - Add the product ID in the URL like `http://localhost:3000/products/your_product_id_here`
   - (Note: You will get product id for a product in top of every product response object in `Get All Products` endpoint)
   - For example, the below you get when you `Get All Products`:
        ```json
        [
            {
                "_id": "67c15c297e8e09c616ead1d0",
                "name": "Laptop",
                "price": 10000,
                "description": "High-end gaming laptop",
                "category": "Electronics",
                "stock": 1000,
                "__v": 0
            },
            {
                "_id": "67c15c917e8e09c616ead1d5",
                "name": "Phone",
                "price": 9000,
                "description": "High-end gaming laptop",
                "category": "Electronics",
                "stock": 100,
                "__v": 0
            }
        ]
        ```
        Here `_id` is the product ID. So you can use this ID to get the product by ID.
    - Click on `Send` button
    - On right side, you will get the JSON object of the product with the given ID
    - If the product ID is not found, you will get the response as `Product not found!`
6. For testing `Update Product`:
   - Click on `Update product` endpoint
   - Add the product ID in the URL like `http://localhost:3000/products/your_product_id_here`
   - Add the updated product details in the `Body` tab in JSON format
   - For example, previosuly we have added a product with ID `67c15c297e8e09c616ead1d0` and now we want to update the price of the product
        ```json
        {
            "price": 10000
        }
        ```
        Like this you can update any field of the product with the given ID
    - Click on `Send` button
    - You will get the response as `Product updated successfully!`
7. For testing `Delete Product`:
   - Click on `Delete product` endpoint
   - Add the product ID in the URL like `http://localhost:3000/products/your_product_id_here`
   - Click on `Send` button
   - You will get the response as `Product deleted successfully!`
