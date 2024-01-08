import styled from "styled-components";

export const MapsContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #1c242e;
    font-family: ValorantFont;
    margin-top: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MapsWrapper = styled.div`
    width: 60%;
    /* clip-path: polygon(100% 1%, 100% 100%, 5% 100%, 0 85%, 0 0); */
    /* padding-top: 200px; */
`;

export const MapsInfo = styled.div`
    max-width:  350px;
    z-index: 1;
    background-color: #aaaaaa99;
    position: absolute;
    bottom: 150px;
    padding: 30px 20px;
    right: 381px;
    backdrop-filter: blur(0.2rem);
    clip-path: polygon(100% 1%, 100% 100%, 10% 100%, 0 85%, 0 0);
    > span {
        color: #000111;
        font-family: fantasy;
    }
    > h2 {
        font-family: ValorantFont;
        color: black;
        margin-bottom: 10px;
    }
`;