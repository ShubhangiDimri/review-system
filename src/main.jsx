// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './App.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import TaskManager from './task-manager/App.jsx'
// import './task-manager/App.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <TaskManager />
//   </StrictMode>
// )
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './reviewsystem/App.jsx'; // <-- Pointing to your Review System
import './reviewsystem/style.css';       // <-- Import its CSS

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);


