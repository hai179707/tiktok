import { DownIcon, LLetterIcon, MLetterIcon, UpIcon } from "~/components/Icons";

export const SHORTCUT_LIST = {
    title: 'Keyboard shortcuts',
    list: [
        {
            title: 'Go to previous video',
            icon: <UpIcon />
        },
        {
            title: 'Go to next video',
            icon: <DownIcon />
        },
        {
            title: 'Like video',
            icon: <LLetterIcon />
        },
        {
            title: 'Mute / unmute video',
            icon: <MLetterIcon />
        },
    ]
}