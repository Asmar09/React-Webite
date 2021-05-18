import './App.css';
import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import ContactUs from './AppData/ContactUs';
import ExampleData from './AppData/ExampleData';
import FeeStructure from './AppData/FeeStructure';
import WorksSteps from './AppData/WorksSteps';
import Miigation from './AppData/Miigation';

function App() {
  return (
    <>
    <Header />
    <Miigation />
    <WorksSteps />
    <FeeStructure />
    <ExampleData />
    <ContactUs />
    <Footer />
    </>
  );
}

export default App;
