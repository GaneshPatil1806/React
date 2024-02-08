import { useId } from "react"


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    amountDisable,
    currencyDisable
}) {

    const amountId = useId();
    // used for creating diff id

    return (
        <>
            <div className="bg-white p-3 rounder-lg text-sm">
                <div className="w-1/2">
                    <label 
                        className="text-black mb-2 inline-block"
                        htmlFor={amountId} 
                    />
                    <input 
                        className='mx-3'
                        id={amountId} 
                        type='number'   
                        placeholder="Amount"
                        value={amount}
                        disabled={amountDisable}
                        onChange={(e)=>{ onAmountChange && onAmountChange(Number(e.target.value))}}
                    />
                </div>

                <div className="w-1/2 flex flex-wrap justify-end text-right">
                    <p>Currency Type</p>
                    <select>
                        {currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}


export default InputBox