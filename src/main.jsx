import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";

import LayoutMain from "./layouts/LayoutMain";
import LayoutPDFMake from "./layouts/LayoutPDFMake";

import ErrorPage from "./pages/ErrorPage";

import Home from "./pages/Home";
import About from "./pages/About";

import PDF_Into from "./pages/PDFMake/PDF_Into";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route path="" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Route>
      <Route path="/pdfmake" element={<LayoutPDFMake />}>
        <Route path="" element={<Navigate to="into" />} />
        <Route path="into" element={<PDF_Into />} />
      </Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  </BrowserRouter>
);
