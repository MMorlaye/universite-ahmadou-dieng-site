import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Apply custom styles to match the design
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }
  .transition-all {
    transition: all 0.3s ease;
  }
  
  :root {
    --primary: 210 100% 20%;
    --primary-light: 210 100% 25%;
    --primary-dark: 210 100% 15%;

    --secondary: 27 78% 52%;
    --secondary-light: 37 90% 51%;
    --secondary-dark: 21 91% 41%;
    
    --neutral-lightest: 0 0% 100%;
    --neutral-light: 210 17% 98%;
    --neutral-medium: 210 14% 93%;
    --neutral-dark: 210 10% 23%;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
