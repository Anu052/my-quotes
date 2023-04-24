import React, { useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function App() {
  const [quotes,setQuotes]=useState("Demo Quotes");
  const handleQuote=async()=>{
    const res=await axios.get("https://api.quotable.io/random");
    setQuotes(res.data.content);
  }
  return (
    <div className='container' >
      <Card>
      <Card.Header>M-Quotes App</Card.Header>
      <Card.Body>
        <Card.Title>Life Change Quotes</Card.Title>
        <Card.Text>
          {quotes}
        </Card.Text>
        <Button variant="primary" onClick={handleQuote}>Next</Button>
      </Card.Body>
    </Card>
    </div>

  )
}

export default App