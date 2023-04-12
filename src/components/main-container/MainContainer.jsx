import { useState } from 'react';
import {
	StyledBigText,
	StyledButtonContainer,
	StyledHeader,
	StyledImg,
	StyledImgContainer,
	StyledInput,
	StyledInputContainer,
	StyledMainContainer,
	StyledSpanText
} from './styles';

const MainContainer = () => {
	// const [age, setAge] = useState({
	// 	days: 0,
	// 	months: 0,
	// 	years: 0,
	// 	print: false
	// });
	const [year, setYear] = useState(0);
	const [month, setMonth] = useState(0);
	const [days, setDays] = useState(0);
	const [print, setPrint] = useState(false);

	const date = new Date();
	let birdthdayDay;
	let birdthdayMonth;
	let birdthdayYear;

	return (
		<StyledMainContainer>
			<StyledHeader>
				<StyledInputContainer>
					<label htmlFor=''>DAY</label>
					<StyledInput onChange={e => setDays(e.target.value)} type='text' />
				</StyledInputContainer>
				<StyledInputContainer>
					<label htmlFor=''>MONTH</label>
					<StyledInput onChange={e => setMonth(e.target.value)} type='text' />
				</StyledInputContainer>
				<StyledInputContainer>
					<label htmlFor=''>YEAR</label>
					<StyledInput onChange={e => setYear(e.target.value)} type='text' />
				</StyledInputContainer>
			</StyledHeader>
			<StyledButtonContainer>
				<StyledImgContainer
					onClick={() => {
						const birthday = new Date(`${month}/${days}/${year}`);
						console.log(birthday);
						const totalDays = diferenceBetweenDates(date, birthday);
						const totalTime = convertDays(totalDays);
						//updateTime(setAge, age, totalTime);
						setDays(totalTime.ageDays);
						setMonth(totalTime.ageMonths);
						setYear(totalTime.ageYears);
						setPrint(true);
					}}
				>
					<StyledImg src='/icon-arrow.svg' alt='' />
				</StyledImgContainer>
			</StyledButtonContainer>

			<div>
				<StyledBigText>
					<StyledSpanText>{print ? year : '0'}</StyledSpanText> years
				</StyledBigText>
				<StyledBigText>
					<StyledSpanText>{print ? month : '0'}</StyledSpanText>months
				</StyledBigText>
				<StyledBigText>
					{' '}
					<StyledSpanText>{print ? days : '0'}</StyledSpanText>days
				</StyledBigText>
			</div>
		</StyledMainContainer>
	);
};

const updateTime = (setAge, age, totalTime) => {
	setAge({ ...age, years: totalTime.ageYears });
	setAge({ ...age, months: totalTime.ageMonths });
	setAge({ ...age, days: totalTime.ageDays });
	console.log(totalTime, age);
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
	console.log(ageYears, ageMonths, ageDays);

	return { ageYears, ageMonths, ageDays };
};

export default MainContainer;
