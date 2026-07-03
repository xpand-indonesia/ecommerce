interface BrewProcessCard {
    title: string;
    processes: string[];
}

const BrewProcessCard = ({ title, processes }: BrewProcessCard) => {
    return (
        <div className="bg-white/20 backdrop-blur-md text-white rounded-2xl flex flex-col gap-4 p-4 min-h-[256px]">
            <h3 className="font-heading font-bold text-3xl">{title}</h3>
            <ol className="list-disc pl-5">
                {processes.map((process) => (
                    <li>{process}</li>
                ))}
            </ol>
        </div>
    );
};

export {
    BrewProcessCard
};