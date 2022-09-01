import { useEffect, useState } from 'react';
import classNames from "classnames/bind";

import * as userService from '~/services/userService';
import styles from './SuggestedAccounts.module.scss'
import AccountItem from './AccountItem';

const cx = classNames.bind(styles)

function SuggestedAccounts({ label }) {
    const [suggestedUsers, setSuggestedUser] = useState([])
    const [seeLess, setSeeLess] = useState(false)

    const fetchApi = async (page = 1, perPage = 5) => {
        const result = await userService.getSuggested(page, perPage);
        setSuggestedUser(result)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    const loadMoreSuggestedUsers = () => {
        if (suggestedUsers.length >= 5) {
            fetchApi(1, 20)
        }
        setSeeLess(true)
    }

    const loadlessSuggestedUsers = () => {
        setSuggestedUser(prev => prev.slice(0, 5))
        setSeeLess(false)
    }

    return (
        <>
            {suggestedUsers.map(user => (
                <AccountItem key={user.id} data={user} />
            ))}
            {seeLess ? <p className={cx('see-all')} onClick={loadlessSuggestedUsers}>See less</p> : <p className={cx('see-all')} onClick={loadMoreSuggestedUsers}>See all</p>}
        </>
    );
}

export default SuggestedAccounts;