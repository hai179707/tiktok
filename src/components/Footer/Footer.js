import classNames from "classnames/bind";
import styles from './Footer.module.scss';

const cx = classNames.bind(styles)

function Footer() {
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('link-container')}>
                    <a href="/" target="_blank" className={cx('link')}>About</a>
                    <a href="/" target="_blank" className={cx('link')}>TikTok</a>
                    <a href="/" target="_blank" className={cx('link')}>Browse</a>
                    <a href="/" target="_blank" className={cx('link')}>Newsroom</a>
                    <a href="/" target="_blank" className={cx('link')}>Contact</a>
                    <a href="/" target="_blank" className={cx('link')}>Careers</a>
                    <a href="/" target="_blank" className={cx('link')}>ByteDance</a>
                </div>
                <div className={cx('link-container')}>

                    <a href="/" target="_blank" className={cx('link')}>TikTok for Good</a>
                    <a href="/" target="_blank" className={cx('link')}>Advertise</a>
                    <a href="/" target="_blank" className={cx('link')}>Developers</a>
                    <a href="/" target="_blank" className={cx('link')}>Transparency</a>
                    <a href="/" target="_blank" className={cx('link')}>TikTok Rewards</a>
                </div>
                <div className={cx('link-container')}>

                    <a href="/" target="_blank" className={cx('link')}>Help</a>
                    <a href="/" target="_blank" className={cx('link')}>Safety</a>
                    <a href="/" target="_blank" className={cx('link')}>Terms</a>
                    <a href="/" target="_blank" className={cx('link')}>Privacy</a>
                    <a href="/" target="_blank" className={cx('link')}>Creator Portal</a>
                    <a href="/" target="_blank" className={cx('link')}>Community Guidelines</a>
                </div>
                <div className={cx('link-container')}>
                    <p className={cx('link')}>© 2022 TikTok</p>
                </div>

            </div>
        </>
    );
}

export default Footer;