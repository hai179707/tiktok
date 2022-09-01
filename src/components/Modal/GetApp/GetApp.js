import classNames from "classnames/bind";
import images from "~/assets/images";
import { QRCoverIcon } from "~/components/Icons";
import Image from "~/components/Image";
import styles from './GetApp.module.scss';

const cx = classNames.bind(styles);

function GetApp() {

    return (
        <div className={cx('modal-wrapper')}>
            <div className={cx('header')}>
                <p className={cx('title')}>Get the TikTok app</p>
            </div>
            <div className={cx('container')}>
                <div className={cx('QR-container')}>
                    <p className={cx('sub-title')}>Scan QR code to download TikTok</p>
                    <div className={cx('QR-code')}>
                        <QRCoverIcon />
                        <Image src={images.qrCode} alt='TikTok QR code' className={cx('QR-img')} />
                    </div>
                </div>
                <div className={cx('download-container')}>
                    <p className={cx('sub-title')}>Download from app stores</p>
                    <div className={cx('app-stores')}>
                        <a href="/" target={"_blank"} className={cx('to-store')}><Image src={images.microsoftStore} className={cx('app-store', 'microsoft')} /></a>
                        <a href="/" target={"_blank"} className={cx('to-store')}><Image style={{ backgroundImage: `url(${images.stores})` }} className={cx('app-store', 'applestore')} /></a>
                        <a href="/" target={"_blank"} className={cx('to-store')}><Image style={{ backgroundImage: `url(${images.stores})` }} className={cx('app-store', 'amazone')} /></a>
                        <a href="/" target={"_blank"} className={cx('to-store')}><Image style={{ backgroundImage: `url(${images.stores})` }} className={cx('app-store', 'googleplay')} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetApp;