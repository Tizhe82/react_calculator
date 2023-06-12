import React, { createContext, useState } from 'react'

export const ContextCalc = createContext()
const ProviderCalc = ({children}) => {
    const [calc, calcSet] = useState({
        sign: "",
        num: 0,
        res: 0
    });

    const valueProvider = {
        calc, calcSet
    }
  return (
    <ContextCalc.Provider value = {valueProvider} >
        {children}
    </ContextCalc.Provider>
  )
}

export default ProviderCalc