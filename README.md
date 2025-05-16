🛒 Revo Shop Catalogue
A simple product catalogue built with Next.js and Tailwind CSS that fetches product data from the Fake Store API.

🚀 Features
Fetches products from Fake Store API.

Displays products with title, description, price, and image.

Reusable ProductCard component.

Styled using Tailwind CSS.

📦 Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/revou-fsse-feb25/milestone-3-boxkalengx.git
cd milestone-3-boxkalengx
Install dependencies:

bash
Copy
Edit
npm install

# or

yarn install
Run the development server:

bash
Copy
Edit
npm run dev

# or

yarn dev
Open http://localhost:3000 to view it in your browser.

🧑‍💻 Project Structure
bash
Copy
Edit
/components
└── ProductCard.jsx
/pages
└── index.jsx (Main Home component)
Home.jsx
Fetches product data using useEffect.

Stores products in state using useState.

Renders a list of ProductCard components.

ProductCard.jsx
Receives product props.

Displays image, title, description, and price.

Includes a "View Product" link (dynamic routing ready).

🛠️ Tech Stack
Next.js 14+

React 18

Tailwind CSS

Fake Store API

🌐 API Used
https://fakestoreapi.com/products

📦 Deployment
You can easily deploy this project to Vercel with GitHub integration.

📄 License
This project is for learning & demo purposes.
