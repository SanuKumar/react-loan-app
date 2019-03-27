import React, {  Component } from 'react';
import axios from 'axios';
import { Slider, Input, Form, Button, message } from 'antd';
import Details from './components/details';


class App extends Component {
  constructor(props){
    super(props)
        this.state = {
            data: {},
            isLoaded: false,
            amount: 500,
            months: 6
        }
}

onAmountChange = amount => {
  this.setState({ 
        amount 
    });
}

onMonthChange = e => {
  this.setState({ 
    months: + e.target.value 
  }); 
}

getDetails = e => {
  e.preventDefault();
  const url = `https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.amount}&numMonths=${this.state.months}`;
  axios.get(url)
    .then(res => {
      if (res && res.status === 200) {
        this.setState({
          data: res.data,
          isLoaded: true,
        })
      }
    })
    .catch(err => {
      message.error(err.message);
    });
}


  render() {
      const { data, isLoaded, amount, months } = this.state;
      return(
        <div className = 'main'>
          <h1 className="header">Loan Application</h1>
          <div style={{ width: '30%', padding: '2rem', margin: '0 auto' }}>
            <Form onSubmit={this.getDetails}>
            <Form.Item label="Loan Amount">
              <Slider
                min={500}
                max={5000}
                defaultValue={amount}
                step={100}
                marks={{ 500: '$500', 5000: '$5K' }}
                tipFormatter={(value) => { return `$ ${value}` }}
                onChange={this.onAmountChange}
              />
            </Form.Item>
            <Form.Item label="Total Months">
          <Input
            type="number"
            placeholder="Enter Months"
            defaultValue={months}
            onChange={this.onMonthChange}
          />
        </Form.Item>
        <Button type="primary" block htmlType="submit"> 
          GET DETAILS
        </Button>
      </Form>  
        {
          !!isLoaded &&
          <Details data={data} />
        }

        {
          !!isLoaded &&
          <Button onClick={() => this.setState({ isLoaded: false })}> Hide </Button>
        }
      </div>
      </div>
    );
  }
}

export default App;
