import { CopyBlock } from '../src/block';
import { CopyButton } from '../src/button';

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

export const App = () => {
	return (
		<div className='app'>
			<div className='component'>
				<div className='container'>
					<h1>CopyBlock</h1>
					<div className='content'>
						<CopyBlock>{LOREM.repeat(20)}</CopyBlock>
					</div>
				</div>

				<div className='container'>
					<h1>CopyButton</h1>
					<div className='content'>
						<div className='wrapper'>
							<p>1200 Main St. Unit 1A</p>
							<CopyButton valueToCopy='Copied from CopyButton' />
						</div>
					</div>
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
