import styled from 'styled-components';

const StyledMainContainer = styled.div`
	width: 840px;
	height: 651px;
	background-color: white;
	border-radius: 24px 24px 200px 24px;
	margin-left: auto;
	margin-right: auto;
	padding: 2rem;
`;
const StyledHeader = styled.div`
	display: flex;
	gap: 2rem;
`;
const StyledInputContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
const StyledInput = styled.input`
	padding: 0.5rem;
	font-size: 1.5rem;
	font-weight: 800;
	width: 160px;
	border-radius: 0.5rem;
	border: 1px solid black;
	:focus {
		outline: none;
	}
`;
const StyledButtonContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	padding: 0px;
	width: 728px;
	height: 96px;
	&::after {
		content: '';
		position: absolute;
		height: 1px;
		width: calc(100% - 96px);
		background-color: black;
		top: 50%;
		left: 0;
	}
`;
const StyledImgContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 0px;
	gap: 8px;
	width: 96px;
	height: 96px;
	background: #854dff;
	border-radius: 216px;
	cursor: pointer;
`;

const StyledImg = styled.img`
	width: 44px;
	height: 44px;
`;

const StyledBigText = styled.p`
	font-family: 'Poppins';
	font-style: italic;
	font-weight: 800;
	font-size: 104px;
	line-height: 110%;
	color: #151515;
	margin: 0;
`;
const StyledSpanText = styled.span`
	font-family: 'Poppins';
	font-style: italic;
	font-weight: 800;
	font-size: 104px;
	line-height: 110%;
	color: #854dff;
	margin: 0;
`;

export {
	StyledHeader,
	StyledInput,
	StyledInputContainer,
	StyledMainContainer,
	StyledImgContainer,
	StyledImg,
	StyledButtonContainer,
	StyledBigText,
	StyledSpanText
};
