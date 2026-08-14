import { ReactNode } from 'react';

interface ContentTitleProp {
    children?: ReactNode;
}

export function ContentTitle({ children }: ContentTitleProp) {
    return (
        <div className="font-heading text-2xl :text-4xl font-bold text-gray-800">
            {children}
        </div>
    );
}
