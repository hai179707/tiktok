import classNames from "classnames/bind";
import styles from './ShortcutsModal.module.scss'
import { SHORTCUT_LIST } from "./list";

const cx = classNames.bind(styles)

function ShortcutsModal() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>{SHORTCUT_LIST.title}</div>
            <div className={cx('container')}>
                {SHORTCUT_LIST.list.map((item, index) => (
                    <div className={cx('shortcut')} key={index}>
                        <span className={cx('title')}>{item.title}</span>
                        <span className={cx('icon')}>{item.icon}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShortcutsModal;