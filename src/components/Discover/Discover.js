import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from './Discover.module.scss';
import DiscoverItem from "./DiscoverItem";
import { DISCOVER_LIST } from "./DiscoverList";

const cx = classNames.bind(styles)

function Discover() {
    const [discovers, setDiscover] = useState([])

    useEffect(() => {
        setDiscover(DISCOVER_LIST)
    }, [])

    return (
        <>
            <div className={cx('body')}>
                {discovers.map((discover, index) => (
                    <DiscoverItem key={index} data={discover} />
                ))}
            </div>
        </>
    );
}

export default Discover;