// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from "./components/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import CreateNotes from "./components/CreateNotes";
import RequireAuth from "./Auth/RequireAuth";
import PublicAuth from "./Auth/PublicAuth";
import NotFound from "./Pages/NotFound";
import Edit from "./components/Edit";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PublicAuth />}>
            <Route path="/" element={<SignIn />} />
            <Route path="/SafeNotes" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="createnote" element={<CreateNotes />} />
            <Route path="edit/:id" element={<Edit />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
