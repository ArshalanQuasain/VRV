# RBAC Dashboard Application

A **Role-Based Access Control (RBAC)** dashboard built with **React**, **Redux Toolkit**, and **TailwindCSS**. This application enables administrators to manage users, roles, and permissions with a secure and user-friendly interface.

---

## Features

- **Login System**:
  - Supports different roles: Admin, Moderator, and User.
  - Role-based access to features and functionalities.
  - User authentication using Redux Toolkit's global state management.
  
- **User Management**:
  - Add, edit, and delete users.
  - Assign roles to users.
  - Toggle user activation status.

- **Role Management**:
  - Add and manage roles with custom permissions.

- **Security**:
  - Protected routes for authenticated users.
  - Local state persistence using `redux-persist`.

---

## Technologies Used

- **Frontend**:
  - React
  - Redux Toolkit
  - TailwindCSS
  - React Router DOM
  - React Icons

- **State Management**:
  - Redux Toolkit
  - redux-persist (for state persistence)

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/ArshalanQuasain/VRV.git
cd rbac-dashboard
