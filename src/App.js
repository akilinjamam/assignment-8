
import './App.css';
import Watches from './Component/Watches/Watches';

function App() {
  return (
    <div className="App">
      <div className='single'>
        <h1>Watch Gallery</h1>
        <p>choose 4 Watches</p>
      </div>
      <Watches></Watches>
      <div style={{ border: '2px solid gray', margin: '20px', padding: '10px', borderRadius: '20px' }}>
        <h2>How does Reactjs work?</h2>
        <h3>React js is most popular library for javascript. When any state of object is changed in the jsx as well as in the component of react application, the virtual DOM get updated rather than updating with which is not updated. for this reason , react render more faster then other library. in a react. every code turn into object and keep it in the virtual DOM. then it compile the code and compare it  if any changes happened in the code. react basically a tree. which is able to do effecient diff computation in the nodees. react allows effeciently re-construct DOM in javascript and push only those changes in the DOM which is happened actually.Also react uses an effecient diff algorithm to compare the version of virtual DOM. Then it make sure that the changes of code updates are sent to the real DOM for re-renderring of the UI</h3>

        <h2>What is the difference between props and state?</h2>
        <h3>the state helps to changes the data in the component of jsx in react. throught  the state the information can be changed any time according to needs. this is actually heart of the react component. it identify the behaviour of the components and how it will renders. it can be modified only inside of the component. states hold the information of component.state can not access by child component.  state is internal and controlled by react itself. <br />
          on the othe hand, the props can not be changed , it only readable. the data passes from one component to another component. it is ana object which stores the values of attribute of a tag work similar to HTML attributes. it is similar to the fuction arguments. and it can pass function also. props can access by the child component. props are external and controlled by whatever renders the component. </h3>

      </div>

    </div>
  );
}

export default App;
