import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { Menu as More } from '~/components/Popper'
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { MENU_ITEMS } from './MenuItem';
import { USER_ITEMS } from './UserItem';
import { InboxIcon, MessagesIcon, MoreIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import config from '~/config';
import Logo from './Logo';
import Modal from '~/components/Modal';
import { useModal } from '~/hooks';
import LoginModal from '~/components/Modal/LoginModal';

const cx = classNames.bind(styles)

function Header() {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || false)
    const { isShowing, toggle } = useModal();

    useEffect(() => {
        localStorage.setItem('currentUser', currentUser)
    }, [currentUser])

    const handleMenuChange = (menuItem) => {
        if (menuItem.type === 'log-out') {
            var login = localStorage.getItem('currentUser')
            if (login) {
                setCurrentUser(false)
                window.location.reload();
            }
        }
        console.log(menuItem)
    }

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Logo />
            <Search />
            <div className={cx('actions')}>
                <Button outline to={currentUser ? config.routes.upload : ''} onClick={currentUser ? null : toggle} className={cx('upload')} leftIcon={<UploadIcon />}>Upload</Button>
                {currentUser ? (
                    <>
                        <div>
                            <Tippy content='Messages' placement='bottom' interactive>
                                <div className={cx('message')}>
                                    <Button iconOnly to={config.routes.messages} leftIcon={<MessagesIcon width='26px' />}></Button>
                                </div>
                            </Tippy>
                        </div>
                        <div>
                            <Tippy content='Inbox' placement='bottom' interactive>
                                <div className={cx('inbox')}>
                                    <Button iconOnly leftIcon={<InboxIcon />}></Button>
                                    <div className={cx('unread-inbox')}>12</div>
                                </div>
                            </Tippy>
                        </div>
                        <div>
                            <More
                                items={USER_ITEMS}
                                onChange={handleMenuChange}
                            >
                                <Image className={cx('user-avatar', 'show-arrow')} src={images.ribi} alt='User avatar' />
                            </More>
                        </div>
                    </>
                ) : (
                    <>
                        <Button primary onClick={toggle}>Log in</Button>
                        <div>
                            <More
                                items={MENU_ITEMS}
                                onChange={handleMenuChange}
                            >
                                <div><MoreIcon className={cx('more-icon', 'show-arrow')} /></div>
                            </More>
                        </div>
                    </>
                )}
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                >
                    <LoginModal />
                </Modal>
            </div>

        </div>
    </header>
}

export default Header;