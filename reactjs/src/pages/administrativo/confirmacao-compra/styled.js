import styled from 'styled-components'      

const Container = styled.div`
    display: flex; 
    flex-direction: column; 

    background-color: #2F4F4F;
    color: #F0F8FF;

    justify-content: center; 
    align-items: center; 

    height: 115vh; 

    .Tickets {

        margin-top: 10px; 
        display: flex; 
        flex-direction: column;
        justify-content: space-evenly;
        border-radius: 8px; 

        background-color: rgba(103, 128, 128, 0.4);

        width: 160vh; 
        height: 80vh; 

        align-items: center; 
    }


    .Confirm-Ticket {
        display: flex; 
        flex-direction: row; 
        justify-content: space-evenly; 

        border-radius: 35px; 
        border: 5px solid white; 
        width: 145vh; 
        height: 20vh; 
        align-items: center;

        background: url("/assets/images/NWS-background-ticket.png"); 
        background-position: top; 
        background-repeat: no-repeat; 
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
    }

    .Text { 
      align-self: start; 
      margin-left: 35vh; 

      width: 150vh; 

    }
    
    .Title-top {
        font-size: 2em; 
        font-weight: bold; 

        text-align:center; 
        padding-bottom: 50px;
    }
   
`


export { Container }