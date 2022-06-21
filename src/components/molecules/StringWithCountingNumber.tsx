import styled from "styled-components";

import BaseProps from "../../types/BaseProps";
import CountingNumber, { CountingNumberProps } from "../atoms/CountingNumber";

export interface StringWithCountingNumberProps extends BaseProps {
  number: CountingNumberProps["number"];
  unit: string;
}

const StringWithCountingNumberStyled = styled.div`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.fontsSize.l};
  letter-spacing: -1px;
`;

const CountingNumberWrapper = styled.strong`
  font-weight: bold;
`;

export default function StringWithCountingNumber({
  number,
  unit,
  children,
  ...rest
}: StringWithCountingNumberProps) {
  return (
    <StringWithCountingNumberStyled {...rest}>
      <CountingNumberWrapper>
        <CountingNumber number={number} />만 {unit}
      </CountingNumberWrapper>
      {children}
    </StringWithCountingNumberStyled>
  );
}
