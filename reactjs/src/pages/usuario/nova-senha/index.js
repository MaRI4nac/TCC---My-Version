import { Container, Button } from './styled.js'

export default function NewPassoword () {
    return (
        <Container> 
            <div className = "Logo"> 
                <div className = "Box-password"> 
                    <div className = "Title"> Nova Senha </div>
                    <div className = "Inputs"> 
                        <input type="password" placeholder="Senha"/>
                        <input type="password" placeholder="Senha (confirmação)"/>
                    </div>
                    <div className = "Warning">
                        <input type = "checkbox"/>
                        <label> Mantenha-me conectado nos dispositivos logados </label> 
                    </div> 
                    <Button> Alterar Senha </Button> 
                </div> 
            </div>
        </Container>

    )
}