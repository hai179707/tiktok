import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import ButtonContinueWith from "~/components/ButtonContinueWith";
import styles from './LoginModal.module.scss';
import { LOGIN_LIST, SIGNUP_LIST } from "./list";
import { DropDownIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

function LoginModal() {
    const [render, setRender] = useState(LOGIN_LIST)
    const [signUp, setSignUp] = useState(false)
    const [renderMore, setRenderMore] = useState(false)

    useEffect(() => {
        if (renderMore) {
            setRender(SIGNUP_LIST)
        }
    }, [renderMore])


    const handleChange = () => {
        if (signUp) {
            setRender(LOGIN_LIST)
        } else {
            setRender(SIGNUP_LIST)
        }
        setSignUp(!signUp)
    }

    const handleMore = () => {
        SIGNUP_LIST.list = [...SIGNUP_LIST.list, ...SIGNUP_LIST.more]
        delete SIGNUP_LIST.more
        setRenderMore(true)
    }

    const login = () => {
        localStorage.setItem('currentUser', true)
        window.location.reload();
    }


    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('login')}>
                    <>
                        <div className={cx('title')}>{render.title}</div>
                        {render.list.map((btn, index) => <ButtonContinueWith key={index} onClick={btn.login && login} to={btn.to} icon={btn.icon}>{btn.text}</ButtonContinueWith>)}
                        {render.more && <div className={cx('see-more-btn')} onClick={handleMore}><DropDownIcon /></div>}
                    </>
                </div>
            </div>
            <div className={cx('sign-up')}>
                {signUp ? (
                    <div>Don’t have an account? <span className={cx('btn')} onClick={handleChange}>Sign up</span></div>
                ) : (
                    <div>Already have an account? <span className={cx('btn')} onClick={handleChange}>Log in</span></div>
                )
                }
            </div>
        </div>
    );
}

export default LoginModal;