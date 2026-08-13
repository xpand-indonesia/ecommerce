'use client';

import { cn } from '@/lib/utils';
import { Tabs as TabsPrimitive } from 'radix-ui';
import * as React from 'react';

type TabsContextType = {};

const TabsContext = React.createContext<TabsContextType>({});

function Tabs({
    className,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
    return (
        <TabsPrimitive.Root
            data-slot="tabs"
            className={cn('', className)}
            {...props}
        />
    );
}

function TabsList({
    className,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
    return (
        <TabsContext.Provider value={{}}>
            <TabsPrimitive.List
                data-slot="tabs-list"
                className={cn(
                    'bg-white border border-neutral-300 p-1 rounded-full flex items-center',
                    className
                )}
                {...props}
            />
        </TabsContext.Provider>
    );
}

function TabsTrigger({
    className,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
    return (
        <TabsPrimitive.Trigger
            data-slot="tabs-trigger"
            className={cn(
                'flex-1 h-11 flex items-center justify-center text-gray-500 cursor-pointer',
                'data-[state=active]:rounded-full data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-[0_4px_18px_rgba(0,0,0,0.31)]',
                className
            )}
            {...props}
        />
    );
}

function TabsContent({
    className,
    ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
    return (
        <TabsPrimitive.Content
            data-slot="tabs-content"
            className={cn(className)}
            {...props}
        />
    );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
