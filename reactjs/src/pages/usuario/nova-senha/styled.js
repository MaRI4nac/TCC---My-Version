import styled from 'styled-components';

const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center;
    align-items: center;  
    height: 100vh; 

    background-image: url('https://i.pinimg.com/564x/fe/71/77/fe7177975e95d743d58ce9752a5e7dd7.jpg'); 
    background-repeat: no-repeat;
    background-size: 100%;  

    .Logo{ 
        background-image: url('/assets/images/LOGO TCC - P3 NWS 3.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;   
    }

    .Box-password {
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center;  

        background: rgba(47,79,79,0.55);
        border-radius: 20% 0;
        box-shadow: 1px 2px 5px rgba(47,79,79,0.7), 2px 4px 25px rgba(47,79,79,0.7);
        padding: 2em 7em;
    }

    .Title {
        color: #ADD8E6;
        font-size: 2em; 

        text-transform: uppercase;
        padding: 1em 0em 0.5em 0em;

        text-align: center;   
        font-weight: bold;
    }

    .Inputs {
        display: flex; 
        flex-direction: column; 
        align-items: center; 
    }


    .Inputs > input {
        border: none;
        background: transparent;
        outline: none; 
        border-bottom: 4px solid #2F4F4F; 
        width: 40em;
        padding: 1em 1em;
        margin-bottom: 1em;
        font-family: Roboto;
        color: white;
    }
    
     input::placeholder {
        color:#ADD8E6;
        padding-left: 1em;
        font-size: 1em;
        font-weight: 700;
    }
    
    input:focus {
        color: #ADD8E6;
        padding-left: 1em;
    }

    .Warning {
        display: flex; 
        padding: 3% 0% 3% 0%;  
        color: #ADD8E6; 
        font-size: 1em; 
       

    }

`

const Button = styled.button`
    background-color: white; 
    border: 2px solid #ADD8E6; 
    border-radius: 15px; 
    padding: 10px 45px; 
` 

export {Container, Button }