# TravelSmart

## Project Overview
**TravelSmart** is a modern travel website built using the **ReactJS** library and styled with **Tailwind CSS**. It offers users a smooth and intuitive browsing experience as they explore various travel-related services. Key pages include **Home**, **About**, **Services** (Destinations, Accommodations, and Transport), **Contact Us**, **Feedback**, and a **Sitemap**.

The website integrates a dynamic image gallery to showcase travel destinations, while **Lightbox2**, a **JavaScript plugin**, enhances the viewing experience. All form data, including user inquiries and feedback, is stored using **local storage** and **session storage** to ensure data persistence and an improved user experience. 

All data related to destinations, transport, and accommodations is dynamically fetched from a JSON file, allowing for easy updates and scalability.

### Benefits of Using React for a Single-Page Application (SPA)
- **Fast and Responsive User Experience**: React’s virtual DOM allows for efficient updates and rendering of components, resulting in a smoother experience without full page reloads.
  
- **Component-Based Architecture**: The modular nature of React promotes reusability and maintainability, making it easy to develop and scale the application.

- **State Management**: React's hooks and state management capabilities simplify handling dynamic content across the SPA.

- **Seamless Navigation**: With React Router, users can navigate between different views quickly without losing context, enhancing overall usability.

- **Performance Optimization**: Features like code splitting and lazy loading improve loading times and application performance.

- **Rich Ecosystem and Community Support**: A vast array of libraries and tools, coupled with a large community, provide extensive resources for development and troubleshooting.

- **Enhanced User Interaction**: React allows for the creation of interactive user interfaces that respond instantly to user inputs, contributing to a more engaging experience.

## Features & Pages Overview
- **Home Page**: Displays a general overview of the website and includes a dynamic gallery showcasing various travel destinations.
  
- **About Page**: Provides details about the TravelSmart project and its mission.
  
- **Services Section**:
  - **Destinations**: Lists travel destinations dynamically fetched from a JSON file, with filtering options to refine search results based on user preferences.
  - **Accommodations**: Provides information on available lodging options dynamically loaded from a JSON file, also with filtering capabilities.
  - **Transport**: Offers transportation options, with data retrieved from a JSON file and filtering tools to help users narrow down their choices.

- **Contact Us Page**: Allows users to submit inquiries. The data is saved in local storage for future reference.
  
- **Feedback Page**: Collects user feedback to help improve services. Feedback data is stored using session storage for seamless interactions.
  
- **Sitemap**: Lists all pages and subpages for easy navigation across the website.

## Technologies Used
- **ReactJS (JavaScript Library)**: Used for building the user interface with reusable components and efficient state management.
  
- **Tailwind CSS (CSS Framework)**: A utility-first framework used for building responsive and customizable user interfaces quickly and effectively.
  
- **Lightbox2 (JavaScript Plugin)**: A plugin used to display images in an overlay mode, enhancing the gallery experience for users viewing travel destinations.
  
- **Local & Session Storage (Web API)**: Enables persistence of form data across sessions, improving user experience by saving inquiries, feedback, and other data locally.

- **JSON File**: Used to dynamically fetch data for destinations, accommodations, and transport options, allowing for easy updates and scalability.
