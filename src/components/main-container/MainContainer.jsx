import { useState } from 'react';
import { StyledHeader } from './styles';

const MainContainer = () => {
	const [age, setAge] = useState({
		days: 0,
		months: 0,
		years: 0
	});

	const dateObj = new Date();
	const currentYear = dateObj.getFullYear();
	const currentMonth = dateObj.getMonth();
	const currentDay = dateObj.getDate();
	let CurrentAge;

	return (
		<div>
			<StyledHeader>
				<div>
					<label htmlFor=''>DAY</label>
					<input type='text' />
				</div>
				<div>
					<label htmlFor=''>MONTH</label>
					<input
						onChange={e => setAge({ ...age, months: e.target.value })}
						type='text'
					/>
				</div>
				<div>
					<label htmlFor=''>YEAR</label>
					<input type='text' />
				</div>
			</StyledHeader>
			<button onClick={() => getMonth(age.months)}>GO!</button>
			<div>
				<p>{age.years}years</p>
				<p>{age.months}months</p>
				<p>{age.days}days</p>
			</div>
		</div>
	);
};

const getMonth = (value, currentMonth, setAge, age) => {
	setAge(age.month);
};

export default MainContainer;
