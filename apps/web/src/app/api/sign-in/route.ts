import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
    const { loginId, password } = await req.json();

    if (!loginId || !password) {
        return new Response(
            JSON.stringify({
                httpStatus: 'OK',
                isSuccess: false,
                message: '아이디와 비밀번호를 입력해주세요.',
                code: 400,
                result: null,
            }),
            { status: 400, headers: { 'Content-Type': 'application/json' } },
        );
    }

    const user = {
        accessToken: 'accessToken',
        memberUuid: '1000001',
    };

    const result = {
        httpStatus: 'OK',
        isSuccess: true,
        message: '로그인 성공',
        code: 200,
        result: user,
    };

    return new Response(JSON.stringify(result), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
};
