import './App.css';
import { GetContext } from './context/CartContext';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from './components/Cards';
import CartItem from './components/CartItem';

function App() {
  const values = GetContext();
  console.log('The values are ', values);
  const {
    state: { products },
  } = GetContext();
  console.log(products);
  return (
    <div className="App">
      <>
        <Container>
          <Row>
            <Col lg="8">
              {products.map((prod) => (
                <Cards key={prod.id} productInfo={prod} />
              ))}
            </Col>
            <Col>
              <CartItem />
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}

export default App;
