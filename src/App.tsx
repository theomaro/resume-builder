import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
  Outlet,
} from "react-router-dom";

// Layout
import Header from "./components/ui/Header";

// Pages
import Home from "./pages/Home";
import ResumeBuilder from "./pages/ResumeBuilder";
import Templates from "./pages/Templates";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn.tsx";

// Step Navigation
import StepNavigation from "./components/ui/StepNavigation.tsx";
import SignUp from "./pages/SignUp.tsx";

// context
import AuthProvider from "./context/authProvider.tsx";
import ResumeProvider from "./context/resumeProvider.tsx";
import { useAuth } from "./context/authContext.ts";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/resume" element={<ResumeBuilder />}>
              <Route path="/resume/step/:step" element={<StepNavigation />} />
            </Route>
          </Route>

          <Route path="/templates" element={<Templates />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

const ProtectedRoutes = () => {
  const { user } = useAuth();

  return user ? (
    <ResumeProvider>
      <Outlet />
    </ResumeProvider>
  ) : (
    <Navigate to="/login" />
  );
};

export default App;
