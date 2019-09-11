import styled from 'styled-components';
import { lighten } from 'polished';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	width: 100%;
	@media(max-width: 1020px){
		grid-template-columns: 1fr 1fr 1fr;

	}
	@media(max-width: 640px){
		grid-template-columns: 1fr;

	}

`;
export const Box = styled.div`
	
	display: flex;
	flex-direction: column;
	justify-content:center;
	align-items: center;
	height: 200px;
	width: 100%;
	background: ${props => lighten(props.color, '#1C4964')};
	span {
		color: #fff;
		font-size: 20px;
	}

`

