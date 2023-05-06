import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { Menu } from "./Components/Menu";
import { HomePage } from "./Components/HomePage";
import { BlogPage } from "./Components/BlogPage";
import { ProfilePage } from "./Components/ProfilePage";
import { BlogPost } from "./Components/BlogPost";
import { LoginPage } from "./Components/LoginPage";
import { LogoutPage } from "./Components/LogoutPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />{" "}
              {/**Route nos permite hacer rutas dinamicas con los dos puntos */}
            </Route>

            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </div>
  );
}

export default App;
