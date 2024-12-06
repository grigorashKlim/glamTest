import React, { useEffect, useState } from 'react';

const Dashboard = () => {
	const [analyticsData, setAnalyticsData] = useState([]);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('analytics')) || [];
		setAnalyticsData(data);
	}, []);

	const onboardingCompletions = analyticsData.filter(event => event.eventName === 'onboarding_completed').length;

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>
			<div className="bg-gray-100 p-4 rounded shadow">
				<h2 className="text-xl font-semibold">Onboarding Completions</h2>
				<p className="text-3xl font-bold">{onboardingCompletions}</p>
			</div>
		</div>
	);
};

export default Dashboard;
