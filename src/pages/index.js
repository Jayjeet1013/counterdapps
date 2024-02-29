import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Counter from "../artifacts/contracts/Counter.sol/Counter.json";

const counterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export default function Home() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  const initContract = async () => {
    try {
      if (typeof window !== "undefined" && window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(counterAddress, Counter.abi, signer);
        return contract;
      } else {
        console.log("MetaMask not installed; using read-only defaults");
        const provider = ethers.getDefaultProvider();
        const contract = new ethers.Contract(counterAddress, Counter.abi, provider);
        return contract;
      }
    } catch (error) {
      console.error("Error initializing contract:", error);
    }
  };

  const setCountHandler = async () => {
    try {
      const contract = await initContract();
      const result = await contract.setCount(count);
      await result.wait();
      console.log(result);
    } catch (error) {
      console.error("Error setting count:", error);
    }
  };

  const getCountHandler = async () => {
    try {
      const contract = await initContract();
      const result = await contract.count();
      setCounter(parseInt(result.toString()));
      console.log(`Current count is ${parseInt(result.toString())}`);
    } catch (error) {
      console.error("Error getting count:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter Dapp</h1>
        <input
          placeholder="Enter counter value"
          type="number"
          className="text-black "
          onChange={(event) => setCount(parseInt(event.target.value))}
        />
        <button onClick={setCountHandler}>Set count</button>
        <br />
        <button onClick={getCountHandler}>Get count</button>
        <p>Counter value is {counter}</p>
      </header>
    </div>
  );
}
