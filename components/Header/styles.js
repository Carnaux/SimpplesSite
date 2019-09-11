import styled from 'styled-components';
import { linearGradient } from 'polished';

export const Container = styled.div`
	width: 100%;
	height: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: linear-gradient(#1C4964,#3D6F87);
	h1 {
		color: #fff;
		font-size: 60px;
		font-weight: 300;
	}
	span {
		color: 	#EDEDEA;
		text-align: center;
	}
`;

