import styled from "styled-components";

const ADMLog = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    background-image: url("https://i.pinimg.com/564x/fe/71/77/fe7177975e95d743d58ce9752a5e7dd7.jpg");
    background-size: 100%;
    height: 100vh;

    padding: 16em 5em;
    color:#ADD8E6;

.Logo {
    background-image: url('/assets/images/LOGO TCC - P3 NWS 3.svg');
    background-size: 100% 100%;
}
   
.tela-login {
    display: flex;
    flex-direction: column;
    padding: 3em 10em;
    background: rgba(47, 79, 79, 0.7);
    border: 0.4em solid #ADD8E6;
    justify-content: center; 
}

.log-titulo {
    text-align: center;
    font-size: 2.3em;
    text-transform: uppercase;
    color: #ADD8E6;

    margin-bottom: 1em;
}

.log-inputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 3em;
}

input {
    border: none;
    background: rgba(112, 128, 144, 0.4);
    border-radius: 8px;
    width: 40em;
    padding: 1em 1em;
    margin: 0.3em;
    margin-bottom: 1em;
}

input::placeholder {
    color:#ADD8E6;
    padding-left: 1em;
    font-size: 1em;
    font-weight: 700;
}

.log-bot-bot {
    display: flex;
    justify-content: center;
}

`

export { ADMLog }