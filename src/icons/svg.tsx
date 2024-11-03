export const SVG = ({ children, ...props }: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none' stroke='currentColor' viewBox='0 0 24 24' {...props}>
			{children}
		</svg>
	);
};
