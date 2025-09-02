import { use, useEffect, useState } from 'react'
import Header from './component/header/header';
import Body from './component/main/main';

export const URL="http://localhost:9000"
function App() {
  const [data, setdata] = useState(null)
  const [filterdata, setfilterdata] = useState(null)
  const [Loading, setLoading] = useState(null)
  const [SearchValue, setSearch] = useState(null)

  useEffect(() => {
  setLoading(true);
    async function loadData(){
    try{
      await fetch(URL).then(res=>res.json()).then(data=>{
        setdata(data);
        setfilterdata(data);
        console.log("data loaded");
        setLoading(false);
      }).catch(err=>{
        console.log(err);
      })
    }catch(err){
      console.log(err);
    }
  }

    loadData();

}, [])
useEffect(() => {

  Search();
}, [SearchValue])


function Search() {

  if(SearchValue==null || SearchValue=="") { 
   setfilterdata(data);
   return;
  }
  const filter=data.filter(item=>item.name.toLowerCase().includes(SearchValue.toLowerCase()))
  setfilterdata(filter);
}
function filterbtn(items) {

  if(items=="All") { 
   setfilterdata(data);
   return;
  }
  const filter=data.filter(item=>item.type.toLowerCase().includes(items.toLowerCase()))
  setfilterdata(filter);

}

if(Loading) {
  return <div>Loading...</div>
}

  return (
    <>
      <Header action={filterbtn} SearchValue={setSearch} />
      <Body loaddata={filterdata}>
        
      </Body>
      
    </>
  )
}

export default App
