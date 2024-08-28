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
        <Suspense fallback={<><iframe src="https://giphy.com/embed/17mNCcKU1mJlrbXodo" width="480" height="480"></iframe></>}>
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
