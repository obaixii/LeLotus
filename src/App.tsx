import { Route, Routes } from 'react-router-dom';
import { Footer, Nav } from './Components/index.tsx';
import { About, Home, Treatments } from './Pages/index.tsx';

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-[#f8faf9] font-body text-[#2c3030]">
        <Nav />
        {/* Routes will go here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/treatments" element={<Treatments/>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}