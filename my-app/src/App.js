import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'




const singer= {


  name:'Abdus_Shobhan',
  job:'Software Engineer'
}

const singerStyle={

  color:'purple',
  backgroundColor:'white'
}
function App() {
  const nayoks=['Abdus_Shobhan','SakibKhan','Rublel Khan','Abdus_Shobhan','sakibAlhassan'];
const product=[

  {name:'Laptop',price:'45000'},
  {name:'Destop',price:'85000'},
  {name:'Destop',price:'45000'},
  {name:'Destop',price:'45000'}
  
]
const studentData=[


  {name:'abdus_shobhan',subject:'Computer Science & Engineering',Inst:'DUET'},
  {name:'SadikurRahman',subject:'Mechenical Engineering',Inst:'RUET'},
  {name:'salman',subject:'Civil Engineering',Inst:'BUET'},
  {name:'SadikurRahman',subject:'Mechenical Engineering',Inst:'RUET'},
]



 

  
  
 
  // 
  return (
    <div className="App">   
{

  nayoks.map(nayok=><Data name= {nayok}></Data>)
  
}
{
  product.map(products=> <Product name ={products.name} price={products.price}></Product>)
}
{
  studentData.map(studnet=> <Student name={studnet.name} subject={studnet.subject} inst={studnet.Inst} ></Student> )
}


     
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="Container">
            <h3>Hay!! DaDU React How are You??</h3>
            
        </div>
        <div className="music">
       
          <h3 style={singerStyle}> Name: {singer.name}</h3>
          <p>JOb: {singer.job}</p>

          <Friend></Friend> <br/>
          <Friend></Friend>
          <Friend></Friend>
          <Friend></Friend>
          <Friend></Friend>
          <h5>New component add YEAH!!</h5>
           <Data name={nayoks[0]} job="Software Engineer"></Data>
          <Data name= {nayoks[1]} job="Teacher" ></Data>
          <Data name={nayoks[2]} job="Actor"></Data>
          <Data name= {nayoks[3]} job="Software Engineer"></Data> 
          <h4>new component</h4>

          <Product name="Laptop" price="$1500"></Product>

          <p>New Element add</p>

          <Count></Count>

          <p>New one's</p>
         <Student></Student>
         
         <Externaluser></Externaluser>
        </div>

      
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


function Friend(){
 

 return(

    
<div className='newelement'>

       <h2> Name: Sakib Al Hassan (Sakib)</h2>
       <p>Profession: Cricket</p>
</div>
  
  )
}

function Data(prom){
  console.log(prom);
  
   

    
    return(

      <div className="newelement">

        <h3>Name:  {prom.name}</h3>
        <p>Profession: {prom.job}</p>
      </div>
    )


}

function Product(prom){
console.log(prom);

  return(


    <div className="Container">
      <h3>Name: {prom.name}</h3>
      <p>Price: {prom.price} </p>
    </div>
  )
}
// new concept add to react neative......


function Count(){


   const [count,setCount] = useState(1); //set count function 
  

     const  increaseCount = ()=>{
   
            const newCount= count+1;
            setCount(newCount);
            


   }
   const decreaseCount= ()=>setCount(count-1);
   const decreaseCount1 =()=> setCount(count-2);
  //  console.log(count);
  return(
    <div >
            <h2>Count:{count} {setCount}</h2>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={decreaseCount1}>Decrease2</button>
    </div>


 
  )
}

function Student(prom){
  console.log(prom);

    return(

    <div className='Container'>
    <h3>Name: {prom.name}</h3>
    <h4>SubjectName: {prom.subject}</h4>
    <p>Institute: {prom.inst} </p>


    </div>
    )



}

function Student1(props){


  return (

    <div className='newelement'>
          <h3>Name: {props.name}</h3>
          <h4>Email: {props.email}</h4>
          <p>Suite: {props.sutted}</p>
      </div>
  )
}

function Externaluser(){

  const [user,setUsers] = useState([]);
  useEffect(()=>{
  const url= 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(response => response.json())
    .then(data=> setUsers(data))
  },[])


  return (

    <div>
         <h2>External User</h2>
         <p>{user.length}</p>
         {
          user.map(users=><Student1 name={users.name} email={users.email} sutted={users.suite}></Student1> )
         }
    </div>
  )
}


export default App;
