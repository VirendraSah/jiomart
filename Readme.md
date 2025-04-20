# JioMart-Inspired eCommerce Front-End Clone

This project is a fully responsive eCommerce web UI built with HTML, CSS, JavaScript, and Bootstrap. It mimics key front-end functionality of JioMart, such as dynamic carousels, responsive headers, and interactive modals/popovers for shopping and delivery location.

## 🚀 Features

- 🛒 Multi-level header navigation with categories and subcategories
- 📦 Product carousels using [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/)
- 📍 Location detection via:
  - Manual pincode input (with API verification)
  - Auto-location via Geolocation + reverse geocoding API
- 📝 Dynamic shopping list with expandable textarea and clear button
- 📱 Fully responsive with Bootstrap 5 and custom media queries
- 🎨 Custom styling using `styles.css` and responsive rules via `media.css`

## 📁 Project Structure

```bash
📦 project-root
├── index.html              # Main HTML file
├── app.js                  # JavaScript for carousels, modals, API calls, etc.
├── style/
│   ├── styles.css          # Main custom styles
│   └── media.css           # Responsive media queries
├── images/                 # All used images (e.g., icons, product visuals)

🧰 Tech Stack
HTML5

CSS3

JavaScript (ES6)

Bootstrap 5

Owl Carousel 2

Font Awesome

External APIs:

India Postal Pincode API (https://api.postalpincode.in)

Maps.co Reverse Geocoding API

📦 Installation
Clone this repository or download the zip.

Make sure to maintain the directory structure (style/, images/, etc.)

Open index.html in your browser.

No build process or local server required.

🌍 APIs Used
Pincode Lookup:
https://api.postalpincode.in/pincode/<pincode>

Reverse Geocoding (Maps.co):
https://geocode.maps.co/reverse?lat=<lat>&lon=<lon>&api_key=...

Replace the API key if necessary.

📄 License
This project is for educational/demo purposes only. All trademarks and visuals belong to their respective owners.git sta