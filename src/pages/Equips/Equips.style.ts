import styled from "styled-components";

export const EquipsContainer = styled.div`
    width: 100;
    min-height: 100vh;
    background-color: #1c242e;
    font-family: ValorantFont;
    margin-top: -81px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const EquipsWrapper = styled.div`
    display: flex;
    /* flex-direction: column; */
    gap: 80px;
    color: antiquewhite;
    margin-top: 30px;padding: 50px 0px;
`;

export const EquipsItems = styled.div<{ $category?: any }>`
    display: flex;
    flex-direction: ${props => props.$category === "Sidearm" ? "column" : "row"};
    gap: 10px;
    border-top: ${props => props.$category !== "Melee" ? "1px solid #f84655" : ""};
    padding-top: 5px;
`;

export const EquipsItem = styled.div<{ isHovered?: any }>`
    max-width: 210px;
    transition: 0.3s ease-in-out;

    > p {
        margin: 5px 0px;
    }

    > img {
        transition: 0.3s ease-in-out;
    }

    &:hover > img {
        cursor: pointer;
        transition: 0.3s ease-in-out;
        transform: scale(${props => (props.isHovered ? 0.9 : 1)});
    }
`

export const EquipsColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`

export const EquipsDrawerContainer = styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    transition: 0.3s ease-in-out;

    > #drawerHeader {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        
        > p {
            font-weight: 300;
            font-family: Roboto;
            font-size: large;
            letter-spacing: 2px;
        }
    }

    > #img > img {
        max-width: 400px;
    }

    > #weaponsSpecs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;

        

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            background-color: #aaaaaa99;
            padding: 10px 0px;
            
            > h4 {
                font-family: Impact;
                letter-spacing: 1px;
                font-weight: 100;
            }

            > h2 {
                margin: 10px 0px;
            }
        }
    }

    > #damageByRange > div > #ranges {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: baseline;
        text-align: end;

        > p {
            > span {
                font-size: 10px;
                font-family: Roboto; 
            }
        }
    }

    > #damageByRange > div > #damages {
        margin: 10px 0px;
        > div {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            align-items: baseline;
            text-align: end;

            > h3 {
                text-align: start;
            }
        } 
    }

    > #alternativeShot {
        > ul {
            margin: 10px 0px;

            > li {
                margin: 3px 0px;
            }
        }
    }

    > #feature {
        > h3 {
            margin-bottom: 10px;
        }

        p {
            margin-bottom: 5px;
        }
    }
`
