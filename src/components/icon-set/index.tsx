// external
import { motion } from 'framer-motion';

// import { Copy as Squares, CopyCheck as SquaresCheck, CopyX as SquaresX, Clipboard, ClipboardCheck, ClipboardX, File, Files, FileCheck, FileX, Folder, Folders, FolderCheck, FolderX } from 'lucide-react';

// styles
// import styles from './style.module.css';

export interface IconSetProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	status?: 'READY' | 'COPIED' | 'FAILED';
	icons: {
		ready: React.ReactNode;
		copied: React.ReactNode;
		failed: React.ReactNode;
	};
}

export const IconSet = ({ status = 'READY', icons }: IconSetProps) => {
	const statusKey = status.toLowerCase();

	return (
		<motion.div key={'2cb-icon-' + statusKey} animate={{ x: 0 }}>
			{icons[statusKey as keyof typeof icons]}
		</motion.div>
	);
};
