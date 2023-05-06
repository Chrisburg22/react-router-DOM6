import React from "react";
import { useAuth } from "../../context/auth";

export const ProfilePage = () => {
  const auth = useAuth();

  return (
    <>
      <h1>Profile</h1>
      <p>{auth.user? ('Welcome '+auth.user.username):'Crea un usuario'}</p>
    </>
  );
};
