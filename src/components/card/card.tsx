import classNames from 'classnames';
import styles from './card.module.scss';
import Dsc030792Jpg from '../../assets/dsc03079 (2).jpg';

export interface CardProps {
    className?: string;
}

export const Card = ({ className }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={Dsc030792Jpg} alt="" className={styles.image} />
            <div className={styles.div1}>Himalayan Adventure</div>
        </div>
    );
};
