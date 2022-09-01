import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import * as searchServices from '~/services/searchService'
import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { ClearIcon, SearchIcon } from '~/components/Icons';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles)


function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)

    const debouncedValue = useDebounce(searchValue, 500)

    const inputRef = useRef()

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([])
            return
        }

        const fetchApi = async () => {
            setLoading(true)
            const result = await searchServices.search(debouncedValue);
            setSearchResult(result)
            setLoading(false)
        }
        fetchApi()
    }, [debouncedValue])

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleSearhBtn = () => {
        window.location.href = `/search?q=${searchValue}`;
    }

    const handleChangeInp = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }

    return (
        // Tippy bảo là phải thêm thẻ div bên ngoài, không thì báo lỗi vàng khó chịu :)
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map(result => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder='Tìm kiếm tài khoản và video'
                        onChange={handleChangeInp}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <span
                            className={cx('clear')}
                            onClick={handleClear}
                        >
                            <ClearIcon width='16px' />
                        </span>
                    )}
                    {loading && <span className={cx('load')}><FontAwesomeIcon icon={faCircleNotch} /></span>}
                    <button
                        className={cx('search-btn')}
                        onMouseDown={e => e.preventDefault()}
                        onClick={handleSearhBtn}
                    >
                        <SearchIcon width='24px' />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;