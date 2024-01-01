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
    /* padding-top: 200px; */
`;

export const MapsInfo = styled.div`
    max-width: 500px;
    z-index: 1;
    background-color: #ffffff37;
    position: absolute;
    bottom: 198px;
    padding: 21px;
    right: 381px;
    backdrop-filter: blur(0.5rem);
    > h2 {
        color: black;
    }
`;