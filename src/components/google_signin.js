import React from 'react';
import firebase from '../firebase'; // Importa la configuración de Firebase desde firebase.js

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const LoginWithGoogle = () => {
  const [user, setUser] = React.useState(null);

  const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOut = () => {
    auth.signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

return (
    <div className="login-container">
      {user ? (
        <>
          <h1>Hola, {user.displayName}!</h1>
          <button onClick={signOut}>Cerrar sesión</button>
        </>
      ) : (
        <button onClick={signInWithGoogle}>Iniciar sesión con Google</button>
      )}
    </div>
  );
};

export default LoginWithGoogle;
