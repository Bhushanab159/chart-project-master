import React, {useState} from "react"
import "antd/dist/reset.css"
import './App.css';
import AddForm from "./Components/AddForm";
import Chart from "./Components/Chart";
import Header from "./Components/Header";


function App() {

  const [formShow,  setFormShow] = useState(false);

  console.log(formShow)

  const HandleForm = () => {
    setFormShow(!formShow);
  }  

  return (
    <div className="App" data-test="app-component">
        <Header HandleForm={HandleForm}/>
        <Chart />
        < AddForm formShow={formShow} HandleForm={HandleForm}/>
    </div>
  );
}

export default App;
