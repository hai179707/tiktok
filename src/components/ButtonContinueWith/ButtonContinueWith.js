import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';
import styles from './ButtonContinueWith.module.scss';

const cx = classNames.bind(styles);

function ButtonContinueWith({ to, href, icon, className, children, onClick, ...passProp }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProp
    }
    if (to) {
        Comp = Link
        props.to = to
    }
    if (href) {
        Comp = 'a'
        props.href = href
    }

    return (
        <Comp to={to} {...props} className={cx('container', { [className]: className })}>
            <span className={cx('icon')}>{icon}</span>
            <span>{children}</span>
        </Comp>
    );
}

ButtonContinueWith.propTypes = {
    icon: PropTypes.node,
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired
}

export default ButtonContinueWith;