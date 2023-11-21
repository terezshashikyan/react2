import { FC } from 'react';
import { IProfileImageProps } from './types';

import styles from './ProfileImage.module.scss';

const ProfileImage: FC<IProfileImageProps> = ({img}) => 
    (
        <div className={styles.wrapper}>
            <img className={styles.wrapper__img} src={img} alt="img" />
        </div>
    );

export default ProfileImage;