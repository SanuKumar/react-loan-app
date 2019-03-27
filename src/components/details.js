import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Details extends Component {
       
    render() {
        const { data } = this.props;
		return (
            <div>
			<Row style={{ marginTop: '1rem' }} gutter={16}>
				<Col span={12} style={{ textAlign: 'right', fontWeight: 'bold' }}>Principal Amount: </Col>
				<Col span={12}>${data.principal.amount}</Col>
				<Col span={12} style={{ textAlign: 'right', fontWeight: 'bold' }}>Total Payments </Col>
				<Col span={12}>{data.numPayments} Months</Col>
				<Col span={12} style={{ textAlign: 'right', fontWeight: 'bold' }}>Monthly Installment </Col>
				<Col span={12}>${data.monthlyPayment.amount} / Months</Col>
				<Col span={12} style={{ textAlign: 'right', fontWeight: 'bold' }}>Interest Rate: </Col>
				<Col span={12}>{data.interestRate * 100} %</Col>
				<Col span={12} style={{ textAlign: 'right', fontWeight: 'bold' }}>Net Payable Amount </Col>
				<Col span={12}>${data.monthlyPayment.amount * data.numPayments} </Col>
            </Row>
        </div>
		);
	}
}

export default Details;