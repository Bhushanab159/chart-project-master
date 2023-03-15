import React, { createContext, useContext, useState } from 'react'

const Context = createContext();

export const useData = () => useContext(Context);

export const Constant = (props) => {

    const [chartData, setChartData] = useState([{
        title: {
          text: 'chart-1'
        },
        series: [{
           type: "column",
          data: [1, 2, 3, 10, 1, 20, 2 ],
        }
      ]
      }]);


  return (
    <div>
        <Context.Provider value={{chartData, setChartData }}>
            {props.children}
        </Context.Provider>

      
    </div>
  )
}

const DataContext = createContext();



