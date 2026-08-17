import { BrewProcessCard } from '@/components/brew-process-card';
import Container from '@/components/ui/container';

export const ProductDetailBrewProcessSectionView = () => {
    return (
        <section className="bg-[linear-gradient(277.39deg,_#111E0B_5.08%,_#46B83D_107.32%)]">
            <Container className="pt-[40px] pb-[40px] lg:pt-[84px] lg:pb-[92px]">
                <div className="px-0 flex flex-col gap-[28.69px] lg:px-15 lg:gap-[51px]">
                    <h2 className="text-white font-heading text-3xl font-bold text-center lg:text-5xl">
                        How to Brew
                    </h2>
                    <div className="grid grid-cols-2 gap-y-6 gap-x-4 lg:gap lg:grid-cols-5 lg:gap-x-6">
                        <BrewProcessCard
                            title="Chemex"
                            processes={[
                                'Dose: 40g',
                                'Grind: Medium',
                                'Brew Weight: 630g',
                                'Brew Time: 4:00',
                            ]}
                        />
                        <BrewProcessCard
                            title="V60"
                            processes={[
                                'Dose: 30g',
                                'Grind: Medium-Fine',
                                'Brew Weight: 500g',
                                'Brew Time: 3:30',
                            ]}
                        />
                        <BrewProcessCard
                            title="AeroPress"
                            processes={[
                                'Dose: 15g',
                                'Grind: Fine',
                                'Brew Weight: 250g',
                                'Brew Time: 2:00',
                            ]}
                        />
                        <BrewProcessCard
                            title="French Press"
                            processes={[
                                'Dose: 50g',
                                'Grind: Coarse',
                                'Brew Weight: 800g',
                                'Brew Time: 4:00',
                            ]}
                        />
                        <BrewProcessCard
                            title="Siphon"
                            processes={[
                                'Dose: 20g',
                                'Grind: Medium',
                                'Brew Weight: 360g',
                                'Brew Time: 5:00',
                            ]}
                            className="col-span-full lg:col-span-1"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};
