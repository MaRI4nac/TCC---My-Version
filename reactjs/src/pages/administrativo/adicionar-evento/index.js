import React from 'react';
import { Container } from './styled';

export default function AddEvent () {
    return (
        <Container> 
            <h2> NOVO EVENTO </h2>
            <div className="BoxInputs">
                <div> 
                    <label> Tema: </label>
                    <input type="text"/>  
                    <label> Nova do evento: </label>
                    <input type="text"/> 
                </div> 
                <div> 
                    <label> Categoria: </label>
                    <input type="text"/>  
                    <label> Nome do autor: </label>
                    <input type="text"/>    
                    <label> Data e hora do evento: </label>
                    <input type="date"/>  
                </div>
                <div> 
                    <label> Imagem principal: </label>
                    <input type="file" />
                    
                </div>
            </div> 
        </Container>
    )
}