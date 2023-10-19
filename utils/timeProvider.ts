import { useState, useEffect } from 'react';


export default function dateProvider(): Date {

  const [date, setDate] = useState(new Date());

  useEffect(() => {

    const interval = setInterval(() => {
      setDate(new Date());
    },
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, []);
  return date;
}
