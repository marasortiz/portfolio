import React from 'react'

import Footer from '../components/Footer/Footer_es'
import Header from '../components/Header/Header_es'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
