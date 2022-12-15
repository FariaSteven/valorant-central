import styled from "styled-components";

export const Landing = styled.div`
  background-color: #fff9e7;
`

export const VideoContainer = styled.video`
  width: 100%;
  margin-top: -137px;
  clip-path: polygon(
    0 0,
    80% 0%,
    100% 0,
    100% 87%,
    92% 100%,
    20% 100%,
    0 100%,
    0% 20%
  );
`;

export const VideoSource = styled.source``;

export const VideoButton = styled.button`
  
`;

export const NewsContainer = styled.div`
  padding: 0px 300px;
`;

export const NewsTitle = styled.h1`
  font-size: 8rem;
  font-family: Tungsten;
  color: #f84655;
`;

export const NewsWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const NewsCardImg = styled.img`
  clip-path: polygon(
    0 0,
    80% 0%,
    100% 0,
    100% 87%,
    92% 100%,
    20% 100%,
    0 100%,
    0% 20%
  );
`;

export const NewsCardDate = styled.p`
  color: #f84655;
  font-family: Tungsten;
`;

export const NewsCardTitle = styled.h1`
  color: #000000bf;
  font-family: Tungsten;
  font-weight: 100;
  transition: ease-in-out 0.3s;
`;

export const NewsCard = styled.div`
  cursor: pointer;
  &:hover ${NewsCardTitle} {
    color: #f84655;
  }
`;
