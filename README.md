# 🏡 WanderHome - A Full Stack MERN Application

WanderHome is a travel web application where users can browse, create, delete , edit vacation home listings. It includes authentication, image uploads, and review functionality.

## 🚀 Key Features

### 🔐 User Authentication
- Register / Login / Logout functionality using **Passport.js** and **express-session**
- Session-based authentication with flash messages

### 🏠 Listings
- Users can **create**, **view**, **edit**, and **delete** listings
- Each listing contains:
  - Title
  - Description
  - Location (with country)
  - Price
  - Uploaded images
  - Owner information

### 📷 Image Upload (Cloudinary)
- Upload multiple images for each listing
- Images are stored securely using **Cloudinary**
- Handled via **Multer** and **multer-storage-cloudinary**

### 🌍 Map Integration
- Integrated with **Mapbox**
- Displays an interactive map for each listing’s location

### 📝 Reviews
- Authenticated users can add **reviews** with:
  - Rating (1 to 5)
  - Comments
- Only authors can delete their reviews
- Prevents duplicate or spam reviews

### ✅ Validation & Error Handling
- Input validation using **Joi**
- Custom error handler with ExpressError
- Secure handling of invalid requests and redirects

### 📁 Session & Flash Messages
- Session data stored with **connect-mongo**
- Informative flash messages on user actions (login/logout/errors)

---

## 🛠️ Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | EJS (Templating), HTML, CSS, JavaScript |
| Backend    | Node.js, Express.js |
| Database   | MongoDB with Mongoose |
| Auth       | Passport.js, express-session |
| File Upload| Multer, Cloudinary |
| Maps       | Mapbox |
| Validation | Joi |






