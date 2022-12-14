import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from './FixedRightBottom.module.scss'

import Button from "~/components/Button";
import { BackToTopIcon, CloseIcon, DesktopIcon, MobileIcon } from "../Icons";
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useModal } from "~/hooks";
import Modal from "~/components/Modal";
import GetApp from "../Modal/GetApp";
import ShortcutsModal from "../Modal/ShortcutsModal";

const cx = classNames.bind(styles)

function FixedRightBottom() {
    const [showBackToTop, setShowBackToTop] = useState(false)
    const [showApp, getShowApp] = useState(false)
    const [showShortcuts, getShowShortcuts] = useState(false)
    const { isShowing, toggle } = useModal()

    useEffect(() => {
        const isShowShortcuts = Math.floor(Math.random() * 10 + 1)

        if (isShowShortcuts === 5) {
            getShowShortcuts(true)
            console.log(isShowShortcuts)
        }

        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowBackToTop(true)
            } else {
                setShowBackToTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const closeShortcuts = () => {
        getShowShortcuts(false)
    }
    return (
        <div className={cx('wrapper')}>
            {showShortcuts &&
                <PopperWrapper className={cx('shortcuts')}>
                    <div className={cx('close')} onClick={closeShortcuts}><CloseIcon width='1.8rem' /></div>
                    <ShortcutsModal />
                </PopperWrapper>
            }
            <PopperWrapper className={cx('app', { show: showApp })}>
                <div className={cx('item')}>
                    <span className={cx('icon')}><DesktopIcon /></span>
                    <span className={cx('title')}>Get Tiktok for desktop</span>
                </div>
                <div className={cx('split')}></div>
                <div className={cx('item')} onClick={toggle}>
                    <span className={cx('icon')}><MobileIcon /></span>
                    <span className={cx('title')}>Get Tiktok App</span>
                </div>
                <div className={cx('close')} onClick={() => getShowApp(false)}><CloseIcon /></div>
            </PopperWrapper>
            <Button rounded className={cx('get-app', { 'hide-btn': showApp })} onClick={() => getShowApp(true)}>Get App</Button>
            <Button primary iconOnly rounded leftIcon={<BackToTopIcon />} className={cx('back-to-top', { 'show-btn': showBackToTop })} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            <Modal
                isShowing={isShowing}
                hide={toggle}
            >
                <GetApp />
            </Modal>
        </div>
    );
}

export default FixedRightBottom;