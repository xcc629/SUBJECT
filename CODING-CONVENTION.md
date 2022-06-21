# 코딩 컨벤션 

## 코드 스타일
- 제공된 eslint, prettier 사용
- 규칙: [참고](https://github.com/titicacadev/eslint-config-triple)

## 코드 네이밍

- 변수

  변수명: 카멜케이스 사용
  <br/>
  작명: 명사 / 예외: boolean 값 
  
<br/>
  
- 함수 

  함수명: 카멜케이스 사용
  <br/>
  작명: 동사로 시작

<br/>
  
- 컴포넌트

  컴포넌트명: 파스칼케이스 사용
  
  - atoms: 
    - 구분 기준: 1개의 기능을 하는 가장 작은 단위 
    - 이름: 기능으로 이름 붙임
  
  - organisms : 
    - 구분 기준: 2개 이상의 작은 기능의 합
    - 이름: 담당 부분(ex.header, footer) + Section
  
  - pages:
    - 이름: page를 나타내는 디렉토리 내부의 index로 고정
    
<br/>
  
- 디렉토리 명

  카멜케이스 사용(camelCase), 복수형
  
<br/>
  

## 컴포넌트 룰

- css 스타일 순서

1.  Layout Properties (1. display 2. position 3. float 4.clear)

        : display : flex 속성의 경우 같은 순서에 써준다.

2.  Box Model Properties (1.width 2.height 3.margin 4.padding 5.box-sizing)

    : margin, padding의 경우 축약 속성 먼저 오도록

3.  Visual Properties (1. border 2. background 3.box-shadow )

4.  Typography Properties (1. color 2. font-family 3.font-size 4.font-weight 5. line-height 6.text-align 7.text-transform)

5.  Misc Properties (1. cursor 2. overflow 3. z-index)

6.  animations (transform, transition)

7.  가상 선택자

- Props 표기 순서

  - 1. basic props
       1. id
       2. key
       3. class
    2. style props

       css 속성 표기 순서에 따름

    3. event props
       1. 기본적인 events (onClick, onChange 등)
       2. 커스텀 events

