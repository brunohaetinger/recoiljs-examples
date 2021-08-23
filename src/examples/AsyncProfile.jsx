import ErrorBoundary from "../components/ErrorBoundary";

import { CurrentProfile } from "../components/AsyncProfile/CurrentProfile";
import { Suspense } from "react";

export const AsyncProfile = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <CurrentProfile />
      </Suspense>
    </ErrorBoundary>
  );
};
