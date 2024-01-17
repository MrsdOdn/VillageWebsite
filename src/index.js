import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import Tanitim from "./pages/Tanitim";
import Galeri from "./pages/Galeri";
import ErrorPage from "./pages/ErrorPage";
import Isletmeler from "./pages/Isletmeler";
import Ulasim from "./pages/Ulasim";
import YerelPazar from "./pages/YerelPazar";
import About from "./pages/About";
import KullanimKosullari from "./pages/KullanimKosullari";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Layout from "./components/Layout";
import UrunEkle from "./pages/YerelPazarPages/UrunEkle";
import Baharatlar from "./pages/YerelPazarPages/Baharatlar";
import BaklagilSatis from "./pages/YerelPazarPages/BaklagilSatis";
import Elisleri from "./pages/YerelPazarPages/Elisleri";
import HayvanSatis from "./pages/YerelPazarPages/HayvanSatis";
import IkinciEl from "./pages/YerelPazarPages/IkinciEl";
import InsaatMalzemeleri from "./pages/YerelPazarPages/InsaatMalzemeleri";
import MeyveSebze from "./pages/YerelPazarPages/MeyveSebze";
import MobilyaSatis from "./pages/YerelPazarPages/MobilyaSatis";
import SutVeSutUrunleri from "./pages/YerelPazarPages/SutVeSutUrunleri";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationLayout from "./components/NavigationLayout";
import AddMinibus from "./pages/UlasimPages/AddMinibus";
import AddSharedCar from "./pages/UlasimPages/AddSharedCar";
import SharedCars from "./pages/UlasimPages/SharedCars";
import Minibus from "./pages/UlasimPages/Minibus";
import BazaarLayout from "./components/BazaarLayout";
import UlasimLayout from "./components/UlasimLayout";
import AddNews from "./pages/HaberPages/AddNews";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/haberekle" element={<AddNews />} />
          <Route path="/tanitim" element={<Tanitim />} />
          <Route path="/isletmeler" element={<Isletmeler />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/about" element={<About />} />
          <Route path="/kullanımkosulları" element={<KullanimKosullari />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<NavigationLayout />}>
            <Route path="/ulasim" element={<UlasimLayout />}>
              <Route path="/ulasim" element={<Ulasim />} />
              <Route path="/ulasim/busseferekle" element={<AddMinibus />} />
              <Route path="/ulasim/arabaekle" element={<AddSharedCar />} />
              <Route path="/ulasim/minibus" element={<Minibus />} />
              <Route path="/ulasim/paylasimliaraba" element={<SharedCars />} />
            </Route>
            <Route path="/yerelpazar" element={<BazaarLayout />}>
              <Route path="/yerelpazar" element={<YerelPazar />} />
              <Route path="/yerelpazar/pazarurunekle" element={<UrunEkle />} />
              <Route path="/yerelpazar/baharatlar" element={<Baharatlar />} />
              <Route
                path="/yerelpazar/baklagiller"
                element={<BaklagilSatis />}
              />
              <Route path="/yerelpazar/elisleri" element={<Elisleri />} />
              <Route path="/yerelpazar/hayvanlar" element={<HayvanSatis />} />
              <Route path="/yerelpazar/ikinciel" element={<IkinciEl />} />
              <Route
                path="/yerelpazar/insaatmalzemeleri"
                element={<InsaatMalzemeleri />}
              />
              <Route path="/yerelpazar/meyvesebze" element={<MeyveSebze />} />
              <Route path="/yerelpazar/mobilyalar" element={<MobilyaSatis />} />
              <Route
                path="/yerelpazar/suturunleri"
                element={<SutVeSutUrunleri />}
              />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
