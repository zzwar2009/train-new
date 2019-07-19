import React,{useState,useRef,memo,useMemo,useCallback} from 'react';

function SubCounter({onClick,data}){
  console.log('SubCounter render');
  return (
      <button onClick={onClick}>{data.number}</button>
  )
}
//把此组件传递给memo之后，就会返回一个新的组件,新组件有了一个功能，如果属性不变，则不重新渲染
SubCounter = memo(SubCounter);
let oldData,oldAddClick;
function Counter6(props){
  console.log('Counter6 render');
  const [name,setName]= useState('计数器');
  const [number,setNumber] = useState(0);
  const data = useMemo(()=>({number}),[number]);
  console.log('data===oldData ',data===oldData);
  oldData=data;
  const addClick = useCallback(()=>{
      setNumber(number+1);
  },[number])
  console.log('addClick===oldAddClick ',addClick===oldAddClick);
  oldAddClick=addClick;
  return (
      <>
         <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
         <SubCounter data={data} onClick={addClick}/>
      </>
  )
}
export default Counter6;
