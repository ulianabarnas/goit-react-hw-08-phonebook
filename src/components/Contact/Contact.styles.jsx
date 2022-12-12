import styled from 'styled-components';
import { FaPhoneAlt } from 'react-icons/fa';

import { Button } from 'shared/Button/Button.styles';

export const Icon = styled(FaPhoneAlt)`
  margin-right: ${p => p.theme.space[3]}px;
`;

export const CloseButton = styled(Button)`
  display: flex;
  align-items: center;
  width: auto;
  text-align: right;
  margin-top: 0;
  margin-left: auto;
`;
