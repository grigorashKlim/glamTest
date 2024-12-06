import React,  {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { reportEvent } from '../reportWebVitals';

const Step = ({ header, embedUrl, nextPath, id }) => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setIsLoading(true);
	}, [embedUrl]);
	const handleNext = () => {
		if (nextPath === '/') {
			reportEvent('onboarding_completed', { timestamp: Date.now() });
		}
		navigate(nextPath);
	};

	return (
		<div className="step-wrapper">
			<div className="pt-6 text-center">
				<h2 className="text-3xl font-semibold mb-4">{header}</h2>
				<div style={{ minHeight: '700px' }} className="relative">
					{isLoading && (
						<div className="absolute inset-0 flex items-center justify-center text-xl">
							Some fancy gradient css loader here...
						</div>
					)}
					<video
						key={id}
						autoPlay
						loop
						muted
						playsInline
						className={`w-full h-auto ${isLoading ? 'hidden' : ''}`}
						controls={false}
						style={{ maxHeight: '700px' }}
						onLoadedData={() => setIsLoading(false)}
					>
						<source src={embedUrl} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
				<button
					style={{ minWidth: '325px' }}
					className="mt-4 bg-black text-white rounded-md px-4 py-2 hover:bg-gray-800"
					onClick={handleNext}
				>
					{nextPath === '/' ? 'Back to Home' : 'Next'}
				</button>
			</div>
		</div>
	);
};

export default Step;
