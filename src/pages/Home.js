import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import googleIcon from '../assets/google-icon.svg'
import '../style.css'
import { useHistory } from 'react-router'
import { firebase } from '../services/firebase'
import { auth } from '../services/firebase'
import { AuthContext } from '../App'
import { useContext } from 'react'


export function Home() {
    const history = useHistory()
    const {user, signWithGoogle } = useContext(AuthContext)
    
    
    
    
    function handleCreteRoom() {
          
            signWithGoogle()
        
    
       
      
        history.push("/rooms/new")                          
      
            
           
        
     }
    
    return(
        <div id="principal">
    <aside>
        <img src={illustrationImg} alt="imagem do aside"/>
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e  compartilhe conhecimento com outras pessoas</p>
    </aside> 

        <main>
            <img src={logoImg} alt="imagem da logo" />
          <div> 
         <button onClick={handleCreteRoom} className="botao-google">
            <img className="foto-google"   src={googleIcon} alt="logo do google" />
            Crie sua sala com o google
         </button>
         <div className="separator">ou entre em um sala</div>
         <form>
             <input type="text"
             placeholder="Digite o código da sala"
             />
         </form>

         <button className="botao-joinroom" type="submit">
             Entrar na sala
         
          </button>

        
             

           

            </div>



        </main>

    </div>

    )
}