import react from "react";
import { Url } from "url";
import { Heading } from "../../01-atoms/Heading";
import styles from "./CarouselItem.module.css";

interface CarouselItemProps {
    title: string;
    image: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ title, image }) => {
    return (
        <div className={styles.CarouselItem}>
            <img src={image}></img>
            <div className={styles.CarouselItemTitle}>
                <Heading type={"CarouselItem"} tag={"h3"}>
                    {title}
                </Heading>
            </div>
        </div>
    );
};
