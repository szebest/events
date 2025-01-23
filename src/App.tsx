import { lazy } from "react";
import { Provider } from "react-redux";
import { Navigate } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import store from "@/shared/store";

// layouts
import { DefaultLayout } from "@/layout/containers";

const EventsListPage = lazy(() =>
  import("@/features/events").then((module) => ({
    default: module.EventsListPage,
  }))
);

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/events" element={<DefaultLayout />}>
            <Route path="" element={<EventsListPage />}></Route>
            <Route path=":eventId" element={<div>event</div>}></Route>
            <Route path="add" element={<div>add</div>}></Route>
          </Route>

          <Route path="*" element={<Navigate to="/events"></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
