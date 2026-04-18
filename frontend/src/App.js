import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import ReckonSite from "@/components/ReckonSite";

function App() {
  return (
    <div className="App rc-selection">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReckonSite />} />
          <Route path="*" element={<ReckonSite />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
