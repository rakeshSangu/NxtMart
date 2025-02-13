# NxtMart

## Project Description
NxtMart is an e-commerce web application that allows users to browse and purchase products categorized by type. The application fetches data from an internal server and provides authentication, authorization, and a responsive user interface. Users can log in, add products to their cart, modify quantities, and view their order total. The project showcases key React concepts, including state management, routing, API integration, and local storage handling.

## Features
- **Authentication & Authorization:**
  - Secure login system with JWT token-based authentication.
  - Redirect unauthenticated users to the login page.
  - Prevent authenticated users from accessing the login page.
- **Product Listing & Navigation:**
  - Fetch product data from an internal API.
  - Display products categorized by type.
  - Scroll through products horizontally within each category.
  - Category panel for easy navigation.
- **Cart Functionality:**
  - Add products to the cart with an increase/decrease quantity feature.
  - Persist cart data using Local Storage.
  - Display total order cost dynamically.
  - Highlight the cart link in the navbar when items are present.
- **Responsive Design:**
  - Adaptable UI for desktop, tablet, and mobile views.
  - Uses media queries for responsiveness.
- **Error Handling:**
  - Show appropriate error messages for failed API requests.
  - Provide a retry button to fetch data again.
  - Display a custom 404 Not Found page for invalid routes.
- **Navigation & Routing:**
  - Routes: `/login`, `/`, `/cart`.
  - Clicking the logo redirects users to the home page.
  - Logout button redirects users to the login page.
  
## Technologies Used
- **Frontend:** React, React Router
- **State Management:** React State (Class based)
- **Styling:** CSS (No Styled Components)
- **API Handling:** Fetch API
- **Authentication:** JWT (Cookies based authentication)
- **Local Storage:** Persist cart data

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/nxtmart.git
   cd nxtmart
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## API Requests & Responses
- **Login Route (`/login`)**
  - Stores `jwt_token` in cookies after successful login.
- **Home Route (`/`)**
  - Fetches product data from `nxtMartApiUrl`.
  - Displays products category-wise.
  - Allows users to add, increase, and decrease product quantity.
- **Cart Route (`/cart`)**
  - Displays selected products and their quantity.
  - Updates total price dynamically.
  - Stores cart data in Local Storage (`cartData`).


## Deployment
To deploy the app:
1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy using services like Vercel, Netlify, or Firebase Hosting.



