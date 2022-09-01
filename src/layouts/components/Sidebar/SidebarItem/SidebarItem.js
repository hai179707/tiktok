import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import styles from './SidebarItem.module.scss';

const cx = classNames.bind(styles)


function SidebarItem({ label, hide, children }) {
    return (
        <div className={cx('wrapper', { hide })}>
            <p className={cx('label')}>{label}</p>
            {children}
        </div>
    );
}

SidebarItem.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string
}

export default SidebarItem;