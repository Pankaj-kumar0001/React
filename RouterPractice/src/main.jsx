import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import Layout from './Layout';
import Home from './components/Home/Home';
import About from './Components/About/About';
import Contact from './Contact/Contact';
import Permanent from './Contact/Permanent';
import Temporary from './Contact/Temporary';
import Products from './Components/Products/Products';
import Productdetails from './Components/Products/Productdetails';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} /> {/* renders at "/" */}
      <Route path='products' element={<Products />} >
         <Route path=":id" element={<Productdetails />}/> 
          
      </Route>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} >
      <Route path="Permanent" element={<Permanent />}/> 
      <Route path="Temporary" element={<Temporary />}/> 

      </Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
