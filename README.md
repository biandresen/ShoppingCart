# 🛒 E-commerce Website

Welcome to my e-commerce website project! This project is part of [The Odin Project](https://www.theodinproject.com), a full-stack web development course, and serves as a demonstration of my skills in building a modern web application using React, TypeScript, and other popular libraries.

🚀 **Live server:** [https://shopping-cart-onb6ibnls-biandresens-projects.vercel.app/](https://shopping-cart-onb6ibnls-biandresens-projects.vercel.app/)

## 💻 Preview
![Desktop: Home page scroll](desktop_homepagescroll.gif)

## 📝Planning
Planned with Figma.
![Figma design](figma_design.png)

## ✨ Features

### 🔑 Core Functionality

- 🔍 **Product Search**: A simple search bar for filtering products by name.
- 🛒 **Cart Management**: Add, delete, and reset products in the cart.
- 📊 **Real-Time Updates**: Dynamically calculates and updates the total price and quantity in the cart.
- 📄 **Multiple Pages**: Uses `react-router-dom` for a seamless multi-page experience.

### 🛠️ Advanced Features

- 📱 **Responsive Design**: Fully responsive for desktop, tablet, and mobile screens.
  - 📲 **Mobile-Specific Enhancements**:
    - 📌 Sticky cart button for easy access.
    - 🍔 Toggleable navigation menu for better usability.
- 🔄 **Custom Hooks**: Efficient and reusable logic using custom hooks.
- 🌐 **Context API**: Centralized state management for shared data across components.
- 💾 **Local Storage**: Persists cart data across sessions for better user experience.
- ✉️ **Fake Email Registration**: Simulates user registration functionality.
- 🧩 **Reusable Components**: Modular and reusable components for a clean codebase.
- 🪟 **Modals**: Helpful modals to guide users through the website.

### 📦 Data Handling

- 📚 **Centralized Text Data**: All website text is stored in a data folder and fetched on page load for easier updates and consistency.
- 💻 **Fake API**: Uses `TanStack React Query` and `axios` for data fetching and caching.

### ❌ Limitations

- The website stops at the checkout process as implementing a complete payment system is outside the scope of this project.

## 🛠️ Tech Stack

### 🌐 Frontend

- **React** with **TypeScript**: For building a robust and type-safe application.
- **TanStack React Query**: For efficient and cached data fetching.
- **React Router DOM**: For client-side routing.
- **Axios**: For API requests.
- **CSS Modules**: For scoped and maintainable styling.

### 🧰 Tools & Workflow

- **ESLint** and **Prettier**: For code quality and formatting.
- **Git** and **GitHub**: For version control and project hosting.

## 🗂️ Project Structure

```
public/
├── assets/             # 📂 Static assets (fonts, icons, images)
│   ├── fonts/          # 🅰️ Fonts used in the project
│   ├── icons/          # 🖼️ Icons used in the project
│   └── images/         # 🌄 Image assets
├── data/               # 📑 Static JSON data

src/
├── components/         # 🧩 Specific components
├── context/            # 🌐 Context providers
├── hooks/              # 🔄 Custom hooks
├── pages/              # 📄 Page components
├── routes/             # 🗺️ Route definitions
├── styles/             # 🎨 Global and component-specific styles
├── types/              # 🔠 TypeScript types
├── utils/              # 🛠️ Utility functions
└── main.tsx            # 🚪 Entry point
```
## 📸 Screenshots

### Homepage
![Desktop: Home page](desktop_homepage.png)

#### 📱Mobile View
![Mobile: Home page](mobile_homepage.png)
*Sticky cart button and toggleable menu on mobile.*

### Products Page
![Desktop: Products page](desktop_productspage.png)
*Add, delete and reset items from cart*

#### 📱Mobile View
![Mobile: Products page](mobile_productspage.png)

### Product Details Page
![Desktop: Product details page](desktop_productdetailspage.png)
*View the details of a product, isolated*

#### 📱Mobile View
![Mobile: Product details page](mobile_productdetailspage.png)

### About Page
![Desktop: About page](desktop_aboutpage.png)

#### 📱Mobile View
![Mobile: About page](mobile_aboutpage.png)

### Contact Page
![Desktop: Contact page](desktop_contactpage.png)

#### 📱Mobile View
![Mobile: Contact page](mobile_contactpage.png)

### Cart Page
![Desktop: Cart page, card layout](desktop_cartpage_cardlayout.png)
![Desktop: Cart page, list layout](desktop_cartpage_listlayout.png)
*Real-time updates for price and quantity in the cart.*

#### 📱Mobile View
![Mobile: Cart page, card layout](mobile_cartpage__cardlayout.png)
![Mobile: Cart page, list layout](mobile_cartpage_listlayout.png)

### Product Search
![Desktop: Product Search](desktop_productsearch.gif)

### Open/Close Menu
![Mobile: Open/Close menu](mobile_openclosemenu.gif)

## 📝 Lessons Learned

This project allowed me to:

- 🤓 Gain hands-on experience with TypeScript in a React project.
- 🌐 Implement state management with Context API.
- ⚡ Use TanStack React Query for effective data fetching and caching.
- 🖌️ Design a responsive UI using CSS and modern layout techniques.
- 🧩 Write reusable and maintainable code by modularizing components and utilities.

## 🚀 Potential for Future Improvements

While this project achieves its core objectives, here are some enhancements I’d like to implement:

- 🛠️ Add a backend for user authentication, payment processing, and order management.
- 🛒 Implement a fully functional checkout process.
- ♿ Enhance accessibility for improved usability.
- 🧪 Add unit and integration tests for robust code quality.

## 📞 Contact

If you have any questions or feedback, feel free to reach out:

- ✉️ **Email**: [birger.e.andresen@gmail.com](mailto\:birger.e.andresen@gmail.com)
- 🐱 **GitHub**: [https://github.com/biandresen](https://github.com/biandresen)
- 💼 **LinkedIn**: [https://www.linkedin.com/in/birger-andresen-75690322b/](https://www.linkedin.com/in/birger-andresen-75690322b/)

---

Thank you for taking the time to review my project! I hope it demonstrates my current skills and potential as a developer. Feedback is always welcome! 🙏