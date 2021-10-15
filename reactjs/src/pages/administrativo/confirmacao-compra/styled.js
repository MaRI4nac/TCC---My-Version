import styled from 'styled-components'      

const Container = styled.div`
    display: flex; 
    flex-direction: column; 

    background-color: #2F4F4F;
    color: #F0F8FF;

    justify-content: center; 
    align-items: center; 

    height: 100vh; 

    .Tickets {

        margin-top: 10px; 
        display: flex; 
        flex-direction: column;
        justify-content: space-evenly;
        border-radius: 8px; 

        background-color: rgba(103, 128, 128, 0.4);

        width: 100%; 
        height: 80vh; 

        align-items: center; 
    }


    .Confirm-Ticket {
        display: flex; 
        flex-direction: row; 
        justify-content: space-evenly; 

        border-radius: 35px; 
        width: 80%; 
        height: 20vh; 
        align-items: center;

        box-shadow: 2px 1px 20px 9px #2f4f4f;
    }

    .Event-Information {
        display: flex; 
        flex-direction: column; 

        align-items: start; 
    }

    .Buttons-confirm > button {
        border-radius: 80px;
        
    }

    .Title {
        font-size: 1.5em; 
        font-weight: bold;  
    }

    .Caption-top {
        font-size: 1.6em;
        font-weight: bold;
        margin-left: 10%;
    }

    .Text { 
    align-self: start; 
    width: 100%; 

    }

    .Title-top {
        font-size: 2em; 
        font-weight: bold; 

        text-align:center; 
        padding-bottom: 50px;
    }
`


export { Container }