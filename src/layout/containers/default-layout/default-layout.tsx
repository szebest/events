import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Box, CircularProgress } from "@mui/material";

import { Header } from "@/layout/components";

export type DefaultLayoutProps = {
  maxWidth?: string;
};

export function DefaultLayout({ maxWidth = "1920px" }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      <main>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ maxWidth, width: "100%" }} px={4} py={2}>
            <ErrorBoundary
              fallback={<Box>There was an error while loading the page</Box>}
            >
              <Suspense
                fallback={
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                }
              >
                <Outlet />
              </Suspense>
            </ErrorBoundary>
          </Box>
        </Box>
      </main>
    </>
  );
}

export default DefaultLayout;
