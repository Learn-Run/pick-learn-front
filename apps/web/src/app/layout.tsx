import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

import './globals.css';

const dmSansFont = DM_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: { default: 'Pick & Learn', template: '%s | Pick & Learn' },
    description:
        'Spharos Academy 6th 2차 프로젝트 - 실시간 지식 공유 플랫폼 Pick & Learn',
    keywords: ['지식공유', '실시간', 'pickandlearn', 'learn', '픽앤런'],
    // icons: {
    //     icon: '/assets/images/icons/icon.png',
    // },
    openGraph: {
        title: 'Pick & Learn',
        description:
            'Spharos Academy 6th 2차 프로젝트 - 실시간 지식 공유 플랫폼 Pick & Learn',
        // url: 'https://pickandlearn.vercel.app/',
        siteName: 'Pick & Learn',
        // images: [
        //     {
        //         url: '/og-image.png',
        //         width: 1200,
        //         height: 630,
        //     },
        // ],
        locale: 'ko-KR',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='ko-KR'>
            <body className={dmSansFont.className}>{children}</body>
        </html>
    );
}
