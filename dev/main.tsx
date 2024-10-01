import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Button } from '../src/button';

import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Button />
	</StrictMode>
);
