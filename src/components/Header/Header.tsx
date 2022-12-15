import { Link } from "react-router-dom";
import valorantLogo from "../../assets/valorantLogo.svg";
import * as S from "./Header.style";

const leftList = [
  {
    name: "Agents",
    link: "/agentes",
  },
  {
    name: "Maps",
    link: "/mapas",
  },
  {
    name: "Equip",
    link: "/equipamento",
  },
];
const rightList = [
  {
    name: "Modes",
    link: "/agentes",
  },
  {
    name: "Tiers",
    link: "/mapas",
  },
  {
    name: "Card",
    link: "/criador-cartas",
  },
];

const Header = () => {
  return (
    <S.Header>
      <S.HeaderWrapper>
        <S.List>
          {leftList.map((item: any) => (
            <S.ListItem>
              <S.HeaderLink to={item?.link}>{item?.name}</S.HeaderLink>
            </S.ListItem>
          ))}
        </S.List>
        <S.HeaderLogoContainer to={"/"}>
          <S.HeaderLogoImg src={valorantLogo} />
        </S.HeaderLogoContainer>
        <S.List>
          {rightList.map((item: any) => (
            <S.ListItem>
              <S.HeaderLink to={item?.link}>{item?.name}</S.HeaderLink>
            </S.ListItem>
          ))}
        </S.List>
      </S.HeaderWrapper>
    </S.Header>
  );
};

export default Header;
