import PropTypes from 'prop-types'
import { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import styles from './Actions.module.scss';
import { Menu as ShareMenu } from '~/components/Popper'
import { SHARE_ITEM_LIST } from './ShareItem';
import NumberFormat from '../NumberFormat';

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
            <button className={cx('btn', 'like')} onClick={handleLike}><span className={cx('icon', { liked })}><FontAwesomeIcon icon={faHeart} /></span><strong><NumberFormat number={data.likes_count} /></strong></button>
            <button className={cx('btn', 'comment')}><span className={cx('icon')}><FontAwesomeIcon icon={faCommentDots} /></span><strong><NumberFormat number={data.comments_count} /></strong></button>
            <ShareMenu
                items={SHARE_ITEM_LIST}
                minWidth='share'
                placement='top-start'
                offset={[-28, 4]}
                hideOnClick
            >
                <button className={cx('btn', 'share')}>
                    <span className={cx('icon')}><FontAwesomeIcon icon={faShare} /></span><strong><NumberFormat number={data.shares_count} /></strong>
                </button>
            </ShareMenu>
        </div>
    );
}

Actions.propTypes = {
    data: PropTypes.object.isRequired
}

export default Actions;