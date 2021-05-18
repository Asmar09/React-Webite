import './App.css';
import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import ContactUs from './AppData/ContactUs';
import ExampleData from './AppData/ExampleData';
import FeeStructure from './AppData/FeeStructure';

function App() {
  return (
    <>
    <Header />
    <FeeStructure />
    <ExampleData />
    <ContactUs />

    <Footer />
    </>
  );
}

export default App;
