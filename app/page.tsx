"use client"
import React from 'react'
import Nav from "./(nicola)/Nav/page"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from "./(nicola)/Footer/page"
import First_section from "./(nicola)/sections/first_section/page"
import Second_section from "./(nicola)/sections/second_section/page"
import Ok from "./(nicola)/ok/page"
const page = () => {
  return (
<BrowserRouter>
<Nav/>
<Ok/>
<Routes>
  <Route path='/'element={<First_section/>}  />
  <Route path='/ok'element={<Ok/>} />
</Routes>
<Footer/>
</BrowserRouter>
  )
}

export default page
