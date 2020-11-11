import { useState, useCallback, useEffect } from "react"

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const handleToggle = () => setState(!state);

  return [state, handleToggle];
}

export const useVisible = (initial = false) => {
  const [visible, setVisible] = useState(initial);

  const hide = useCallback(() => setVisible(false), []);
  const show = useCallback(() => setVisible(true), []);

  return [visible, hide, show];
};

export const useCountDown = (timeout = 59) => {
  const [expiredTime] = useState(Math.round(Date.now() / 1000) + timeout);
  const [remainTime, setRemainTime] = useState(expiredTime - Math.round(Date.now() / 1000));

  useEffect(() => {
    const timer = setTimeout(() => {
      const diff = expiredTime - Math.round(Date.now() / 1000);
      if (diff < 0) {
        if (remainTime !== 0) {
          setRemainTime(0);
        }
        return;
      }

      setRemainTime(diff);
    }, 1000);
    return () => clearTimeout(timer);
  }, [remainTime, expiredTime]);

  return remainTime;
};
