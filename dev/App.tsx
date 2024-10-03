import { CopyBlock } from '../src/block';
import { CopyButton } from '../src/button';

export const App = () => {
	return (
		<div className='app'>
			<div className='component'>
				<div className='container'>
					<h1>CopyBlock</h1>
					<div className='content'>
						<CopyBlock>Why did the scarecrow become a go od software engineer? Because he was outstanding in his field! Why did the scarecrow become a go od software engineer? Because he was outstanding in his field! Why did the scarecrow become a go od software engineer? Because he was outstanding in his field! Why did the scarecrow become a go od software engineer? Because he was outstanding in his field!</CopyBlock>
					</div>
				</div>

				<div className='container'>
					<h1>CopyButton</h1>
					<div className='content'>
						<CopyButton valueToCopy='Copied from CopyButton' />
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
