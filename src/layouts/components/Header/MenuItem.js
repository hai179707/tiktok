import { HelpIcon, KeyboardShortcutsIcon, LanguageIcon } from '~/components/Icons';
import config from '~/config'


export const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        sub: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                    subitem: true
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    subitem: true
                }
            ]
        }
    },
    {
        icon: <HelpIcon />,
        title: 'Feedback and help',
        to: config.routes.feedback,
    },
    {
        icon: <KeyboardShortcutsIcon />,
        title: 'Keyboard shortcuts',
    }
]