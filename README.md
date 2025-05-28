# Online Gamblers Registration Project

This project is a React application for bank registration. It allows users to fill out a registration form and provides feedback through popups based on the submission results.

## Project Structure

```
online_gamblers
├── public
│   └── index.html         # Main HTML file serving as the entry point for the React application
├── src
│   ├── components
│   │   ├── RegistrationForm.jsx  # Component for handling the registration form
│   │   └── Popup.jsx              # Component for displaying success or error messages
│   ├── App.jsx                   # Main application component
│   ├── index.js                  # Entry point for the React application
│   └── styles.css                # CSS styles for the application
├── package.json                  # Configuration file for npm
└── README.md                     # Documentation for the project
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd online_gamblers
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

   This will start the development server and open the application in your default web browser.

## Usage Guidelines

- Fill out the registration form with the required information.
- If the ID number (KTP) ends with '9999', an error popup will be displayed.
- If the registration is successful, a success popup will appear.
- You can close the popups by clicking the close button or clicking outside the popup area.

## Technologies Used

- React
- CSS
- JavaScript

## License

This project is licensed under the MIT License.