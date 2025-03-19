import './styles/main.css';

import React, { Suspense } from 'react';

import Fallback from './Fallback';

export default function App() {
    return <Suspense fallback={<Fallback />}></Suspense>;
}
