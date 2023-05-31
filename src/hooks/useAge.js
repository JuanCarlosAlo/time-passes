import { useState } from 'react';

export const useAge = () => {
	const [age, setAge] = useState({
		days: 0,
		months: 0,
		years: 0
	});
	const date = new Date();
	const [print, setPrint] = useState(false);
	const birthday = new Date(`${age.months}/${age.days}/${age.years}`);

	const totalDays = diferenceBetweenDates(date, birthday);
	const totalTime = convertDays(totalDays);

	const getYears = ev => {
		setAge({ ...age, years: ev });
	};

	const getMonths = ev => {
		setAge({ ...age, months: ev });
	};

	const getDays = ev => {
		setAge({ ...age, days: ev });
	};

	const updateTime = () => {
		setAge({
			years: totalTime.ageYears,
			months: totalTime.ageMonths,
			days: totalTime.ageDays
		});
		setPrint(true);
		console.log(totalTime, age);
	};

	return {
		age,
		getYears,
		getMonths,
		getDays,
		updateTime,
		diferenceBetweenDates,
		convertDays,
		print
	};
};

const diferenceBetweenDates = (date, birthday) => {
	const milisecondsPerDay = 86400000;
	const milisecondsBetweenDays = date - birthday;
	const diferenceInDays = Math.floor(
		milisecondsBetweenDays / milisecondsPerDay
	);
	return diferenceInDays;
};

const convertDays = ageDays => {
	const ageYears = Math.floor(ageDays / 365);
	ageDays = ageDays % 365;
	const ageMonths = Math.floor(ageDays / 30);
	ageDays = ageDays % 30;

	return { ageYears, ageMonths, ageDays };
};
