'use client';
import { FALLBACK_URL } from '@/web/shared/constants';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const loginId = formData.get('loginId') as string;
        const password = formData.get('password') as string;

        const loginData = {
            loginId,
            password,
        };

        try {
            await signIn('credentials', {
                ...loginData,
                callbackUrl: FALLBACK_URL,
                redirect: true,
            });
        } catch (error) {
            console.log('🚀 ~ action ~ error:', error);
            throw error;
        }
    };

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className='grid grid-rows-3 max-w-[500px] mx-auto py-10 gap-y-3'
        >
            <input
                type='text'
                name='loginId'
                placeholder='아이디'
                autoComplete='on'
                className='border border-gray-500 px-2 py-1'
            />
            <input
                type='password'
                name='password'
                placeholder='비밀번호'
                autoComplete='on'
                className='border border-gray-500 px-2 py-1'
            />
            <button type='submit'>로그인</button>
        </form>
    );
}
