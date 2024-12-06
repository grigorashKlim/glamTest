import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-blue-50">
			<h1 className="text-4xl font-bold mb-4">Welcome to Our Onboarding Funnel</h1>
			<button
				className="bg-black text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-800"
				onClick={() => navigate('/onboarding/step1')}
			>
				Get Started
			</button>
		</div>
	);
};

export default LandingPage;
