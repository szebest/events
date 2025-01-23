import { Navigate } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// layouts
import { DefaultLayout } from "./layout/containers";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/events" element={<DefaultLayout />}>
          <Route path="" element={<div>list</div>}></Route>
          <Route path=":eventId" element={<div>event</div>}></Route>
          <Route path="add" element={<div>add</div>}></Route>
        </Route>

        <Route path="*" element={<Navigate to="/events"></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
