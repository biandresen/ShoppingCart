# 🛒 E-commerce Website

Welcome to my e-commerce website project! This project is part of [The Odin Project](https://www.theodinproject.com), a full-stack web development course, and serves as a demonstration of my skills in building a modern web application using React, TypeScript, and other popular libraries.

🚀 **Live server:** [https://shopping-cart-onb6ibnls-biandresens-projects.vercel.app/](https://shopping-cart-onb6ibnls-biandresens-projects.vercel.app/)

## 💻 Preview
![desktop_homepagescroll](https://github.com/user-attachments/assets/c2084324-475a-4294-b72b-5f6ed0a5358a)

## 📝Planning
Planned with Figma.
![figma_design](https://github.com/user-attachments/assets/00ebd83a-d88f-420c-8298-6b30661b7fbf)

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
## 📝 Lessons Learned

This project allowed me to:

- 🤓 Gain hands-on experience with TypeScript in a React project.
- 🌐 Implement state management with Context API.
- ⚡ Use TanStack React Query for effective data fetching and caching.
- 🖌️ Design a responsive UI using CSS and modern layout techniques.
- 🧩 Write reusable and maintainable code by modularizing components and utilities.

## 🚀 Potential for Future Improvements

While this project achieves its core objectives, here are some enhancements I’d consider implementing:

- 🛠️ Add a backend for user authentication, payment processing, and order management.
- 🛒 Implement a fully functional checkout process.
- ♿ Enhance accessibility for improved usability.
- ⚡ Enhance performance and SEO
- 🧪 Add unit and integration tests for robust code quality.

## 📞 Contact

If you have any questions or feedback, feel free to reach out:

- ✉️ **Email**: [birger.e.andresen@gmail.com](mailto\:birger.e.andresen@gmail.com)
- 🐱 **GitHub**: [https://github.com/biandresen](https://github.com/biandresen)
- 💼 **LinkedIn**: [https://www.linkedin.com/in/birger-andresen-75690322b/](https://www.linkedin.com/in/birger-andresen-75690322b/)

---
## 🙏Thank You

Thank you for taking the time to review my project! I hope it demonstrates my current skills and potential as a developer. Feedback is always welcome!

## 📸 Screenshots

### Product Search
![desktop_productsearch](https://github.com/user-attachments/assets/eb8127ba-d860-439c-88b1-51e96f41ce83)

### Open/Close Menu
![mobile_openclosemenu](https://github.com/user-attachments/assets/4d577ffb-4702-4d06-9a80-964058b073ae)

### Homepage
![desktop_homepage](https://github.com/user-attachments/assets/da5e91e7-c988-4742-adba-acda69a93bce)

#### 📱Mobile View
![mobile_homepage](https://github.com/user-attachments/assets/03742c4a-9f42-4f69-acf1-575a061bfdf9)
*Sticky cart button and toggleable menu on mobile.*

### Products Page
![desktop_productspage](https://github.com/user-attachments/assets/54812ace-f420-44d1-aed5-622858d52fbc)
*Add, delete and reset items from cart*

#### 📱Mobile View
![mobile_productspage](https://github.com/user-attachments/assets/132d27c8-7b74-41d8-8dae-0837b82dbb74)

### Product Details Page
![desktop_productdetailspage](https://github.com/user-attachments/assets/f5185d71-55b2-49b8-9abd-b72c41450c5c)
*View the details of a product, isolated*

#### 📱Mobile View
![mobile_productdetailspage](https://github.com/user-attachments/assets/6689db93-74c9-40cc-92ab-ae423397ddf2)

### About Page
![desktop_aboutpage](https://github.com/user-attachments/assets/dc9fa164-9504-487f-9602-738216c7ce74)

#### 📱Mobile View
![mobile_aboutpage](https://github.com/user-attachments/assets/f7a763a8-2da5-4cfb-b08b-842f3270068e)

### Contact Page
![desktop_contactpage](https://github.com/user-attachments/assets/3ae605ae-3d3f-4cbc-bd0c-424e4a731878)

#### 📱Mobile View
![mobile_contactpage](https://github.com/user-attachments/assets/ed26983b-cf09-4bc8-a047-e4e3b6a6400e)

### Cart Page
![desktop_cartpage_cardlayout](https://github.com/user-attachments/assets/104346de-d8d5-4ec9-9b04-8e60a2db4f85)
####
![desktop_cartpage_listlayout](https://github.com/user-attachments/assets/5c72c775-3ed8-4b77-8ced-0feea21c7077)
*Real-time updates for price and quantity in the cart.*

#### 📱Mobile View
![mobile_cartpage__cardlayout](https://github.com/user-attachments/assets/7728b9b9-08fb-45c2-bc55-35ebed314830)
####
![mobile_cartpage_listlayout](https://github.com/user-attachments/assets/ac7c6f13-7c99-4570-bf57-333b9c2c9797)
