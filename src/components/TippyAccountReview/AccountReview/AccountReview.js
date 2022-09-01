import PropTypes from 'prop-types'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import Button from "~/components/Button";
import Image from "~/components/Image";
import styles from './AccountReview.module.scss';

const cx = classNames.bind(styles)

function AccountReview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Link to={`/@${data.nickname}`}><Image src={data.avatar} alt={data.nickname} className={cx('avatar')} /></Link>
                <Button primary>Follow</Button>
            </div>
            <div className={cx('container')}>
                <Link to={`/@${data.nickname}`}>
                    <h4 className={cx('nickname')}>
                        <span>{data.nickname}</span>
                        {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                    </h4>
                    <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                </Link>
                <p className={cx('user-stat')}>
                    <span className={cx('counts')}>{data.followers_count}</span>
                    <span className={cx('label')}>Followers</span>
                    <span className={cx('counts')}>{data.likes_count}</span>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
            {data.bio && <p className={cx('bio')}>{data.bio}</p>}
        </div>
    );
}

AccountReview.propTypes = {
    data: PropTypes.object.isRequired
}


export default AccountReview;