import * as S from "./Equips.style";
import { SetStateAction, useState } from "react";

interface IEquipsProps {
    title?: String,
    data?: any[],
    setDataId?: SetStateAction<any>
}

const EquipsCard: React.FC<IEquipsProps> = ({ title, data, setDataId }: IEquipsProps) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseEnter = (index: any) => {
        setHoveredItem(index);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const handleClick = (i: any) => {
        console.log(data && data[i]?.uuid)
        data && setDataId(data[i]?.uuid)
    }

    return (
        <div>
            <h2 style={{ marginBottom: "2px", color: "#f84655" }}>{title !== "Melee" && title}</h2>
            <S.EquipsItems $category={title} >
                {data?.map((item, i) =>
                    <S.EquipsItem
                        key={i}
                        isHovered={hoveredItem === i}
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={() => handleMouseLeave()}
                        onClick={() => handleClick(i)}
                    >
                        <span>{item[i]?.displayName}</span>
                        <p>{item?.displayName}</p>
                        <img src={item?.displayIcon} width="100%" />
                    </S.EquipsItem>
                )}
            </S.EquipsItems>
        </div>
    );
};

export default EquipsCard;
