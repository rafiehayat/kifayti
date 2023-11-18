import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import Contact from './Contact'
import Error from './Error'
import Shop from './Shop'
import SingleProduct from './SingleProduct'


import AdminHome from './Admin/AdminHome'


import Maincategory from './Admin/Maincategory/Maincategory'
import CreateMaincategory from './Admin/Maincategory/CreateMaincategory'
import UpdateMaincategory from './Admin/Maincategory/UpdateMaincategory'

import CreateSubcategory from './Admin/Subcategory/CreateSubcategory'
import UpdateSubcategory from './Admin/Subcategory/UpdateSubcategory'
import Subcategory from './Admin/Subcategory/Subcategory'

import Brand from './Admin/Brand/Brand'
import CreateBrand from './Admin/Brand/CreateBrand'
import UpdateBrand from './Admin/Brand/UpdateBrand'

import Product from './Admin/Product/Product'
import CreateProduct from './Admin/Product/CreateProduct'
import UpdateProduct from './Admin/Product/UpdateProduct'

import User from './Admin/User/User'


import Testimonial from './Admin/Testimonial/Testimonial'
import CreateTestimonial from './Admin/Testimonial/CreateTestimonial'
import UpdateTestimonial from './Admin/Testimonial/UpdateTestimonial'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import UpdateProfile from './UpdateProfile'
import Cart from './Cart'
import Checkout from './Checkout'
import Confirmation from './Confirmation'
import Newsletter from './Admin/Newsletter/Newsletter'
import ContactUs from './Admin/ContactUs/ContactUs'
import ShowContact from './Admin/ContactUs/ShowContact'
import AdminCheckout from './Admin/Checkout/AdminCheckout'
import ShowCheckout from './Admin/Checkout/ShowCheckout'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        {/* <Route path='/profile' element={<Profile/>}/>
        <Route path='/update-profile' element={<UpdateProfile/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/confirmation' element={<Confirmation/>}/>

        <Route path='/admin' element={localStorage.getItem("login")?localStorage.getItem("role")===<AdminHome/>:<Login/>}/>

        <Route path='/admin/maincategory' element={localStorage.getItem("login")?localStorage.getItem("role")===<Maincategory/>:<Login/>}/>
        <Route path='/admin/maincategory/create' element={localStorage.getItem("login")?localStorage.getItem("role")===<CreateMaincategory/>:<Login/>}/>
        <Route path='/admin/maincategory/update/:id' element={localStorage.getItem("login")?localStorage.getItem("role")===<UpdateMaincategory/>:<Login/>}/>

        <Route path='/admin/subcategory' element={localStorage.getItem("login")?localStorage.getItem("role")===<Subcategory/>:<Login/>}/>
        <Route path='/admin/subcategory/create' element={localStorage.getItem("login")?localStorage.getItem("role")===<CreateSubcategory/>:<Login/>}/>
        <Route path='/admin/subcategory/update/:id' element={localStorage.getItem("login")?localStorage.getItem("role")===<UpdateSubcategory/>:<Login/>}/>

        <Route path='/admin/brand' element={localStorage.getItem("login")?localStorage.getItem("role")===<Brand/>:<Login/>}/>
        <Route path='/admin/brand/create' element={localStorage.getItem("login")?localStorage.getItem("role")===<CreateBrand/>:<Login/>}/>
        <Route path='/admin/brand/update/:id' element={localStorage.getItem("login")?localStorage.getItem("role")===<UpdateBrand/>:<Login/>}/>

        <Route path='/admin/product' element={localStorage.getItem("login")?localStorage.getItem("role")===<Product/>:<Login/>}/>
        <Route path='/admin/product/create' element={localStorage.getItem("login")?localStorage.getItem("role")===<CreateProduct/>:<Login/>}/>
        <Route path='/admin/product/update/:id' element={localStorage.getItem("login")?localStorage.getItem("role")===<UpdateProduct/>:<Login/>}/>

        <Route path='/admin/users' element={localStorage.getItem("login")?localStorage.getItem("role")===<User/>:<Login/>}/>
        
        <Route path='/admin/testimonial' element={localStorage.getItem("login")?localStorage.getItem("role")===<Testimonial/>:<Login/>} />
            <Route path='/admin/testimonial/create' element={localStorage.getItem("login")?localStorage.getItem("role")===<CreateTestimonial/>:<Login/>} />
            <Route path='/admin/testimonial/update/:id' element={localStorage.getItem("login")?localStorage.getItem("role")===<UpdateTestimonial/>:<Login/>} />

        <Route path='/admin/newsletter' element={localStorage.getItem("login")?localStorage.getItem("role")===<Newsletter/>:<Login/>} />

        <Route path='/admin/contactus' element={localStorage.getItem("login")?localStorage.getItem("role")===<ContactUs/>:<Login/>} />
        <Route path='/admin/contactus/show/:id' element={localStorage.getItem("login")?localStorage.getItem("role")===<ShowContact/>:<Login/>} />

        <Route path='/admin/checkout' element={localStorage.getItem("login")?localStorage.getItem("role")===<AdminCheckout/>:<Login/>} />
        <Route path='/admin/checkout/show/:id' element={localStorage.getItem("login")?localStorage.getItem("role")===<ShowCheckout/>:<Login/>} /> */}


        <Route path='/profile' element={localStorage.getItem("login") ? <Profile /> : <Login />} />
        <Route path='/update-profile' element={localStorage.getItem("login") ? <UpdateProfile /> : <Login />} />
        <Route path='/cart' element={localStorage.getItem("login") ? <Cart /> : <Login />} />
        <Route path='/checkout' element={localStorage.getItem("login") ? <Checkout /> : <Login />} />
        <Route path='/confirmation' element={localStorage.getItem("login") ? <Confirmation /> : <Login />} />

        <Route path='/admin' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminHome /> : <Profile /> : <Login />} />

        <Route path='/admin/maincategory' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <Maincategory /> : <Profile /> : <Login />} />
        <Route path='/admin/maincategory/create' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <CreateMaincategory /> : <Profile /> : <Login />} />
        <Route path='/admin/maincategory/update/:id' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <UpdateMaincategory /> : <Profile /> : <Login />} />

        <Route path='/admin/subcategory' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <Subcategory /> : <Profile /> : <Login />} />
        <Route path='/admin/subcategory/create' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <CreateSubcategory /> : <Profile /> : <Login />} />
        <Route path='/admin/subcategory/update/:id' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <UpdateSubcategory /> : <Profile /> : <Login />} />

        <Route path='/admin/brand' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <Brand /> : <Profile /> : <Login />} />
        <Route path='/admin/brand/create' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <CreateBrand /> : <Profile /> : <Login />} />
        <Route path='/admin/brand/update/:id' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <UpdateBrand /> : <Profile /> : <Login />} />

        <Route path='/admin/product' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <Product /> : <Profile /> : <Login />} />
        <Route path='/admin/product/create' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <CreateProduct /> : <Profile /> : <Login />} />
        <Route path='/admin/product/update/:id' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <UpdateProduct /> : <Profile /> : <Login />} />

        <Route path='/admin/users' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <User /> : <Profile /> : <Login />} />

        <Route path='/admin/testimonial' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <Testimonial /> : <Profile /> : <Login />} />
        <Route path='/admin/testimonial/create' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <CreateTestimonial /> : <Profile /> : <Login />} />
        <Route path='/admin/testimonial/update/:id' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <UpdateTestimonial /> : <Profile /> : <Login />} />

        <Route path='/admin/newsletter' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <Newsletter /> : <Profile /> : <Login />} />

        <Route path='/admin/contactus' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <ContactUs /> : <Profile /> : <Login />} />
        <Route path='/admin/contactus/show/:id' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <ShowContact /> : <Profile /> : <Login />} />

        <Route path='/admin/checkout' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <AdminCheckout /> : <Profile /> : <Login />} />
        <Route path='/admin/checkout/show/:id' element={localStorage.getItem("login") ? localStorage.getItem("role") === "Admin" ? <ShowCheckout /> : <Profile /> : <Login />} />


        <Route path='/*' element={<Error />} />



      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
