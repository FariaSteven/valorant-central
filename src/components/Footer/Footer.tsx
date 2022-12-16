import { Link } from "react-router-dom";
import valorantLogo from "../../assets/fullLogo.png";

import facebookIcon from "../../assets/facebook.svg";
import tiktokIcon from "../../assets/tiktok.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";

import * as S from "./Footer.style";

const footerLinks = [
  {
    link: "https://www.facebook.com/VALORANTbrasil",
    icon: facebookIcon,
  },
  {
    link: "https://www.instagram.com/valorantbrasil/",
    icon: instagramIcon,
  },
  {
    link: "https://www.tiktok.com/@valorantbrasil?lang=pt-BR",
    icon: tiktokIcon,
  },
  {
    link: "https://twitter.com/VALORANTBrasil",
    icon: twitterIcon,
  },
];

const Footer = () => {
  return (
    <S.Footer>
      <S.LogoImg src={valorantLogo} />
      <S.FooterSocial>
        {footerLinks.map((item: any) => (
          <S.FooterItem>
            <a href={item.link} target="_blank">
              <S.FooterImgs src={item.icon} />
            </a>
          </S.FooterItem>
        ))}
      </S.FooterSocial>
    </S.Footer>
  );
};

export default Footer;
