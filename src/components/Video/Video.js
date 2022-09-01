import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { MutedIcon, UnMutedIcon } from "../Icons";
// import Image from "../Image";
import styles from './Video.module.scss'
import { faFlag } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles)

function Video({ data }) {
    const [volume, setVolume] = useState(0)
    const [play, setPlay] = useState(false)
    const videoRef = useRef()
    const thumbRef = useRef()

    useEffect(() => {
        videoRef.current.volume = volume
    }, [volume])

    const handleMute = () => {
        if (volume) {
            videoRef.current.muted = true
            setVolume(0)
            thumbRef.current.style.bottom = `8px`
        } else {
            videoRef.current.muted = false
            setVolume(1)
            setPlay(true)
            videoRef.current.play()
            thumbRef.current.style.bottom = `48px`
        }
    }

    const handleVolume = (e) => {
        let volume = e.nativeEvent.offsetY / e.target.offsetHeight
        if (volume < 0.2) {
            volume = 0
        }
        if (volume > 0.8) {
            volume = 1
        }
        setVolume(1 - volume)
        thumbRef.current.style.bottom = `${8 + (1 - volume) * 40}px`
    }

    const handlePlay = () => {
        setPlay(!play)
        if (play) {
            videoRef.current.pause()
        } else {
            videoRef.current.play()
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('video')}>
                <video ref={videoRef} src={data.file_url} muted loop />
            </div>
            <div className={cx('control')}>
                <div className={cx('volume')}>
                    {volume && <div className={cx('volume-bar-back')}>
                        <div className={cx('volume-bar')} onClick={handleVolume}></div>
                        <div ref={thumbRef} className={cx('volume-thumb')}></div>
                    </div>}
                    <div className={cx('icon')} onClick={handleMute} >{volume ? <UnMutedIcon /> : <MutedIcon />}</div>
                </div>
                <div className={cx('play-btn')} onClick={handlePlay}>
                    {play ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                </div>
                <p className={cx('report')}><FontAwesomeIcon icon={faFlag} />Report</p>
            </div>
        </div>
    );
}

Video.propTypes = {
    data: PropTypes.object.isRequired
}

export default Video;