'use client';

import React, { createContext, useContext, useState } from 'react';

export type HeaderStyle = 'default' | 'transparent';

interface LayoutContextType {
    headerStyle: HeaderStyle;
    setHeaderStyle: (theme: HeaderStyle) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
    const [headerStyle, setHeaderStyle] = useState<HeaderStyle>('transparent');

    return (
        <LayoutContext.Provider value={{ headerStyle, setHeaderStyle }}>
            {children}
        </LayoutContext.Provider>
    );
}

export function useLayout() {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error('useLayout must be used within a LayoutProvider');
    }
    return context;
}
