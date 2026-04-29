import { useState } from "react";

const lottoNumbers = () => {
  const [generateLottoNumbers, serGenerateLottoNumbers] = useState<number[]>(
    [],
  );

  const handleLottoNumbers = () => {
    const newNumbers = Array.from(
      { length: 7 },
      () => Math.floor(Math.random() * 50) + 1,
    );
    serGenerateLottoNumbers(newNumbers);
  };
  return (
    <>
      <div>
        <ul>
          {generateLottoNumbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleLottoNumbers}>Generate lotto numbers</button>
    </>
  );
};

export default lottoNumbers;
