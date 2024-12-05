import React from 'react';
import { useNavigate } from 'react-router-dom';

const Step = ({ header, embedUrl, nextPath }) => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-50">
			<h2 className="text-2xl font-semibold mb-4">{header}</h2>
			<div>
				<iframe
					src={embedUrl}
					height={'600px'}
					className="rounded-md shadow-md"
					allow="autoplay"
					title="Onboarding Video"
				></iframe>
			</div>
			<button
				className="StepButton"
				onClick={() => navigate(nextPath)}
			>
				{ nextPath === '/' ? 'Back to Home' : 'Next' }
			</button>
		</div>
	);
};

export default Step;
