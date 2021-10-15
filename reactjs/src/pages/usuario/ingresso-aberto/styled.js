import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center; 
    background-color: black; 
    color: white;

    border: 1px solid black; 
    height: 100vh;
    background: url('/assets/images/IngressoAberto.svg'); 
    background-repeat: no-repeat;
    background-size: 100%;

    .Information {
        background-color: rgba(26, 73, 73, 0.5);  
        margin: 0 8%; 
        padding: 8% 5%; 

        height: 70vh; 
        color: white; 
        display: flex; 
        align-items: center;
        font-size: 1.5em;
    }

    .InfoEvent {
        margin: 0 15%;
        text-align: flex-start;  
    }

    .InfoTicket {
        text-align: center; 
    }

    .Text {
        font-size: 0.6em; 
        padding-top: 15px; 
    }

    .QrCode > img {
        width: 20vh; 
    }

    h1 {
        text-align: center; 
    }

    span {
        font-weight: 700; 
    }
`

export { Container }