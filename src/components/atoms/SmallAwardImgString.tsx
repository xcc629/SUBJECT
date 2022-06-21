import styled from "styled-components";

import BaseProps from "../../types/BaseProps";

export interface AwardImgStringProps extends BaseProps {
  imgUrl: HTMLImageElement["src"];
}

const AwardImgStringStyled = styled.div<Pick<AwardImgStringProps, "imgUrl">>`
  height: 54px;
  margin-right: 39px;
  padding: 5px 0px 5px 62px;
  background-position: left top;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: 54px 54px;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.color.gray800};
  font-size: ${({ theme }) => theme.fontsSize.m};
  font-weight: bold;
  line-height: 22px;
`;

export default function AwardImgString({
  imgUrl,
  ...rest
}: AwardImgStringProps) {
  return <AwardImgStringStyled imgUrl={imgUrl} {...rest} />;
}
