import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface ContainerProps extends React.ComponentPropsWithRef<"div"> {
    children: ReactNode
}

export default function Container({ className, children }: ContainerProps) {
    return (
        <div className={cn('container mx-auto px-6', className)}>
            {children}
        </div>
    );
}