import styled from 'styled-components'

const Container = styled.div`
    height: auto;
    color: white;
    background: linear-gradient(180deg, rgba(47, 79, 79, 0.81) 15.81%, rgba(47, 79, 79, 0.60592) 37.69%, rgba(78, 166, 166, 0.1701) 66.86%, rgba(59, 170, 170, 0.3564) 100%);
    
    .teste {
        height: 40vh;
        background-image: url('/assets/images/event-bgimg.png');
        background-repeat: no-repeat;
        background-size: 100% auto;
    }

    .secondary-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        position: relative;
    }

    .box {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: -25%;
        left: 25%;
        max-width: 800px;
    }

    .box img {
        width: 20rem;
        height: 30rem;
    }

    .box-test h1 {

    }

    .box-test {

    }

    .li {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .ball {
        height: 40px;
        width: 40px;
        background-color: #F0F8FF;
        border-radius: 25px;
    }

`

export { Container }
