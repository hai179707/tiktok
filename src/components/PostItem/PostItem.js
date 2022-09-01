import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from 'react';
import Button from "../Button";
import { MusicNoteIcon } from "../Icons";
import Image from "../Image";
import Video from "../Video";
import styles from './PostItem.module.scss';
import VideoTag from "./VideoTag";
import Actions from "../Actions";
import TippyAccountReview from '../TippyAccountReview';

const cx = classNames.bind(styles);

function PostItem({ data }) {
    const [tags, setTags] = useState([])
    const [description, setDescription] = useState('')

    useEffect(() => {
        let descArr = data.description.split('#')
        setDescription(descArr[0])
        setTags(descArr.slice(1))
    }, [data.description])

    return (
        <div className={cx('wrapper')}>
            <TippyAccountReview data={data.user}>
                <Link to={`/@${data.user.nickname}`} className={cx('avatar')}>
                    <Image src={data.user.avatar} alt={data.user.nickname} />
                </Link>
            </TippyAccountReview>
            <div className={cx('post-content')}>
                <div className={cx('post-text')}>
                    <TippyAccountReview data={data.user} dalay={[800, 0]} offset={[-68, 28]}>
                        <Link to={`/@${data.user.nickname}`} className={cx('user')}>
                            <h3 className={cx('nickname')}>
                                <span>{data.user.nickname}</span>
                                {data.user.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                            </h3>
                            <h4 className={cx('username')}>{`${data.user.first_name} ${data.user.last_name}`}</h4>
                        </Link>
                    </TippyAccountReview>
                    <Button outline small className={cx('follow-btn')}>Follow</Button>
                    <div className={cx('video-desc')}>
                        {description}
                        {tags && tags.map((tag, index) => (
                            <VideoTag key={index} to={`/tag/${tag}`} text={`#${tag}`} />
                        ))}
                    </div>
                    {/* <div className={cx('partnership')}>Paid partnership</div> */}
                    <div className={cx('video-music')}><MusicNoteIcon /> <Link to={`/@${data.user.nickname}`}>{data.music || 'unknown'}</Link></div>
                </div>
                <div className={cx('video-wrapper')}>
                    <Video data={data} />
                    <Actions data={data} />
                </div>
            </div>
        </div>
    );
}

PostItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default PostItem;