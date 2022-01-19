
import './App.css';

import Header from './components/Header';
import {useState, useEffect} from'react'
import axios from 'axios'
import PunkList from './components/PunkList';
import Main from './components/Main';
function App() {
  const [punkListData, setPunkListData]=useState([])
const [selectedPunk, setSelectedPunk]=useState(0)

  useEffect(() => {
  const getMyNfts= async () => {
    const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x8589160EC3053dD5649c83F6C06e6E774210b2B3&order_direction=asc')
    console.log(openseaData.data.assets);
    setPunkListData(openseaData.data.assets)
  }

 
  return getMyNfts()
  }, []);
  return (
    <div className='app'>
 <Header/>
 {punkListData.length >0 &&(
 <>
  <Main punkListData={punkListData} selectedPunk ={selectedPunk}/>

<PunkList punkListData ={punkListData} setSelectedPunk={setSelectedPunk}/>
  
 
 </>
 )}
 </div>
   
  );
}

export default App;
