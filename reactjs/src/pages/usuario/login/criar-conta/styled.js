import styled from "styled-components";

const CriarConta = styled.div`

    display: flex;
    flex-direction: column;
    padding: 1.5em 10em;
    text-align: center;
    background: rgba(47, 79, 79, 0.8);
    height: 100vh;
    font-family: Roboto;
    justify-content: center;
    align-items: center;

.cadast-logo {
    background-image: url('/assets/images/LOGO TCC - P3 NWS 3.svg');
    background-size: 100% 100%;
}

.tela-cadastrese {
    border: 0.25em solid #ADD8E6;
    padding: 1em;
}

.cadast-titulo {
    font-size: 2em;
    text-transform: uppercase;
    font-weight: 900;
    color: #ADD8E6;
    margin-bottom: 1em;
}

.cadast-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

input {
    border: none;
    border-radius: 0.5em;
    background: rgba(112, 128, 144, 0.4);
    width: 40em;
    padding: 1em 1em;
    margin-bottom: 1em;
    font-family: Roboto;
}

input::placeholder {
    color: #ADD8E6;
    font-weight: 700;
}

input:focus {
    color: #ADD8E6;
    font-weight: 500;
}

input[type="date"] {
    text-transform: uppercase;
    color: #ADD8E6;
    font-weight: 700;
}


.cadast-bt {
    margin-top: 1em;
}

`

export { CriarConta } ;