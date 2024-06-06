# Basic HTTP Server

This is a basic HTTP server built using Node.js. It can handle both GET and POST requests and serves static HTML pages.

## Features

- Serves static HTML pages for GET requests to `/`, `/about`, and `/contact`.
- Handles POST requests to `/contact` and logs the received data.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd my-http-server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node server.js
   ```
2. Open your browser and go to `http://127.0.0.1:3000`.

## Routes

- `GET /`: Serves the home page.
- `GET /about`: Serves the about page.
- `GET /contact`: Serves the contact page.
- `POST /contact`: Handles form submission and logs the received data.

## Testing

You can use tools like Postman or Curl to test the server's functionality.

- **GET requests**:

  ```bash
  curl http://127.0.0.1:3000/
  curl http://127.0.0.1:3000/about
  curl http://127.0.0.1:3000/contact
  ```

- **POST request**:
  ```bash
  curl -X POST -d "name=John&message=Hello" http://127.0.0.1:3000/contact
  ```

## License

This project is licensed under the MIT License.
