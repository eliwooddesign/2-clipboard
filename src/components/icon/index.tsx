import { ClipboardIcon } from './clipboard';
import { SquaresIcon } from './squares';
import { FilesIcon } from './files';

export interface IconProps {
	name: 'clipboard' | 'squares' | 'files' | 'folders';
}

export const Icon = ({ name }: IconProps) => {
	if (name === 'clipboard') {
		return <ClipboardIcon />;
	}

	if (name === 'squares') {
		return <SquaresIcon />;
	}

	if (name === 'files') {
		return <FilesIcon />;
	}
};
