import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { HOME, SIGN_UP } from "./constants/routes";
import Navbar from "./components/Navbar/Navbar";

const HomePage = lazy(()=> import('./pages/Home/Home'))
const SignUpPage = lazy(()=> import('./pages/SignUp/SignUp'))

function App() {


  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Navbar />
      <main>
        <Routes>
          <Route path={HOME} element={<HomePage />} />
          <Route path={SIGN_UP} element={<SignUpPage />} />
        </Routes>
      </main>
    </Suspense>
  );
}

export default App;
