import { styled } from '@linaria/react';

export const PageCenterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: black;
  font-family: 'Courier New', Courier, monospace;
  min-height: 100vh;
`;

export const MainContainer = styled.div`
	background-color: var(--bg-main);
  color: var(--color-foreground);
	padding: 1rem;
`;
