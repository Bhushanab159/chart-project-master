import React, { useState } from 'react'
import "../style/addform.css"
import { useData } from './Constant'

const AddForm = ({formShow, HandleForm}) => {

  const Data = useData();

  const [title, setTitle] = useState();
  const [type,setType] = useState("line");
  const [data, setData] = useState();


  const handleSubmit = () => {

    const arr = data.split(" ");

    const arr2= arr.map(element => {
        console.log(element)
       return Number(element)
    });

    console.log("aaaa", arr2)


    let obj = {
      title: {
        text : title,
      },
      series: [{
             type: type,
            data: arr2,
          }
        ]
    };

    Data.setChartData([obj, ...Data.chartData])
    setTitle("");
    setData("");
    HandleForm();
    
  }


  return (
<>    
{
  formShow ? <div className='addform' > 
  <h2> Add your Data </h2>
  <div className='input-div'>
    <input type="text" placeholder='Enter Chart Name' value={title} onChange={(e) => setTitle(e.target.value)} />
    <input type="text" placeholder='Enter chart type' value={type} onChange={(e) => setType(e.target.value)} />
    <input type="text" placeholder='Enter Chart Data Array with space' value={data} onChange={(e)=> setData(e.target.value)}/>

  </div>
  <div className='btn'>
  <button onClick={HandleForm} >Cancel</button>
  <button onClick={handleSubmit}>Submit</button>
  </div>

</div> : ""
}

    </>
  )
}

export default AddForm
