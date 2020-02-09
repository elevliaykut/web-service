## Building-Restful Api with Node.Js 🎉

##### A REST API application using Node.js

### Technologies used;🚀

✔️  Node.js with Express

✔️  AWS (Amazon Web Services)

✔️  JWT (Json Web Token)  

✔️  MongoDB for database with Mongoose

## Installation

- Clone the repository and go to project directory.
  
  - git clone https://github.com/elevliaykut/web-service.git

  - cd web-service

- Install MongoDB for mongoose in project directory.

    -   npm install mongoose --save

- Install JsonWebToken (JWT) for Authentication.

    - npm install jsonwebtoken --save

- Install bcrypt for encode password after authentication.

    - npm install bcrypt --save

- Install regex (Regular Expression) for validation.

    - npm install regex --save

- Install npm and start the web service.

    - npm install

    - npm start

- Install the postman on your system and test api.

    - https://www.postman.com/downloads/

## Sending Request To SignUp

<table>
    <thead>
      <tr>
        <th>Method</th>
        <th>URL</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>https://localhost:3000/user/signup</td>
            <td><code>Create New User</code></td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>https://localhost:3000/user/:userid</td>
            <td><code>Delete User</code></td>
        </tr>
    </tbody>
  </table>

## Sending Request To LogIn

<table>
    <thead>
      <tr>
        <th>Method</th>
        <th>URL</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>https://localhost:3000/user/login</td>
            <td><code>Auth Provide & return a verify token</code></td>
        </tr>
    </tbody>
  </table>

## Sending Request To Product

<table>
    <thead>
      <tr>
        <th>Method</th>
        <th>URL</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>https://localhost:3000/products</td>
            <td><code>Create New Product</code></td>
        </tr>
        <tr>
            <td>GET</td>
            <td>https://localhost:3000/products</td>
            <td><code>Fetch All Products</code></td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>https://localhost:3000/:productId</td>
            <td><code>Update Product</code></td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>https://localhost:3000/:productId</td>
            <td><code>Delete Product</code></td>
        </tr>
    </tbody>
  </table>

  ## Sending Request To Orders

<table>
    <thead>
      <tr>
        <th>Method</th>
        <th>URL</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>https://localhost:3000/orders</td>
            <td><code>Create New Order</code></td>
        </tr>
        <tr>
            <td>GET</td>
            <td>https://localhost:3000/orders</td>
            <td><code>Fetch All Order</code></td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>https://localhost:3000/:orderId</td>
            <td><code>Update Order</code></td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>https://localhost:3000/:orderId</td>
            <td><code>Delete Order</code></td>
        </tr>
    </tbody>
  </table>
