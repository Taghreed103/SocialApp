import { useState } from "react";
import { createContext } from "react";


 // eslint-disable-next-line react-refresh/only-export-components
 export   const CounterContext = createContext(0)
export default function CounterContextProvider({ children }) {
    const [counterMe, setCounterMe] = useState(0);

    function increase() {
        setCounterMe(counterMe + 1);
    }

    return (
        <CounterContext.Provider value={{ counterMe, increase }}>
            {children}
        </CounterContext.Provider>
    );
}


