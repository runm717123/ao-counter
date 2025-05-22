import { styled } from '@linaria/react';

export const Input = styled.input`
	background-color: var(--bg-main);
	outline: 1px solid var(--color-foreground);
	&:focus {
		outline-width: 3px;
	}
`;
