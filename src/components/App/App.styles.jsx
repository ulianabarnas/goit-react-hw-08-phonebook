import styled from 'styled-components';

export const Title = styled.h1`
  color: ${p => p.theme.colors.primary};
`;

export const Subtitle = styled.h2`
  color: ${p => p.theme.colors.white};
  letter-spacing: 0.02em;
`;

export const Message = styled.p`
  font-weight: ${p => p.theme.fontWeights.semibold};
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.secondary};
  color: white;
`;

export const Error = styled(Message)`
  background-color: ${p => p.theme.colors.bad};
`;
