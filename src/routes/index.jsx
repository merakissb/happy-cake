//archivo de rutas, debe contener 2 rutas por ahora, home y contact.
import React from 'react';
import { Routes as AppRoutes, Route} from 'react-router-dom';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </AppRoutes>
  );
}

export default Routes;