export function TrackShipmentItem({
    date,
    description,
}: {
    date: string;
    description: string;
}) {
    return (
        <div className="flex items-center gap-2">
            <div className="rounded-full border border-gray-300 size-5"></div>
            <div className="space-y-1 text-sm text-gray-800">
                <div>{date}</div>
                <div>{description}</div>
            </div>
        </div>
    );
}

export function TrackShipmentItemSeparator() {
    return <div className="w-[10px] border-r border-gray-300 h-8" />;
}
