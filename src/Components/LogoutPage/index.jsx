import { AuthRoute, useAuth } from "../../context/auth";

export const LogoutPage = () => {
    const auth = useAuth();
    const logout = (e) => {
        e.preventDefault();
        auth.logout();
      }
    
      return (
        <AuthRoute>
          <h1>Logout</h1>
    
          <form onSubmit={logout} >
            <label>¿Seguro que deseas salir?</label>
            <button type="submit"> Salir </button>
          </form>
        </AuthRoute>
      );
}
