# Booking Website

[Booking web](https://bookings-app-client.vercel.app/) is a single-page application that allows users to login and book cabins. The website includes a variety of features such as user authentication, profile management, payment processing, email notifications, and more.

This Booking web is a client for [Booking API](https://github.com/BCIamLong/booking-api)

### Table of contents
- [Features](#feature)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Deployment](#deployment)

### Features
- User authentication and authorization (Login, Register, 2FA)
- Profile Management (Upload Image, Update Name,Email, Password)
- Settings Management (Edit Email, Edit Password, Deactivate Account)
- Dark Mode
- Responsive Design
- Payment Processing
- Email Notifications
- Form Handling with React Hook Form
- Animations with Framer Motion
- Notifications with React Toastify
- Errors handler with React Error Boundary

### Tech Stack
- Frontend: React, TypeScript
- Styling: Tailwind CSS
- State Management: React Query
- Form Handling: React Hook Form
- Animations: Framer Motion
- Routing and Navigation: React Router
- Errors handler: React Error Boundary
- Notifications: React Toastify
- Deployment: Vercel
- Version Control: Git

### Installation

#### Prerequisites
- Node.js
- npm or yarn (in this project i used yarn)
- Vercel accountount
#### Steps
1, Clone the repository
```bash
git clone https://github.com/BCIamLong/bookings-app-client.git
cd bookings-app-client
```
2, Install dependencies
```bash
yarn install
```
3, Install backend:

Go to this [repo](https://github.com/BCIamLong/booking-api) to install and set up the booking API for backend

If you already have backend then just use it

4, Set up environment variables

Go to the config folder and go through the config files and change the environment variables for your project

5, Run the application

Notice: you need to start API server and then after than run client
```bash
yarn run dev
```


### Deployment
The project is deployed on Vercel. Follow these steps to deploy your own instance:

- Create a Vercel account and set up a new project.
- Connect your GitHub repository containing the booking website project.
- Set up CI/CD commands, environment variables
- Deploy the project.
