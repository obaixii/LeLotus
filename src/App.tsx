import { Route, Routes } from 'react-router-dom';
import { Footer, Nav } from './Components/index.tsx';
import { About, BeforeAfter, Booking, Doctors, Home, PrivacyPolicy, Treatments } from './Pages/index.tsx';

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-light-bg font-body text-dark-grey">
        <Nav />
        {/* Routes will go here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/before-after" element={<BeforeAfter />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}