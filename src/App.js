import './App.css';
import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import ContactUs from './AppData/ContactUs';
import ExampleData from './AppData/ExampleData';

function App() {
  return (
    <>
    <Header />
    <h1>Data Here</h1>
    <h1>Data Here</h1>
    <h1>Data Here</h1>
    <ExampleData />
    <ContactUs />

    <Footer />
    </>
  );
}

export default App;
