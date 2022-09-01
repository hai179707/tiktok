import { AppleIcon, FacebookIcon, GoogleIcon, InstagramIcon, KakaoTalkIcon, LineIcon, ProfileIcon, QRCodeIcon, TwitterIcon } from '~/components/Icons';

export const LOGIN_LIST =
{
    title: 'Login in to Tiktok',
    list: [
        {
            icon: <QRCodeIcon />,
            text: 'Use QR code'
        },
        {
            icon: <ProfileIcon />,
            text: 'Use phone / email / username',
            login: true
        },
        {
            icon: <FacebookIcon />,
            text: 'Continue with Facebook'
        },
        {
            icon: <GoogleIcon />,
            text: 'Continue with Google'
        },
        {
            icon: <TwitterIcon />,
            text: 'Continue with Twitter'
        },
        {
            icon: <LineIcon />,
            text: 'Continue with LINE'
        },
        {
            icon: <KakaoTalkIcon />,
            text: 'Continue with KakaoTalk'
        },
        {
            icon: <AppleIcon />,
            text: 'Continue with Apple'
        },
        {
            icon: <InstagramIcon />,
            text: 'Continue with Instagram'
        },
    ]
}


export const SIGNUP_LIST =
{
    title: 'Sign up for TikTok',
    list: [
        {
            icon: <ProfileIcon />,
            text: 'Use phone or email',
        },
        {
            icon: <FacebookIcon />,
            text: 'Continue with Facebook'
        },
        {
            icon: <GoogleIcon />,
            text: 'Continue with Google'
        }
    ],
    more: [
        {
            icon: <TwitterIcon />,
            text: 'Continue with Twitter'
        },
        {
            icon: <LineIcon />,
            text: 'Continue with LINE'
        },
        {
            icon: <KakaoTalkIcon />,
            text: 'Continue with KakaoTalk'
        }
    ]

}