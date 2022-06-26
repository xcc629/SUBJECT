import * as React from "react";
import { useEffect, useState, useRef } from "react";

import BaseProps from "../../types/BaseProps";

export interface CountingNumberProps extends BaseProps {
  number: number;
}

export default function CountingNumber({
  number,
  ...rest
}: CountingNumberProps) {
  const [count, setCount] = useState<number>(0);
  const currentNumber = useRef() as React.MutableRefObject<HTMLSpanElement>;

  const plusUnit = (num: number) => {
    setCount((prev) => {
      if (prev < number) {
        prev += num;
      }
      return prev;
    });
  };

  const handleIntervalCountingSpeed = () => {
    const totalTimes = 2000;

    const units = {
      first:
        Math.ceil((number / 100) * 9) >= 4 ? 4 : Math.ceil((number / 100) * 9),
      middle: 1,
      last: 1,
    };

    const restCount = {
      middle: 30,
      last: 3,
    };

    const speeds = {
      middle: 15,
      last: 100,
    };

    // 초기속도: 마지막, 두번째 속도를 정한 후 역으로 계산.
    // 계산식  =  남은 시간 / 남은 개수 * 증가하는 수의 단위
    const firstSpeed =
      ((totalTimes -
        (restCount.last * speeds.last) / units.last -
        (restCount.middle * speeds.middle) / units.middle) /
        (number - restCount.middle)) *
      units.first;

    let interval = setInterval(() => {
      // restCount.middle 정도 남았을 때 속도 변경하여 setInterval 재호출
      if (
        number - Number(currentNumber.current.innerText) <=
        restCount.middle
      ) {
        clearInterval(interval);
        interval = setInterval(() => {
          // restCount.last 남았을때 속도 250으로 변경하여 setInterval 재호출
          if (
            number - Number(currentNumber.current.innerText) <=
            restCount.last
          ) {
            clearInterval(interval);
            interval = setInterval(() => {
              plusUnit(units.last);
            }, speeds.last);
          }
          plusUnit(units.middle);
        }, speeds.middle);
      }
      plusUnit(units.first);
    }, firstSpeed);

    // 2000ms 후 클리어
    setTimeout(() => {
      clearInterval(interval);
    }, totalTimes);
  };

  useEffect(() => {
    handleIntervalCountingSpeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span {...rest} ref={currentNumber}>
      {count}
    </span>
  );
}
