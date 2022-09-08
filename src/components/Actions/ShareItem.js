import { CopyLinkIcon, DropDownIcon, EmailIcon, EmbedIcon, FacebookIcon, LineIcon, LinkedInIcon, PinterestIcon, SendIcon, TelegramIcon, TwitterIcon, WhatsAppIcon } from '~/components/Icons';


export const SHARE_ITEM_LIST = [
    {
        icon: <EmbedIcon />,
        title: 'Embed'
    },
    {
        icon: <SendIcon />,
        title: 'Send to friends',
    },
    {
        icon: <FacebookIcon width='2.6rem' />,
        title: 'Share to Facebook',
    },
    {
        icon: <WhatsAppIcon />,
        title: 'Share to WhatsApp',
    },
    {
        icon: <CopyLinkIcon />,
        title: 'Copy link',
    },
    {
        title: <DropDownIcon />,
        more: {
            data: [
                {
                    icon: <EmbedIcon />,
                    title: 'Embed'
                },
                {
                    icon: <SendIcon />,
                    title: 'Send to friends',
                },
                {
                    icon: <FacebookIcon width='2.6rem' />,
                    title: 'Share to Facebook',
                },
                {
                    icon: <WhatsAppIcon />,
                    title: 'Share to WhatsApp',
                },
                {
                    icon: <CopyLinkIcon />,
                    title: 'Copy link',
                },
                {
                    icon: <TwitterIcon width='2.6rem' />,
                    title: 'Share to Twitter',
                },
                {
                    icon: <LinkedInIcon />,
                    title: 'Share to LinkedIn',
                },
                {
                    icon: <TelegramIcon />,
                    title: 'Share to Telegram',
                },
                {
                    icon: <EmailIcon />,
                    title: 'Share to Email',
                },
                {
                    icon: <LineIcon width='2.6rem' />,
                    title: 'Share to LINE',
                },
                {
                    icon: <PinterestIcon />,
                    title: 'Share to Pinterest',
                },
            ]
        }
    }
]