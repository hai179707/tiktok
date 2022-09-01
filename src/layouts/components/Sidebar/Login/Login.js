import classNames from "classnames/bind";
import styles from './Login.module.scss';
import Button from "~/components/Button";
import { useModal } from '~/hooks';
import LoginModal from '~/components/Modal/LoginModal';
import Modal from '~/components/Modal';

const cx = classNames.bind(styles)

function Login() {
    const { isShowing, toggle } = useModal();

    return (
        <div className={cx('wrapper')}>
            <p className={cx('text')}>Log in to follow creators, like videos, and view comments.</p>
            <Button outline large className={cx('login-btn')} onClick={toggle}>Log in</Button>
            <Modal
                isShowing={isShowing}
                hide={toggle}
            >
                <LoginModal />
            </Modal>
        </div>
    );
}

export default Login;