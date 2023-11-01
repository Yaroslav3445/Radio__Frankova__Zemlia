import React from 'react'
import Header from './components/Header'
import MainPage from './page/MainPage'
import Footer from './components/Footer'
import PageInfo from './page/Page-info'
import PageCommand from './page/Page-Command'
const App = () => {
  return (
    <>
      <Header />
      <PageCommand/>
      <Footer />
    </>
  )
}

export default App;
