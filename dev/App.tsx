import { CopyBlock } from '../src/block';
import { CopyButton } from '../src/button';

export const App = () => {
	return (
		<div className='app'>
			<div className='container'>
				<h1>Component</h1>

				<div className='content'>
					<CopyBlock>Copied from CopyBlock</CopyBlock>
				</div>

				<div className='content'>
					<CopyButton valueToCopy='Copied from CopyButton' />
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
