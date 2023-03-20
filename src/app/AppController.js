import React, { lazy, Suspense } from "react";
import useAuth from "../atoms/hooks/useAuth";
import { Routes, Route } from "react-router-dom";

const PreLogin = lazy(() => import("../preLogin/PreLogin"));
// const PostLogin = lazy(() => import("components/postLogin/PostLogin"));
// const JoinMeetingContainer = lazy(() =>
//   import("components/meeting/join/JoinMeetingContainer")
// );
// const SurveyPage = lazy(() => import("components/surveyPage/SurveyPage"));

const App = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Suspense fallback={<div>Loading</div>}>
      {isLoggedIn ? (
        <PostLogin />
      ) : (
        <Routes>
          <Route path="*" element={<PreLogin />} />
        </Routes>
      )}
    </Suspense>
  );
};

export default App;
