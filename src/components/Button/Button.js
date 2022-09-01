import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles)

function Button({ to, href, primary = false, outline = false, rounded = false, disable = false, iconOnly = false, small = false, large = false, leftIcon = false, rightIcon = false, children, className, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }

    if (to) {
        Comp = Link
        props.to = to
    }
    if (href) {
        Comp = 'a'
        props.href = href
    }
    if (disable) {
        Object.keys(props).forEach(prop => {
            if (prop.startsWith('on')) {
                delete props.prop
            }
        })
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        disable,
        rounded,
        iconOnly,
        small,
        large
    })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {children && <span className={cx('title')}>{children}</span>}
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    disable: PropTypes.bool,
    icon: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;