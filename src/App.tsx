import { lazy } from "react";
import { Provider } from "react-redux";
import { Navigate } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import store from "@/shared/store";

// layouts
import { DefaultLayout } from "@/layout/containers";
import { NumberParamContainer } from "./shared/components";

const EventsListPage = lazy(() =>
  import("@/features/events").then((module) => ({
    default: module.EventsListPage,
  }))
);

const EventsDetailsPage = lazy(() =>
  import("@/features/events").then((module) => ({
    default: module.EventsDetailsPage,
  }))
);

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/events" element={<DefaultLayout />}>
            <Route path="" element={<EventsListPage />}></Route>
            <Route
              path=":eventId"
              element={
                <NumberParamContainer paramName="eventId">
                  <EventsDetailsPage />
                </NumberParamContainer>
              }
            ></Route>
            <Route path="add" element={<div>add</div>}></Route>
          </Route>

          <Route path="*" element={<Navigate to="/events"></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
