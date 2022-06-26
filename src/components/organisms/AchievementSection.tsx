// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import styled, { keyframes } from "styled-components";

import BaseProps from "../../types/BaseProps";
import StringWithCountingNumber from "../molecules/StringWithCountingNumber";
import SmallAwardImgString from "../atoms/SmallAwardImgString";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AchievementSectionProps extends BaseProps {}

const flowAnimation = keyframes`
    0%{
        opacity: 0;
        transform:translateY(20px);
    }100%{
        opacity: 1;
        transform:translateY(0);
    }
`;

const AchievementSectionStyled = styled.section`
  display: grid;
  grid-template-columns: 400px auto;
  grid-template-rows: 148px auto;
  justify-content: center;
  min-width: 1200px;
  padding: 150px 0;
`;

const BigAwardImgStringWrapper = styled.div`
  grid-column: 1/2;
  grid-row: 1/3;
  width: 400px;
  height: 338px;
  padding-top: 280px;
  background-size: 400px 338px;
  background-image: url(${require("../../assets/imgs/triple2x.png")});
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.color.gray800};
  text-align: center;
  font-size: ${({ theme }) => theme.fontsSize.m};
  animation: ${flowAnimation} 700ms ease-in-out forwards;
  opacity: 0;
`;

const CountingNumberWrapper = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  margin-left: 223px;
  animation: ${flowAnimation} 700ms ease-in-out 100ms forwards;
  opacity: 0;
`;

const SmallAwardImgStringWrapper = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  display: flex;
  margin-top: 50px;
  margin-left: 223px;
  animation: ${flowAnimation} 700ms ease-in-out 200ms forwards;
  opacity: 0;
`;

export default function AchievementSection(props: AchievementSectionProps) {
  return (
    <AchievementSectionStyled {...props}>
      <BigAwardImgStringWrapper>2021년 12월 기준</BigAwardImgStringWrapper>
      <CountingNumberWrapper>
        <StringWithCountingNumber number={700} numberUnit="만" unit="명">
          의 여행자
        </StringWithCountingNumber>
        <StringWithCountingNumber number={100} numberUnit="만" unit="개">
          의 여행 리뷰
        </StringWithCountingNumber>
        <StringWithCountingNumber number={470} numberUnit="만" unit="개">
          의 여행 일정
        </StringWithCountingNumber>
      </CountingNumberWrapper>
      <SmallAwardImgStringWrapper>
        <SmallAwardImgString
          imgUrl={require("../../assets/imgs/play-store2x.png")}
        >
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </SmallAwardImgString>
        <SmallAwardImgString
          imgUrl={require("../../assets/imgs/badge-apple4x.png")}
        >
          2018 애플 앱스토어
          <br />
          오늘의 여행앱 선정
        </SmallAwardImgString>
      </SmallAwardImgStringWrapper>
    </AchievementSectionStyled>
  );
}
