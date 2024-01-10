import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./Equips.style";
import EquipsCard from "./EquipsCard";
import EquipsDrawer from "./EquipsDrawer";

const Equips = () => {
  const [data, setData] = useState<any[]>([]);
  const [dataId, setDataId] = useState<String>();

  useEffect(() => {
    axios.get("https://valorant-api.com/v1/weapons")
      .then((res: any) => setData(res?.data?.data))
  }, []);

  const checkCategory = (category: string) => {
    return data.filter(e => {
      return e.category === `EEquippableCategory::${category}`;
    })
  }

  const categories_1 = [
    "Rifle",
    "SMG",
  ]

  const categories_2 = [
    "Shotgun",
    "Sniper",
    "Heavy",
  ]

  console.log(dataId)

  return (
    <S.EquipsContainer>
      <S.EquipsWrapper>
        <div>
          <EquipsCard setDataId={setDataId} title={"Sidearm"} data={checkCategory("Sidearm")} />
          <EquipsCard setDataId={setDataId} title={"Melee"} data={checkCategory("Melee")} />
        </div>
        <S.EquipsColumn>
          {categories_1.map((item) => <EquipsCard setDataId={setDataId} title={item} data={checkCategory(item)} />)}
          {categories_2.map((item) => <EquipsCard setDataId={setDataId} title={item} data={checkCategory(item)} />)}
        </S.EquipsColumn>
        {dataId && <EquipsDrawer dataId={dataId}/>}
      </S.EquipsWrapper>
    </S.EquipsContainer>
  );
};

export default Equips;
