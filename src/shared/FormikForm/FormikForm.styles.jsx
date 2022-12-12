import styled from 'styled-components';
import { Field, Form } from 'formik';

import { Button } from 'shared/Button/Button.styles';

export const StyledForm = styled(Form)`
  width: 320px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  font-weight: ${p => p.theme.fontWeights.semibold};
  margin-top: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.text};
`;

export const Input = styled(Field)`
  width: 100%;
  font-size: ${p => p.theme.fontSizes.s};
  padding: ${p => p.theme.space[2]}px 4px;
  margin-top: 6px;
  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.text};
  border-radius: ${p => p.theme.radii.normal};
  box-sizing: border-box;
`;

export const StyledButton = styled(Button)`
   width: 100%;
   margin-top: ${p => p.theme.space[4]}px;
`