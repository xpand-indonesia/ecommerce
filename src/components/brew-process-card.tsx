import { cn } from '@/lib/utils';

interface BrewProcessCard {
    title: string;
    processes: string[];
    className?: string;
}

const BrewProcessCard = ({ title, processes, className }: BrewProcessCard) => {
    return (
        <div
            className={cn(
                'bg-white/20 backdrop-blur-md text-white rounded-2xl flex flex-col gap-4 p-4 min-h-[143px] lg:min-h-[256px]',
                className
            )}
        >
            <h3 className="font-heading font-bold text-xl leading-[27px] lg:text-3xl lg:leading-[40px]">
                {title}
            </h3>
            <ol className="list-disc pl-5 text-sm leading-[1.214285714] lg:text-base lg:leading-[1.1875]">
                {processes.map((process, index) => (
                    <li key={`process-${index}`}>{process}</li>
                ))}
            </ol>
        </div>
    );
};

export { BrewProcessCard };
