import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '../Image';
import styles from './SuggestedAccounts.module.scss';
import TippyAccountReview from '../TippyAccountReview';

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return (
        <TippyAccountReview data={data}>
            <div className={cx('account-item')}>
                <Image src={data.avatar} alt={data.nickname} className={cx('avatar')} />
                <div className={cx('item-info')}>
                    <h4 className={cx('nickname')}>
                        <span>{data.nickname}</span>
                        {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                    </h4>
                    <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                </div>
            </div>
        </TippyAccountReview>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default AccountItem;