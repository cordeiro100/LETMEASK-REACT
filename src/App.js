import { createContext, useState } from 'react'
import { auth,firebase } from './services/firebase'


import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { BrowserRouter, Route } from 'react-router-dom'




export const AuthContext = createContext({})

export function App() {
  const [user, setUser] = useState({});

  function signWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(result => {
        console.log(result)
      if (result.user) {
        const { displayName, photoURL, uid } = result.user

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.')
        }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })

      }

    })

  }

   
  
  
  

  
  
  
  
  return (
    <BrowserRouter>
    <AuthContext.Provider value={{ user, signWithGoogle }}>
    <Route path="/" exact component={Home} />
    
    <Route path="/rooms/new" component={NewRoom} />
    </AuthContext.Provider>

    </BrowserRouter>
  )
}


export default App;
