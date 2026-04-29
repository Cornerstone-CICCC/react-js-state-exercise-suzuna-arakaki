import { useState } from "react";

const lottoNumber = () => {
  const [generateLottoNumber, serGenerateLottoNumber] = useState<number>(0);

  const handleLottoNumbers = () => {
    const min = 1;
    const max = 50;
    serGenerateLottoNumber(Math.floor(Math.random() * (max - min)));
  };
  return (
    <>
      <div>[{generateLottoNumber}]</div>
      <button onClick={handleLottoNumbers}>Generate lotto numbers</button>
    </>
  );
};

export default lottoNumber;
