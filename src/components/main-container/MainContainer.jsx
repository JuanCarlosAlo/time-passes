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
import { useAge } from '../../hooks/useAge';

const MainContainer = () => {
	const { age, getYears, getMonths, getDays, updateTime, print } = useAge();

	return (
		<StyledMainContainer>
			<StyledHeader>
				<StyledInputContainer>
					<label htmlFor=''>DAY</label>
					<StyledInput onChange={e => getDays(e.target.value)} type='text' />
				</StyledInputContainer>
				<StyledInputContainer>
					<label htmlFor=''>MONTH</label>
					<StyledInput onChange={e => getMonths(e.target.value)} type='text' />
				</StyledInputContainer>
				<StyledInputContainer>
					<label htmlFor=''>YEAR</label>
					<StyledInput onChange={e => getYears(e.target.value)} type='text' />
				</StyledInputContainer>
			</StyledHeader>
			<StyledButtonContainer>
				<StyledImgContainer onClick={() => updateTime()}>
					<StyledImg src='/icon-arrow.svg' alt='' />
				</StyledImgContainer>
			</StyledButtonContainer>

			<div>
				<StyledBigText>
					<StyledSpanText>{print ? age.years : '0'}</StyledSpanText> years
				</StyledBigText>
				<StyledBigText>
					<StyledSpanText>{print ? age.months : '0'}</StyledSpanText>months
				</StyledBigText>
				<StyledBigText>
					<StyledSpanText>{print ? age.days : '0'}</StyledSpanText>days
				</StyledBigText>
			</div>
		</StyledMainContainer>
	);
};

export default MainContainer;
