# Quantum Education Website

An interactive, full-stack platform for learning the fundamentals of quantum computing.

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Running the App](#running-the-app)  
  - [Backend (Server)](#backend-server)  
  - [Frontend](#frontend)  
- [Project Structure](#project-structure)  

## About

This repository houses both the frontend and backend code for a quantum-education website. Learners can explore interactive modules on qubits, quantum gates, superposition, entanglement, and circuit simulations.

## Features

- **API-Driven Content** – Fetch lesson data from a Node/Express backend
- **Interactive Graph** - Hover over to learn more about data points
- **Responsive Design** – Accessible on desktop and mobile  

## Tech Stack

- **Languages:** TypeScript, JavaScript, CSS  
- **Frontend:** React (or Next.js)  
- **Backend:** Node.js with Express  
- **Build Tools:** npm / Yarn

## Prerequisites

- [Node.js](https://nodejs.org/) (>=14.x)  
- npm (comes with Node.js) or Yarn  

## Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/dennisephraim/quantum_education_website.git
   cd quantum_education_website
2. Install dependencies for both services
   ```bash
   # From the root directory
   npm run install:all

   # Or install Individaully
   cd server
   npm install

   cd ../frontend
   npm install

## Running the App 
- Backend (Server)
  ```bash
  cd server
  npm run dev
- Frontend
  ```bash
  cd frontend
  npm run dev

## Project Structure
quantum_education_website/
├── frontend/           # React-based SPA for interactive lessons
│   ├── public/         # Static assets
│   ├── src/
│   │   ├── app/        # Pages / CSS/ Tailwind / global styles 
│   │   ├── components/ # UI components (CustomSection, DotPlot etc)
│   │   ├── context/    # Theme and Navbar context
│   │   ├── types/      # Typescript custom data types
│   │   ├── context/    # Theme and Navbar context
│   │   └── utils/      # helper functions declared here
│   └── package.json
├── server/             # Node.js + Express API
│   ├── app             # main server file
│   ├── data.json       # json file to store data
│   └── package.json
├── README.md           # ← You are here
