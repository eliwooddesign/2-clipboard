import { Button } from '../src/button';

export const App = () => {
	return (
		<div className='app'>
			<div className='container'>
				<h1>Component</h1>

				<div className='content'>
					<Button toCopy='Boop!' />
				</div>
			</div>

			<div className='container test'>
				<h1>Test</h1>

				<div className='content'>
					<textarea />
				</div>
			</div>
		</div>
	);
};
