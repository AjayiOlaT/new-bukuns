# Functional Requirement Document (FRD)
## Bukun's Bite E-Commerce Platform

## 1. Introduction

This document outlines the functional requirements for the Bukun's Bite e-commerce website. It expands on the Product Requirement Document (PRD) by detailing the specific functionalities, user interactions, and system behaviors required to build the platform.

## 2. Branding and Visual Design

Based on the provided brand assets, the website's design will adhere to the following visual identity:

### Color Palette

- Primary Red (for buttons, calls-to-action, highlights): `#D90429`
- Dark Text & Elements: `#0D0D0D` (A strong, near-black)
- Primary Background: `#FFFFFF` (Clean white)
- Secondary Background/Accents: `#F5F5F5` (A very light grey for section breaks)
- Earthy Accent (from Kuli-Kuli): `#A97C50` (A warm brown for subtle highlights or decorative elements)

### Typography

- **Headings**: A bold, modern, sans-serif font similar to the "BUKUNS BITE" logo (e.g., Montserrat, Poppins)
- **Body Text**: A clean, highly readable sans-serif font (e.g., Inter, Lato)
- **Special Text**: A stylish, script-like font similar to the flyer for emphasis on product pages

## 3. Customer-Facing Functional Requirements

### 3.1 Homepage

1. **Navigation Bar**: The system shall display a persistent navigation bar at the top of the page with links to "Home," "Products," and "Contact Us."
2. **Hero Section**: The system shall display a large, high-quality banner image with the headline "Sweet and Spicy Kuli Kuli" and a call-to-action button "Order Now" that links to the Product Showcase Page.
3. **Product Highlights**: The system shall display a section titled "Our Sizes" featuring at least 3-4 main products. Each product card will show an image, name, price, and an "Add to Cart" button.
4. **Footer**: The system shall display a footer with contact details (phone numbers) and social media links (Instagram, Facebook) as seen on the flyer.

### 3.2 Product Showcase & Cart

1. **Product Display**: The system shall display all available products in a grid layout. Each product must show its image, name, price, and a short description.
2. **Add to Cart**:
   - When a user clicks the "Add to Cart" button for an item, the system shall add one unit of that item to the shopping cart.
   - The cart icon in the navigation bar shall update to show the number of items currently in the cart.
   - A small, non-intrusive notification (e.g., "Pouch added to cart") shall briefly appear.
3. **View Cart**: Clicking the cart icon shall navigate the user to the Shopping Cart page.
4. **Update Quantity**: In the cart, the user must be able to increase or decrease the quantity of each item. The subtotal and grand total must update automatically in real-time.
5. **Remove from Cart**: The user must be able to remove an item completely from the cart. The cart must update automatically.

### 3.3 Checkout Process

1. **Customer Information Form**: The system shall display a form with the following mandatory fields:
   - Full Name (Text input)
   - Phone Number (Number input, validated for length)
   - Delivery Address (Large text area)
2. **Order Summary**: The system shall display a final summary of the items being purchased and the total cost.
3. **Payment Options**: The checkout page shall display the available payment methods:
   - Option 1: Pay on Delivery
   - Option 2: Bank Transfer (with account details)
4. **Place Order**:
   - The "Place Order" button shall be disabled until all mandatory fields are filled correctly.
   - Upon clicking "Place Order," the system shall save the order details to the Firestore database.

### 3.4 Order Confirmation

1. **Confirmation Message**: After a successful order, the system shall redirect the user to a confirmation page with the message: "Thank You! Your order has been placed successfully."
2. **Order Details**: The page will display the customer's unique Order ID and a summary of the order they just placed.

## 4. Admin-Facing Functional Requirements

### 4.1 Secure Admin Login

1. **Login Page**: The system shall provide a secure login page accessible only via a specific URL (e.g., /admin).
2. **Authentication**: The system shall require a username and password to grant access to the admin dashboard.

### 4.2 Admin Order Dashboard

1. **Real-time Order View**: The dashboard shall display a list of all orders, with the newest orders appearing at the top in real-time without needing a page refresh.
2. **Order Card Details**: Each order in the list must show the Order ID, Customer Name, Total Price, and Order Status at a glance.
3. **Order Expansion**: Clicking on an order card shall expand it to show full details: Customer Phone & Address, and a list of all items ordered.
4. **Status Update**: The admin must be able to update the status of an order using a dropdown menu with the options: "New," "Confirmed," "Out for Delivery," "Completed," "Cancelled." The change must be saved automatically.

## 5. Non-Functional Requirements

1. **Responsiveness**: All pages must be fully responsive and functional on desktop, tablet, and mobile devices.
2. **Performance**: The website should load quickly, with page load times under 3 seconds on a standard connection.
3. **Security**: Customer data must be handled securely, and the admin panel must be protected from unauthorized access.

