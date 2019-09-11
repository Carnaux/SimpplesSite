import React from 'react';

import { Wrapper, Box } from './styles';

export default function Bar() {
	return (
		<Wrapper>
			<Box color={0.05}>
				<span>Simples</span>
			</Box>
			<Box color={0.1}>
				<span>Prático</span>
			</Box>
			<Box color={0.15}>
				<span>Barato</span>
			</Box>
			<Box color={0.05}>
				<span>Util</span>
			</Box>
			<Box color={0.1}>
				<span>Acessivel</span>
			</Box>
			<Box color={0.15}>
				<span>Desempenho</span>
			</Box>
		</Wrapper>
	);
}

