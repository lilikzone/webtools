import React from 'react';
import {
    BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend,
    ResponsiveContainer,
} from 'recharts';
const data = [
  {
    name: 'Mercedes',
    Roadholding: 5,
    Acceleration: 8,
    Economy: 6,
  }, {
    name: 'Audi',
    Roadholding: 3,
    Acceleration: 2,
    Economy: 5,
  }, {
    name: 'Bmw',
    Roadholding: 8,
    Acceleration: 7,
    Economy: 4,
  }, {
    name: 'Renault',
    Roadholding: 6,
    Acceleration: 6,
    Economy: 8,
  }, {
    name: 'Opel',
    Roadholding: 1,
    Acceleration: 6,
    Economy: 12,
  }, {
    name: 'Volvo',
    Roadholding: 9,
    Acceleration: 7,
    Economy: 5,
  }, {
    name: 'Ford',
    Roadholding: 10,
    Acceleration: 3,
    Economy: 4,
  },
];

const BarChart1 = React.createClass({
  render() {
    return (
      <div>
        <ResponsiveContainer minHeight={450}>
          <BarChart

            data={data}
            margin={{
              top: 25,
              right: 30,
              left: 10,
              bottom: 10,
            }}
          >
            <XAxis dataKey="name" />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Roadholding" fill="#64dd16" />
            <Bar dataKey="Acceleration" fill="#fd947e" />
            <Bar dataKey="Economy" fill="#b5b5fb" />

          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  },
});

export default BarChart1;
