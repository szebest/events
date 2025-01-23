import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

export type DefaultLayoutProps = {
  maxWidth?: string;
};

export function DefaultLayout({ maxWidth = "1920px" }: DefaultLayoutProps) {
  return (
    <>
      {/* TODO: Add header */}
      <main>
        <div>
          <div style={{ maxWidth }}>
            <ErrorBoundary
              fallback={<div>There was an error while loading the page</div>}
            >
              <Suspense
                fallback={<div style={{ width: "100%" }}>Loading...</div>}
              >
                <Outlet />
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </main>
    </>
  );
}

export default DefaultLayout;
