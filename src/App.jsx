import React, { useEffect } from 'react'
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Men from './pages/Men';
import Women from './pages/Women';
import Contact from './pages/Contact';
import { Saved } from './pages/Saved';
import Profile from './components/Profile';
import Detail from './pages/Detail/Detail';
import { getAllProductsData } from './api/request';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsData('https://saleapi-lzns.onrender.com/products'));
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='men' element={<Men />} />
        <Route path='women' element={<Women />} />
        <Route path='saved' element={<Saved />} />
        <Route path='contact' element={<Contact />} />
        <Route path='profile' element={<Profile />} />
        <Route path='/detail/:slug' element={<Detail />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  )
}

export default App