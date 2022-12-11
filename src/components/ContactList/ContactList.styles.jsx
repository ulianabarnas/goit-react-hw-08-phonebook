import styled from 'styled-components';

export const List = styled.ul`
  text-align: left;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.s};

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
