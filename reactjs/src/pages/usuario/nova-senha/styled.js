import styled from 'styled-components';

const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center;
    align-items: center;  
    height: 100vh; 

    background-color: #2F4F4F;
    background-image: url('/assets/images/LOGO TCC - P3 NWS 3.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 120vh 100vh;  

    .Box-password {
        display: flex; 
        flex-direction: column; 
        align-items: center;  

        width: 90vh; 
        height: 65vh; 
        
        border-style: outset;
        border-color:  #ADD8E6; 
    }

    .Title {
        color: #ADD8E6;
        font-size: 2.5em; 

        text-transform: uppercase;
        padding: 65px 0px 50px 0px;

        text-align: center;   
        font-weight: bold;
    }

    .Inputs {
        display: flex; 
        flex-direction: column; 
        align-items: center; 
    }

    .Inputs > input {
        width: 60vh; 
        padding: 15px 0px 15px 0px;
        margin-bottom: 20px; 

        border-radius: 10px; 
    }

    .Warning {
        display: flex; 
        padding-bottom: 20px; 
        color: #ADD8E6; 
        font-size: 18px; 
        margin-right: 10px; 

    }

`

const Button = styled.button`
    background-color: white; 
    border: 2px solid #ADD8E6; 
    border-radius: 15px; 
    padding: 10px 45px; 
` 

export {Container, Button }