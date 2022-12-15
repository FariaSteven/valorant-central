import styled from "styled-components";
import backGround from "../../assets/VALORANT_Logo_V.jpg";

export const AgentsContainer = styled.div`
  /* background: url(${backGround}); */
  background-color: #1c242e;
  margin-top: -274px;
  font-family: ValorantFont;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const AgentsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px;
  padding: 137px 0 0 0;
  margin: 137px 0 0 0;
  padding: 137px 0 0 0;
  margin: 137px 0 0 0;
`;

export const AgentsCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 70px;
  /* border-radius: 10px; */
  border: 1px solid #ffffff60;
  background-color: #ffffff40;
  backdrop-filter: blur(20px);
  transition: ease-in-out 0.2s;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 0,
    100% 70%,
    70% 100%,
    0 100%,
    0% 70%,
    0% 30%
  );
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    backdrop-filter: blur(0);
  }
`;

export const AgentsCardImg = styled.img`
  width: 70px;
`;

export const AgentDetailsContainer = styled.div`
  display: flex;
`;

export const AgentDetailsAbout = styled.div``;

export const AgentDetailsAboutTitle = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 900;
  font-family: Roboto;
  margin-bottom: 10px;
`;

export const AgentDetailsRole = styled.h2`
  color: white;
  font-size: 70px;
  font-weight: 100;
  font-family: Tungsten;
`;

export const AgentDetailsText = styled.p`
  width: 500px;
  color: white;
  font-size: 20px;
  font-weight: 100;
  font-family: Roboto;
  backdrop-filter: blur(10px);
`;

export const AgentDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AgentDetailsName = styled.h1`
  color: white;
  font-size: 90px;
  border-radius: 10px;
`;

export const AgentDetailsImg = styled.img`
  width: 677px;
`;

export const AgentDetailsAbilities = styled.div`
  width: 500px;
`;

export const AgentDetailsAbilitiesTitle = styled.h1`
  color: white;
  font-size: 70px;
  font-weight: 100;
  font-family: Tungsten;
`;

export const AgentDetailsAbilitiesWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
`;

export const AgentDetailsAbilitiesCard = styled.div`
  border: 1px solid #ffffff40;
  border-radius: 10px;
  backdrop-filter: blur(100px);
`;

export const AgentDetailsAbilitiesImg = styled.img`
  width: 80px;
`;

export const AgentDetailsAbilitiesName = styled.p`
  color: white;
  font-size: 40px;
  font-weight: 100;
  font-family: ValorantFont;
`;
