import { Route, Routes } from 'react-router-dom';
import Breadcrumbs from './components/layouts/breadcrumbs.js';
import Footer from './components/layouts/footer';
import Header from './components/layouts/header';
import Hero from './components/layouts/hero';
import Sidebar from './components/layouts/sidebar';
import Home from './components/pages/home';
import Shop from './components/pages/shop';
import AboutUs from './components/pages/aboutus';
import Category from './components/pages/category';

function App() {
  return (
    <div className="App">
      <Header />
        <Hero/>
        <Breadcrumbs/>
        <section className="product spad">
          <div className="container">
          <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/shop' element={<Shop/>} />
                <Route path='/category/:id' element={<Category/>} />
                <Route path='/about-us' element={<AboutUs/>} />
              </Routes>
            </div>
          </section>
        <Footer/>
    </div>
  );
}

export default App;
