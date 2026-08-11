import { HeaderProp } from '@/components/layout';
import Container from '@/components/ui/container';
import { LoginForm } from '@/features/auth';
import Image from 'next/image';
import Link from 'next/link';

export default function SignInPage() {
    return (
        <>
            <HeaderProp style="default" />
            <section className="py-8 mt-[75px]">
                <Container>
                    <div className="flex gap-6">
                        <div className="flex-1">
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
                            <div className=" flex flex-col gap-8">
                                <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark leading-tight text-center">
                                    Login
                                </h2>
                                <LoginForm />
                            </div>
                            <div className="border-b border-[#D5D7DA] font-medium w-full my-4"></div>
                            <div>
                                Don't have an account?{' '}
                                <Link
                                    href="/auth/register"
                                    className="text-primary"
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
