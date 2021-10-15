import styled from 'styled-components'

const Container = styled.div`
    background: linear-gradient(180deg, rgba(23, 61, 64, 0.92) 0%, rgba(23, 61, 64, 0.899330) 15%, rgba(47, 79, 79, 0.874) 38.42%, rgba(47, 79, 79, 0.878) 40.42%);
    min-height: 100vh;
    width: 100%;
    color: white;

    .secondary-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5% 10% 5% 5%;
    }

    .search {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        margin-bottom: 2rem;
    }

    .search div {
        font-size: 1.25rem;
    }

    .box {
        display: flex;
        flex-direction: row;
        align-self: center;
        margin-bottom: 4rem;

        max-width: 1080px;
    }

    .box:last-child {
        margin-bottom: 0px;
    }

    .box img {
        padding-right: 4rem;
    }

    .box-text {
        display: flex;
        flex-direction: column;
        align-items: center;
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

    .box-text div {
        text-align: center;
    }
`

export { Container }