import styled from 'styled-components'

const Container = styled.div`
    min-height: 100vh;
    background: linear-gradient(180deg, rgba(26, 73, 73, 0.83) 0%, rgba(47, 79, 79, 0.83) 0.01%, rgba(33, 108, 108, 0.57) 53.84%, rgba(47, 79, 79, 0.89) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;

    .box {
        display: flex;
        flex-direction: row;
        align-items: center;

        border-radius: 25px;
        border: 2px solid white;

        max-width: 1080px;
        color: white;
        padding: 1.5rem 6rem 3rem 0px;

        position: relative;
        z-index: 11;
        margin-bottom: 4vh;
    }

    .box:first-child {
        margin-top: 7.5vh;
    }

    .bg {
        position: absolute;
        height: 100%;
        width: 100%;
        margin-top: 1.5rem;

        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center;
        background-image: url('assets/images/bgingresso.jpg');
        opacity: 0.3;
        border-radius: 25px;
        z-index: -1;
    }

    .box img {
        height: 20vh;
        width: auto;
    }

    .box-textos h1 {
        text-align: center;
        margin: 0px;
        margin-bottom: 10px;
    }

    .box-textos div {
        text-transform: uppercase;
        font-size: 1.35em;
    }

    button {
        display: flex;
        background-color: #F0F8FF;
        border-radius: 25px;
        outline: none;
        border: none;
        color: black;
        font-weight: bold;
        font-size: 1em;
        padding: 10px 3rem;
        margin-bottom: 4vh;
    }
`

export { Container }