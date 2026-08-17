'use client';

import { cn } from '@/lib/utils';
import React, { useCallback, useEffect, useRef, useState } from 'react';

interface StepSliderProps {
    steps?: number;
    value: number;
    onChange?: (index: number) => void;
}

const INDICATOR_SIZE = 8;

export default function StepSlider({
    steps = 7,
    value = 6,
    onChange,
}: StepSliderProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const currentIndex = Math.max(0, Math.min(value, steps - 1));

    const calculateIndexFromPosition = useCallback(
        (clientX: number) => {
            if (!trackRef.current) return;

            const rect = trackRef.current.getBoundingClientRect();
            const availableWidth = rect.width - INDICATOR_SIZE * 2;
            const offsetX = clientX - rect.left - INDICATOR_SIZE;

            // Hitung persentase posisi di dalam track
            const clampedX = Math.max(0, Math.min(offsetX, availableWidth));
            const ratio = clampedX / availableWidth;

            // Tentukan indeks step terdekat
            const nearestIndex = Math.round(ratio * (steps - 1));

            if (nearestIndex !== currentIndex && onChange) {
                onChange(nearestIndex);
            }
        },
        [steps, currentIndex, onChange]
    );

    const handlePointerDown = (e: React.PointerEvent) => {
        e.preventDefault();
        setIsDragging(true);
        calculateIndexFromPosition(e.clientX);
    };

    useEffect(() => {
        const handlePointerMove = (e: PointerEvent) => {
            if (!isDragging) return;
            calculateIndexFromPosition(e.clientX);
        };

        const handlePointerUp = () => {
            if (isDragging) {
                setIsDragging(false);
            }
        };

        if (isDragging) {
            window.addEventListener('pointermove', handlePointerMove);
            window.addEventListener('pointerup', handlePointerUp);
        }

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
        };
    }, [isDragging, calculateIndexFromPosition]);

    const thumbPositionPercent =
        steps > 1 ? (currentIndex / (steps - 1)) * 100 : 0;

    return (
        <div className="w-full px-3 h-[48px] bg-white border border-input rounded-full flex items-center select-none">
            <div
                ref={trackRef}
                onPointerDown={handlePointerDown}
                style={{
                    height: `${INDICATOR_SIZE * 2}px`,
                    paddingLeft: `${INDICATOR_SIZE / 2}px`,
                    paddingRight: `${INDICATOR_SIZE / 2}px`,
                }}
                className={cn(
                    'relative  w-full bg-gray-200 rounded-full flex items-center justify-between cursor-pointer touch-none'
                )}
            >
                {Array.from({ length: steps }).map((_, index) => {
                    const isLarge = index === 0 || index === steps - 1;

                    return (
                        <div
                            key={index}
                            style={{
                                width: `${INDICATOR_SIZE}px`,
                                height: `${INDICATOR_SIZE}px`,
                            }}
                            className="relative z-0 flex items-center justify-center"
                        >
                            <span
                                style={{
                                    width: `${isLarge ? INDICATOR_SIZE * 2 : INDICATOR_SIZE}px`,
                                    height: `${isLarge ? INDICATOR_SIZE * 2 : INDICATOR_SIZE}px`,
                                    minWidth: `${isLarge ? INDICATOR_SIZE * 2 : INDICATOR_SIZE}px`,
                                    minHeight: `${isLarge ? INDICATOR_SIZE * 2 : INDICATOR_SIZE}px`,
                                }}
                                className="bg-gray-300 border border-gray-500 rounded-full"
                            />
                        </div>
                    );
                })}
                <div
                    className="absolute top-0 bottom-0 pointer-events-none"
                    style={{
                        height: '100%',
                        left: `${INDICATOR_SIZE / 2}px`,
                        right: `${INDICATOR_SIZE * 1.5}px`,
                    }}
                >
                    <div
                        className={`absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full transition-all ${
                            isDragging ? 'scale-110' : 'duration-200 ease-out'
                        }`}
                        style={{
                            left: `${thumbPositionPercent}%`,
                            width: `${INDICATOR_SIZE}px`,
                            height: `${INDICATOR_SIZE}px`,
                        }}
                    >
                        <div
                            style={{
                                width: `${INDICATOR_SIZE * 2}px`,
                                height: `${INDICATOR_SIZE * 2}px`,
                                minWidth: `${INDICATOR_SIZE * 2}px`,
                                minHeight: `${INDICATOR_SIZE * 2}px`,
                            }}
                            className="bg-base-300 border border-primary rounded-full cursor-grab active:cursor-grabbing pointer-events-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
