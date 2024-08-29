import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { lazy, Suspense } from "react";

const LazyHome = lazy(() => import("./Pages/Home/Home"));
const LazyEquipe = lazy(() => import('./Pages/Equipe/Equipe'));
const LazyContato = lazy(() => import('./Pages/Contato/Contato'));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<>Carregando..</>}>
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/equipe" element={<LazyEquipe />} />
            <Route path="/contato" element={<LazyContato />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
