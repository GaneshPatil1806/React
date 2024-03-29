import { useState } from 'react'

import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useInfo';

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const data = useCurrencyInfo(from);
  const options = Object.keys(data);

  const convert = () => {
      if (data) {
        const converted = data[to] * amount;
        setConvertedAmount(converted);
      }
  };

  const swap = () =>{
      setFrom(to)
      setTo(from)
      setConvertedAmount(amount)
      setAmount(convertedAmount)
  }

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundSize: 'cover'
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox 
                  label='From'
                  amount={amount}
                  currencyOptions={options}
                  selectCurrency={from}
                  onAmountChange={(amount)=>setAmount(amount)}
                  onCurrencyChange={(currency)=> setFrom(currency)}
                />
    
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
              <InputBox 
                  label='To'
                  amount={convertedAmount}
                  selectCurrency={to}
                  currencyOptions={options}
                  onCurrencyChange={(currency)=> setTo(currency)}
                  onAmountChange={(amount)=>setAmount(amount)}
                />

              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
