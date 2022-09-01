import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from '../PostItem.module.scss';

const cx = classNames.bind(styles)

function VideoTag({ to = '/', text }) {
    return (
        <Link className={cx('video-tag')} to={to}>{text}</Link>
    );
}

VideoTag.propTypes = {
    to: PropTypes.string,
    text: PropTypes.string.isRequired
}

export default VideoTag;