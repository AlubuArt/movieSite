import Link from "next/link";
import { Heading } from "../../01-atoms/Heading";
import styles from "./GenreCarouselItem.module.css";

interface GenreCarouselItemProps {
    carouselItem: Models.MovieItem;
}

export const GenreCarouselItem: React.FC<GenreCarouselItemProps> = ({
    carouselItem,
}) => {
    //TODO: Move this to a tools file. It is used several places
    const slug = carouselItem.id.substring(
        carouselItem.id.lastIndexOf("/") + 1
    );

    return (
        <Link href={`/movies/${slug}`}>
            <div className={styles.GenreCarouselItem}>
                <img
                    src={
                        carouselItem.plprogram$thumbnails["orig-186x330"]
                            ?.plprogram$url
                    }
                    className={styles.CarouselItemImage}
                ></img>
                <div className={styles.Wrapper}>
                    <div className={styles.GenreCarouselItemTitle}>
                    <Heading type={"CarouselItem"} tag={"h3"}>
                        {carouselItem.title}
                    </Heading>
                </div>
                </div>
                
            </div>
        </Link>
    );
};
