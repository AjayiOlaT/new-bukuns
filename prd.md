# Product Requirement Document: Bukun's Bite E-Commerce Platform

## 1. Project Vision & Goal

To create a simple, visually appealing, and user-friendly e-commerce website that allows customers to easily browse and purchase Kuli-Kuli products online. The primary goal is to streamline the ordering process and provide the business owner with a centralized dashboard to manage orders for efficient delivery.

## 2. User Roles

The platform will have two primary user roles:

- **Customer (Guest/Registered)**: Any person visiting the site to browse products and make a purchase.
- **Admin (Business Owner)**: Your girlfriend, who will manage products, view orders, and oversee the site.

## 3. Core Features

### 3.1. Customer-Facing Features (The Storefront)

#### Homepage
- An attractive welcome banner with a high-quality image of the Kuli-Kuli
- A brief, catchy introduction to the business
- A featured products section showcasing the different Kuli-Kuli sizes
- Clear navigation to the "Products/Order Now" page
- Contact information or a link to a contact section

#### Product Showcase Page
- A clean grid or list view of all available Kuli-Kuli products
- Each product listing will include:
  - Product Name (e.g., "Kuli-Kuli Pouch," "Kuli-Kuli Standard Jar," etc.)
  - High-Quality Image: A clear photo of each product size
  - Short Description: Details about the size, potential use
  - Price
  - An "Add to Cart" button

#### Shopping Cart
- A clear summary of all items the customer has selected
- Ability to increase or decrease the quantity of each item
- Ability to remove an item from the cart
- A running subtotal of the cost
- A prominent "Proceed to Checkout" button

#### Checkout Process
- A simple, one-page form to collect customer details:
  - Full Name
  - Phone Number (Essential for delivery communication)
  - Delivery Address
  - Email Address (for order confirmation)
  - Optional: Delivery Notes
- Order Summary: A final review of the items and total cost
- Payment Information:
  - Pay on Delivery option
  - Bank transfer option with account details
- A "Place Order" button

#### Order Confirmation Page
- A "Thank You" message confirming the order has been received
- A summary of the order details and the order number
- Information on next steps

### 3.2. Admin-Facing Features (The Dashboard)

#### Secure Login
- A password-protected login page for the business owner

#### Orders Dashboard
- Real-time list of all incoming orders
- Each order entry should display:
  - Order Number
  - Customer Name
  - Customer Phone Number & Address
  - Items Ordered (and quantities)
  - Total Price
  - Order Status (e.g., "New," "Confirmed," "Out for Delivery," "Completed")
- Ability to click into an order to see full details
- Simple order status update functionality

#### Product Management (Optional - for future growth)
- Initially, the products can be hard-coded
- Future interface for:
  - Adding new products
  - Editing product details
  - Managing inventory status

## 4. Technical Considerations

### Simplicity is Key
- Start with critical features (ordering and order management)
- Build incrementally from there

### Mobile-First Design
- Website must be responsive and mobile-friendly
- Optimize for smartphone users

### Technology Stack
- Frontend: React for user interface
- Backend: Firebase (Firestore) for real-time database
- Benefits:
  - Real-time order updates
  - No page refresh needed
  - Efficient delivery management

## 5. Success Metrics

How will we know if the site is successful?

- Number of orders placed through the website per week/month
- Positive feedback from customers about the ease of use
- Business owner's satisfaction with the admin dashboard

