import { useEffect, useState } from "react";
import axios from "axios";

import * as S from "./Agents.style";

const Agents = () => {
  const [data, setData]: Array<Object | any> = useState();
  const [agentUrl, setAgentUrl]: String | any = useState('dade69b4-4f5a-8528-247b-219e5a1facd6');
  const [agentData, setAgentData]: Array<Object | any> = useState();
  const [ability, setAbility]: Array<Object | any> = useState(0);

  console.log('ABILITY', ability)

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then((res) => setData(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(`https://valorant-api.com/v1/agents/${agentUrl}`)
      .then((res) => setAgentData(res.data));
  }, [agentUrl]);

  console.log("agentData", agentData);
  return (
    <S.AgentsContainer>
      <S.AgentsWrapper>
        {data?.data?.map((item: any) => (
          <S.AgentsCard>
            <S.AgentsCardImg
              onClick={() => setAgentUrl(item?.uuid)}
              src={item?.displayIcon}
            />
          </S.AgentsCard>
        ))}
      </S.AgentsWrapper>
      <S.AgentDetailsContainer>
        <S.AgentDetailsAbout>
          <S.AgentDetailsAboutTitle>- ROLE</S.AgentDetailsAboutTitle>
          <S.AgentDetailsRole>
            {agentData?.data?.role?.displayName}
          </S.AgentDetailsRole>
          <S.AgentDetailsAboutTitle>- BIO</S.AgentDetailsAboutTitle>
          <S.AgentDetailsText>
            {agentData?.data?.description}
          </S.AgentDetailsText>
        </S.AgentDetailsAbout>
        <S.AgentDetailsCard>
          <S.AgentDetailsName>
            {agentData?.data?.displayName}
          </S.AgentDetailsName>
          <S.AgentDetailsImg src={agentData?.data?.bustPortrait} />
        </S.AgentDetailsCard>
        <S.AgentDetailsAbilities>
          <S.AgentDetailsAbilitiesTitle>
            HABILIDADES
          </S.AgentDetailsAbilitiesTitle>
          <S.AgentDetailsAbilitiesWrapper>
            {agentData?.data?.abilities?.map((item: any, i: any ) => (
              <S.AgentDetailsAbilitiesCard>
                <S.AgentDetailsAbilitiesImg onClick={() => setAbility(i)} src={item?.displayIcon} />
              </S.AgentDetailsAbilitiesCard>
            ))}
          </S.AgentDetailsAbilitiesWrapper>
          <S.AgentDetailsAbilitiesName>{agentData?.data?.abilities[ability]?.displayName}</S.AgentDetailsAbilitiesName>
          <S.AgentDetailsText>{agentData?.data?.abilities[ability]?.description}</S.AgentDetailsText>
        </S.AgentDetailsAbilities>
      </S.AgentDetailsContainer>
    </S.AgentsContainer>
  );
};

export default Agents;
