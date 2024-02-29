import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Counter from "../artifacts/contracts/Counter.sol/Counter.json";

const counterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export default function Home() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex justify-center items-center mt-20  ">
      <div>
        <div className="text-[32px] ">Counter Dapp</div>
        
      </div>
    </div>
  );
}
