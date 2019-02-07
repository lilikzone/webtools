import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts';
const data = [
    {subject: 'Math', A: 120, B: 110, C: 50},
    {subject: 'Chinese', A: 98, B: 130, C: 80},
    {subject: 'English', A: 86, B: 130, C: 60},
    {subject: 'Geography', A: 99, B: 100, C: 20},
    {subject: 'Physics', A: 85, B: 90, C: 90},
    {subject: 'History', A: 65, B: 85, C: 45},
];


const RadarChart1 = React.createClass({
  render() {
    return (
      <div>
        <ResponsiveContainer minHeight={450}>
          <RadarChart outerRadius={90} data={data}>
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#64dd16"
              fill="#64dd16"
              fillOpacity={0.6}
            />
            <Radar
              name="Lily"
              dataKey="B"
              stroke="#fd947e"
              fill="#fd947e"
              fillOpacity={0.2}
            />

            <PolarGrid />

            <PolarAngleAxis dataKey="subject" />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  },
});

export default RadarChart1;
