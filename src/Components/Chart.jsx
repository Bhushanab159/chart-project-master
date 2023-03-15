import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import "../style/chart.css"
import { useData } from './Constant';


const Chart = () => {

  const data = useData();
  // const data = tem.chartData;

  const op = {
    title: {
      text: 'chart-1'
    },
    series: [{
       type: "pie",
      data: [1, 2, 3, 10, 1, 20, 2 ],
    }
  ]
  }

  return (
    <div className='chart'>    
      <div className='left'>
       <HighchartsReact
      highcharts={Highcharts}
      options={op}
      
    />
      </div>
      <div className='right' >
    <Carousel>
    {
      data.chartData.map((val)=>{
        return(
          <div>
       <HighchartsReact
       highcharts={Highcharts}
       options={val}
       />
    </div>
        )
      })
    }
    
    </Carousel>
    </div>

    </div>


  )
}

export default Chart

