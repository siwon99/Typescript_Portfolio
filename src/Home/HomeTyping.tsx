import React, { useEffect, useState } from 'react';

const HomeTyping: React.FC = () => {
  const [typehome, setTypeHome] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const hometxt = "Hi! I'm Siwon Kim \n 도전을 두려워하지 않고, \n 신속한 변화에 대처하며 함께 성장할 \n 프론트엔드 개발자입니다.";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (count < hometxt.length) {
        setTypeHome((prevText) => {
          const currentChar = hometxt[count];

          if (currentChar === '\n') {
            return prevText + '<br/>';
          } else {
            return prevText + currentChar;
          }
        });

        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(typingInterval);

        setTimeout(() => {
          setCount(0);
          setTypeHome("");
        }, 2000);
      }
    }, 150);

    return () => {
      clearInterval(typingInterval);
    };
  }, [count]);

  return <span className="text" dangerouslySetInnerHTML={{ __html: typehome }} />;
};

export default HomeTyping;