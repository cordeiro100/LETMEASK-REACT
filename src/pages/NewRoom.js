import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import googleIcon from '../assets/google-icon.svg'
import '../style.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../App'


export function NewRoom() {
    const {user} = useContext(AuthContext)
  
    return(
        <div id="principal">
    <aside>
        <img src={illustrationImg} alt="imagem do aside"/>
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e  compartilhe conhecimento com outras pessoas</p>
    </aside> 

        <main>
            <h1> Seja bem vindo </h1>
            <img src={logoImg} alt="imagem da logo" />
          

          <div> 
              <h1>{user.name}</h1>
                <h1>Crie uma nova sala </h1>

        
         <form>
             <input type="text"
             placeholder="Nome da sala"
             />
         </form>

         <button className="botao-joinroom" type="submit">
             Criar sala
         </button>
            
           <p className="cliqueaqui">
               Quer entrar em uma sala já existente? <a href="/">Clique aqui</a>
           </p>
         

        
             

           

            </div>



        </main>

    </div>

    )
}