import PropTypes from 'prop-types'
import { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import styles from './Actions.module.scss';

const cx = classNames.bind(styles)

function Actions({ data }) {
    const [liked, setLiked] = useState(data.is_liked)

    const handleLike = () => {
        setLiked(!liked)
        if (liked) {
            data.likes_count--
        } else {
            data.likes_count++
        }

    }
    return (
        <div className={cx('wrapper')}>
            <button className={cx('btn', 'like')} onClick={handleLike}><span className={cx('icon', { liked })}><FontAwesomeIcon icon={faHeart} /></span><strong>{data.likes_count}</strong></button>
            <button className={cx('btn', 'comment')}><span className={cx('icon')}><FontAwesomeIcon icon={faCommentDots} /></span><strong>{data.comments_count}</strong></button>
            <button className={cx('btn', 'share')}><span className={cx('icon')}><FontAwesomeIcon icon={faShare} /></span><strong>{data.shares_count}</strong></button>
        </div>
    );
}

Actions.propTypes = {
    data: PropTypes.object.isRequired
}

export default Actions;