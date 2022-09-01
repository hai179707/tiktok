import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import { DiscoverIcon, MusicNoteIcon } from "~/components/Icons";
import styles from '../Discover.module.scss';

const cx = classNames.bind(styles)

function DiscoverItem({ data }) {
    // const [discovers, setDiscover] = useState([])

    return (
        <div className={cx('discover-item')}>
            {data.isMusicDiscover ? <MusicNoteIcon className={cx('icon')} /> : <DiscoverIcon className={cx('icon')} />}
            <p className={cx('text')}>{data.textContent}</p>
        </div>
    );
}

DiscoverItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default DiscoverItem;