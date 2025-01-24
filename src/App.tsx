import { lazy } from "react";
import { Provider } from "react-redux";
import { Navigate } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { pl } from "date-fns/locale";

import store from "@/shared/store";

// layouts and containers
import { DefaultLayout } from "@/layout/containers";
import { NumberParamContainer } from "./shared/components";

// lazy loaded pages
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

const AddEventPage = lazy(() =>
  import("@/features/events").then((module) => ({
    default: module.AddEventPage,
  }))
);

export function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={pl}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<DefaultLayout />}>
              <Route path="" element={<EventsListPage />}></Route>
              <Route
                path=":eventId"
                element={
                  <NumberParamContainer paramName="eventId">
                    <EventsDetailsPage />
                  </NumberParamContainer>
                }
              ></Route>
              <Route path="add" element={<AddEventPage />}></Route>
            </Route>

            <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </LocalizationProvider>
  );
}

export default App;
