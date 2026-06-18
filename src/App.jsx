import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BuilderPage from "./pages/BuilderPage";
import PreviewPage from "./pages/PreviewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/builder"
          element={<BuilderPage />}
        />

        <Route
          path="/preview"
          element={<PreviewPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
