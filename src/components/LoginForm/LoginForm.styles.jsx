import { Field } from 'formik';
import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
`;
// export const Label = styled.label`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 16px;
// `;
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