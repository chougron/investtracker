import React from 'react'
import { LineChart, Line } from 'recharts';

export default class Graph extends React.Component {
  public render() {
    let data = [
      {date: "2018-01-01", price: 1052},
      {date: "2018-01-02", price: 940},
      {date: "2018-01-03", price: 1023},
      {date: "2018-01-04", price: 1121},
      {date: "2018-01-05", price: 1150},
      {date: "2018-01-06", price: 1235},
      {date: "2018-01-07", price: 1403},
      {date: "2018-01-08", price: 1654},
    ]
    return (
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    )
  }
}

