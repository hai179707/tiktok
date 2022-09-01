import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import PostItem from "~/components/PostItem";
import styles from './Home.module.scss';
import * as videoService from '~/services/videoService';

const cx = classNames.bind(styles)

function Home() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await videoService.getVideo();
            setVideos(result)
        }
        fetchApi()
    }, [])

    return (
        <div className={cx('wrapper')}>
            {videos.map(video => (
                <PostItem key={video.id} data={video} />
            ))}
        </div>
    )
}

export default Home;