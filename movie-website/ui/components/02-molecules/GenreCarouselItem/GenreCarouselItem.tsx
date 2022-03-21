import { Heading } from "../../01-atoms/Heading";
import styles from "./GenreCarouselItem.module.css";

interface GenreCarouselItemProps {
    carouselItem: Models.MovieItem;
}

export const GenreCarouselItem: React.FC<GenreCarouselItemProps> = ({
    carouselItem,
}) => {

    
    return (
        <div className={styles.GenreCarouselItem}>
            <img
                src={
                    carouselItem.plprogram$thumbnails["orig-186x330"]?.plprogram$url
                }
            ></img>
            <div className={styles.GenreCarouselItemTitle}>
                <Heading type={"CarouselItem"} tag={"h3"}>
                    {carouselItem.title}
                </Heading>
            </div>
        </div>
    );
};
