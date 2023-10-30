import logo from './logo.svg';
import './App.css';
import Name from './Name';
import Price from './Price'
import Description from './Description';
import Image from './Image';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import product from './product';
function App() {
  const firstName="";
  return (
    <div className="App">
      
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.imgURL} />
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
        <Description/><Price/>
        </Card.Text>
        
      </Card.Body>
    </Card>
    <h2>Hello, {firstName ? firstName : "there"}!</h2>
            {firstName && <Image />}
     
    </div>
  );
}

export default App;
