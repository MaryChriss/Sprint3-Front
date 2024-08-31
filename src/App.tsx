import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const LazyHome = lazy(() => import("./Pages/Home/Home"));
const LazyEquipe = lazy(() => import('./Pages/Equipe/Equipe'));
const LazyContato = lazy(() => import('./Pages/Contato/Contato'));
const LazyLogin = lazy(() => import("./Pages/Login/Login"))

function App() {
  return (
    <BrowserRouter>
        <Suspense fallback={<>Carregando..</>}>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/equipe" element={<LazyEquipe />} />
            <Route path="/contato" element={<LazyContato />} />
            <Route path="/login" element={<LazyLogin />} />
          </Routes>
        </Suspense>
    </BrowserRouter>
  );
}

export default App;
