import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1020px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	div.row {
		padding: 20px 0;
		display: flex;
		border-bottom: 1px solid #ccc;
		align-items: center;
		&:nth-child(2){
			flex-direction: row-reverse;
		}
		div {
			margin: 0 10px;
			width: 50%;
			text-align: justify;

		}

		div.box {
			background: blue;
			display: block;
			height: 300px;
			border-radius: 4px;
		}
		@media(max-width: 1020px) {
			flex-direction: column-reverse !important;
			border: 0;
			div {
				width: 90%;
			}
			.box {
				margin-bottom: 15px;
			}
		}
		
	}
`;

