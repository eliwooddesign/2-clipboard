import { SVG } from '@/icons';

export const XIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<SVG {...props}>
			<path d='M18 6 6 18' />
			<path d='m6 6 12 12' />
		</SVG>
	);
};
