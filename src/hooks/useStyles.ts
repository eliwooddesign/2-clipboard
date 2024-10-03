export const useStyles = (styles: CSSModuleClasses) => {
	const prefix = (variable: string) => {
		if (!variable.startsWith('--')) {
			throw new Error('Variable must start with --');
		}

		if (variable as keyof typeof styles) {
			return styles[variable];
		}

		throw new Error('Variable must be declared in the CSS module');
	};

	return { prefix };
};
