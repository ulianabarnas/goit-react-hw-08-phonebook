import styled from "styled-components";

export const Button = styled.button`
  display: block;
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.white};
  transition: all 100ms linear;
  background-color: ${p => p.theme.colors.primary};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
  }
`;