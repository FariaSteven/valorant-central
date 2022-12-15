import bannerVideo from "../../assets/valorantNew.mp4";
import news1 from "../../assets/news1.jpeg";
import news2 from "../../assets/news2.jpeg";
import news3 from "../../assets/news3.jpeg";

import * as S from "./Landing.style";

const Landing = () => {
  const newsData = [
    {
      title: "Thank You, from our Dev team",
      date: "01/10/2022",
      img: news1,
    },

    {
      title: "Streams on riot mobile",
      date: "03/11/2022",
      img: news2,
    },

    {
      title: "Vote for the cause most important to you",
      date: "05/11/2022",
      img: news3,
    },
  ];
  return (
    <S.Landing>
      <S.VideoContainer autoPlay muted loop>
        <S.VideoSource src={bannerVideo} type="video/mp4" />
      </S.VideoContainer>
      <S.NewsContainer>
        <S.NewsTitle>LATEST NEWS</S.NewsTitle>
        <S.NewsWrapper>
          {newsData.map((item: any) => (
            <S.NewsCard>
              <S.NewsCardImg src={item?.img} />
              <S.NewsCardDate>{item?.date}</S.NewsCardDate>
              <S.NewsCardTitle>{item?.title}</S.NewsCardTitle>
            </S.NewsCard>
          ))}
        </S.NewsWrapper>
      </S.NewsContainer>
    </S.Landing>
  );
};

export default Landing;
