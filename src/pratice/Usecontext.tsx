import React, { createContext } from 'react'



export const abhiContext=createContext()


export const AbhiProvider = ({ children }) => {
    const contextValue = { myname: "abhishek" };
    return (
      <abhiContext.Provider value={contextValue}>
        {children}
      </abhiContext.Provider>
    );
  };
  

// function Usecontext() {
    


//   return (
//     <div>Usecontext</div>
//   )
// }

// export default Usecontext