## 프로젝트 실행 방법

클론 후 `npm start` 하면 `localhost:3000`에 페이지가 나타납니다.

깃 클론 명령어

```
https://github.com/xcc629/SUBJECT.git
```

실행방법

```
npm start
```

<br/>

## 사용 기술과 선택한 이유

> 사용 기술: Typescript, React, Styled-component

- TypeScript 선택 이유

  정적 타입 언어인 타입스크립트로 정적 타입에서 오는 장점(컴파일에서 오류발견, 코드 편집기의 자동완성 기능 이용 등...)으로 생산성을 높이기 위해서 사용하였습니다.

- React 선택 이유

  반복하는 UI 재사용을 위하여, JS 프레임워크 리액트를 사용하였습니다.

- Styled-component 선택 이유
  js 안에서 css를 작성 할 수 있는 라이브러리 중 하나인 styled-component를 사용하였습니다. 자동으로 classname을 생성하고, props를 통하여 바로 Js의 값을 이용할 수 있다는 장점이 있어 선택하였습니다.

<br/>

## 과제 구현 목록

과제구현 계획 설정과 관리는 github에서 제공해주는 Issues 기능을 활용하였습니다.

### 처리 완료 한 이슈

> 주어진 과제를 개발 후 리팩토링을 맞췄습니다.

- [x] 전역 스타일 설정 및 테마 설정
- [x] UI 구현
- [x] Layout 구현
- [x] 리팩토링

<br/>

## 프로젝트 구조 설명

### 프로젝트 구조 캡쳐

![스크린샷 2022-06-26 오후 2 09 30](https://user-images.githubusercontent.com/85507868/175800291-942640b6-6d52-483c-8a11-51b16cbf8273.png)

### 아토믹 디자인 패턴 적용

![스크린샷 2022-06-26 오후 2 10 32](https://user-images.githubusercontent.com/85507868/175800334-d16cc141-cfd1-4fb2-9ef6-2773c67bbc77.png)

아토믹 디자인 패턴을 적용하여 프로젝트 규모에 적절하게 선정한 기준에 맞춰 디자인 분석 후 프로젝트 구조를 계획하였습니다.

        atoms:
            구분 기준: 1개의 기능을 하는 가장 작은 단위
            이름: 기능으로 이름 붙임

        molecules:
            구분 기준: 2개의 기능의 합
            이름: 기능으로 붙임

        organisms :
            구분 기준: 최소의 같은 기능 묶음으로 볼 수 있는 작은 단위의 합
            이름: 담당 부분(ex.header, footer) + Section

        pages:
            이름: page를 나타내는 디렉토리 내부의 index로 고정

## 시연 이미지

![화면 기록 2022-06-26 오후 2 12 52](https://user-images.githubusercontent.com/85507868/175800461-7a9d27ac-726d-4dfd-91e6-4513240487dd.gif)
gif 변환 오류로 실제보다 프레임이 떨어집니다.
