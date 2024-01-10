import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./Equips.style";

const EquipsDrawer = (dataId: any) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    axios.get(`https://valorant-api.com/v1/weapons/${dataId && dataId?.dataId}`)
      .then((res: any) => setData(res?.data?.data))
  }, [dataId]);

  const WeaponSpecs = ({ title, value, valueType }: any) => {
    return (
      <div>
        <h4>{title}</h4>
        <h2>{value}</h2>
        <h4>{valueType}</h4>
      </div>
    )
  } 

  return (
    <S.EquipsDrawerContainer>
      <div id="drawerHeader">
        <h1>{data?.displayName}</h1>
        <p>{data?.category?.split("EEquippableCategory::")}</p>
      </div>
      <div id="shootSpecs">
        <span>Penetration: {data?.weaponStats?.wallPenetration?.split("EWallPenetrationDisplayType::")}</span>
      </div>
      <div id="img">
        <img src={data?.displayIcon} />
      </div>
      <div id="weaponsSpecs">
        <WeaponSpecs title="FIRE RATE" value={data?.weaponStats?.fireRate} valueType="BULLETS/SEG" />
        <WeaponSpecs title="RUN SPEED" value={data?.weaponStats?.runSpeedMultiplier} valueType="M/SEG" />
        <WeaponSpecs title="EQUIP SPEED" value={data?.weaponStats?.equipTimeSeconds} valueType="SEG" />
        <WeaponSpecs title="1st BULLET ACCURACY" value={data?.weaponStats?.firstBulletAccuracy} valueType="BALAS/SEG" />
        <WeaponSpecs title="RELOAD TIME" value={data?.weaponStats?.reloadTimeSeconds} valueType="BALAS/SEG" />
        <WeaponSpecs title="MAGAZINE SIZE" value={data?.weaponStats?.magazineSize} valueType="BALAS/SEG" />
      </div>
      <div id="damageByRange">
        <div>
          <div id="ranges">
            <h2>DAMAGE</h2>
            {data?.weaponStats?.damageRanges?.map((item: any, i: any) =>
              <p>{item?.rangeStartMeters}<span> m</span> - {item?.rangeEndMeters}<span> m</span></p>
            )}
          </div>
          <div id="damages">
            <div>
              <h3>HEAD</h3>
              {data?.weaponStats?.damageRanges?.map((item: any, i: any) =>
                <span>{item?.headDamage}</span>
              )}
            </div>
            <div>
              <h3>BODY</h3>
              {data?.weaponStats?.damageRanges?.map((item: any, i: any) =>
                <span>{item?.bodyDamage}</span>
              )}
            </div>
            <div>
              <h3>LEGS</h3>
              {data?.weaponStats?.damageRanges?.map((item: any, i: any) =>
                <span>{item?.legDamage}</span>
              )}
            </div>
          </div>
        </div>
      </div>
      {data?.weaponStats?.altFireType || data?.displayName !== "Classic" || data?.displayName !== "Ghost"  &&
        <div id="alternativeShot">
          <h3>ALTERNATIVE SHOT - {data?.weaponStats?.altFireType?.split("EWeaponAltFireDisplayType::")}</h3>
          <ul>
            <li>Zoom: {data?.weaponStats?.adsStats?.zoomMultiplier}x</li>
            <li>Fire Rate: {data?.weaponStats?.adsStats?.fireRate}</li>
            <li>Movement Speed: {data?.weaponStats?.adsStats?.runSpeedMultiplier}</li>
            <li style={{marginTop: "10px"}}>• Light reduction in dispersion and recoil.</li>
            <li>• The reticle follows the recoil.</li>
          </ul>
        </div>
      }
      {data?.weaponStats?.feature &&
        <div id="feature">
          <h3>FEATURE - {data?.weaponStats?.feature?.split("EWeaponStatsFeature::")}</h3>
          <p>• Invisible shot trajectory for enemies.</p>
          <p>• Shot is not audible at distances greater than 40m, except in the direction of the shot.</p>
        </div>
      }
    </S.EquipsDrawerContainer>
  )
}

export default EquipsDrawer;
