import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image";

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    const goToUserPage = () => {
        window.location.href = `/@${data.nickname}`;
    }
    return (
        <div className={cx('wrapper')} onClick={goToUserPage}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.nickname} />
            <div className={cx('info')}>
                <h1 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                </h1>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </div>
    )
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default AccountItem;