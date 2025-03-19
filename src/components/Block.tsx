import React, { createContext } from 'react';
import { useThree, useFrame } from '@react-three/fiber';

const offsetCtx = createContext(0);

export function useBlock() {}

export default function Block({ offset }: { offset: number }) {
    useFrame(() => {});

    return <offsetCtx.Provider value={offset}></offsetCtx.Provider>;
}
