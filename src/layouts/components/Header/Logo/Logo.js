import { useRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../Header.module.scss'

import images from '~/assets/images';
import Image from '~/components/Image';
import config from '~/config';

const cx = classNames.bind(styles)

function Logo() {
    const logoRef = useRef()

    return (
        <Link ref={logoRef} to={config.routes.home} className={cx('logo')}>
            <Image src={images.logo} alt='Tiktok' />
        </Link>
    );
}

export default Logo;