import styles from "./Button.module.css";
import classNames from "classnames";

export interface ButtonProps {
    children: React.ReactNode;
    onClick: any;
    type?: "primary" | "secondary" | 'wishlist';
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, type}) => {
    return (
        <button
            className={classNames(styles.Button, [styles[`Button___${type}`]])}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
