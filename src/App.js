import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Routelayout from './layout/Routelayout';
import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About';
import Contactlayout from './layout/Contactlayout';
import Contactinfo from './components/Contactinfo';
import Contactform from './components/Contactform';
import PageNotFound from './components/PageNotFound';

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Routelayout />}>
                <Route index element={<Home />}></Route>
                <Route path="products" element={<Products />}></Route>
                <Route path="about" element={<About />}></Route>
                {/* <Route path="contact" element={<Contact />}></Route> */}
                <Route path="contact" element={<Contactlayout />}>
                    {/* <Route index element={<Contactinfo />}></Route> */}
                    <Route path="contactinfo" element={<Contactinfo />}></Route>
                    <Route path="contactform" element={<Contactform />}></Route>
                </Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Route>
        )
    );

    return (
        <RouterProvider router={router} />
    )
}

export default App