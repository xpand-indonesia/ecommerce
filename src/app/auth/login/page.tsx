import { HeaderProp } from '@/components/layout';
import Container from '@/components/ui/container';
import { LoginForm } from '@/features/auth';
import Image from 'next/image';
import Link from 'next/link';

export default function SignInPage() {
    return (
        <>
            <HeaderProp style="default" />
            <section className="py-6 lg:py-8 header-safe-6 lg:header-safe-8">
                <Container>
                    <div className="flex gap-6">
                        <div className="flex-1 hidden lg:block">
                            <div className="relative rounded-[32px] h-[656px] w-full overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full">
                                    <Image
                                        src="/images/mock/mock_signin.png"
                                        alt="Sign up banner"
                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="relative w-full h-full flex items-center justify-center z-10">
                                    <p className="text-[32px] md:text-[60px] text-white font-heading font-bold leading-tight text-center">
                                        /Enjoy Cofee/
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className=" flex flex-col gap-8 mb-2">
                                <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark leading-tight text-center">
                                    Login
                                </h2>
                                <LoginForm />
                            </div>
                            <Link
                                href="/auth/login"
                                className="text-primary text-sm font-medium"
                            >
                                Forgot Password?
                            </Link>
                            <div className="border-b border-[#D5D7DA] w-full my-4"></div>
                            <div className="text-sm">
                                Don't have an account?{' '}
                                <Link
                                    href="/auth/register"
                                    className="text-primary underline font-medium"
                                >
                                    Register Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
