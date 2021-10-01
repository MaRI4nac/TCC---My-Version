import styled from 'styled-components'

const Container = styled.div`

    .header {
        background-image: url('/assets/images/bgTelaPrincipal.svg');
        display: flex;
        flex-direction: column;
        align-items: center;

        background-position: center;
        background-size: 100% auto;
    }

    .bg-white {
        background: rgba(240, 240, 240, 0.5);
        width: 50vh;
        height: 50vh;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;

        margin: 5rem 0px;
    }

    .bg-white img {
        height: 100%;
        width: 100%;
        fill: white;
    }

    .body {
        background: linear-gradient(180deg, rgba(47, 79, 79, 0.92) 0%, rgba(47, 79, 79, 0.899224) 21.02%, rgba(47, 79, 79, 0.874) 43.42%, rgba(26, 73, 73, 0.5244) 70.5%, rgba(26, 73, 73, 0.0736) 100%);
        min-height:100vh;
    }
    
    .themes {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding-top: 3rem;
    }

    .box {
        width: 11%;
        text-align: center;
    }

    .box img {
        height: 15vh;
        width: auto;
    }

    .box p {
        color: white;
    }

    button {
        border: none;
        border-radius: 5em;
        padding: 0.6em 3em;
        background-color: #F0F8FF;
        color: black;
        font-family: Roboto;
        font-weight: 900;
        text-transform: uppercase;
        font-size: 0.9em;

        cursor: pointer;
    }

    .principal {
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .principal h1 {
        margin: 5rem 0px 3rem 0px;
    }

    .box-principal {
        display: flex;
        flex-direction: row;
        align-self: center;
        margin-bottom: 4rem;

        max-width: 1080px;
    }

    .box-principal:last-child {
        margin-bottom: 0px;
    }

    .box-principal img {
        padding: 0px 3rem ;
    }

    .box-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .box-text p {
        font-size: 1.15em;
    }

    .box-text h1 {
        margin: 0px;
        text-align: center; 
    }

    .box-text button {
        display: flex;
        background-color: #F0F8FF;
        border-radius: 25px;
        outline: none;
        border: none;
        color: black;
        font-weight: bold;
        font-size: 1em;
        padding: 10px 3rem;
    }
 
    .marginbutton {
        margin-bottom: 5rem;
    }

    .box-text div {
        text-align: center;
    }

    .rodape {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        background: rgba(47, 79, 79, 0.89);
        padding: 2rem 0px;
    }

    .rodape img {
        height: 7.5vh;
        width: auto;
    }
`

export { Container }