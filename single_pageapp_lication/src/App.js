import React, { useContext} from 'react'
import {AuthProvider,  AuthContext } from './AuthContext';
import Header from './Header';
import Login from './Login';


function App() {
  const authContext=useContext(AuthContext)
  return (
    <div className="container">
      <Header />
      {authContext.auth.email ? "Welcom" : <Login />}

    </div>
  );
}


function AppWithStore() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>

  )
}
export default AppWithStore;
