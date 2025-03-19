import './styles/normalize.css';
import './styles/fonts.css';

import { createRoot } from 'react-dom/client';

import App from './App';

const root = document.getElementById('root');

createRoot(root!).render(App());
