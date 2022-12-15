import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 17px;
  padding: 5px 100px;
  background-color: #ffffff0d;
  backdrop-filter: blur(30px);
  clip-path: polygon(0 0, 100% 0%, 90% 100%, 10% 100%);
  box-shadow: 1 1 1 white;
`;

export const HeaderLogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50px;
  background-color: #f84655;
  cursor: pointer;
`;

export const HeaderLogoImg = styled.img`
  width: 30px;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
  color: white;
`;

export const ListItem = styled.li``;

export const HeaderLink = styled(Link)`
  font-size: 20px;
  transition: ease-in-out 0.6s;
  border-bottom: 3px solid transparent;
  &:hover {
    border-bottom: 3px solid #f84655;
  }
`;
