import React from 'react';
import ReactEcharts from 'echarts-for-react';
import {blue400, teal300} from 'material-ui/styles/colors';

const AreaChart = React.createClass({
  propTypes: {
  },
  getOtion() {
    const option = {
      color: [blue400, teal300],
      title: {
        text: '',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Mercedes', 'Audi', 'Bmw'],
      },
      toolbox: {
        show: false,
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'Mercedes',
          type: 'line',
          stack: 'Total',
          areaStyle: {normal: {}},
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'Audi',
          type: 'line',
          stack: 'Total',
          areaStyle: {normal: {}},
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'Bmw',
          type: 'line',
          stack: 'Total',
          areaStyle: {normal: {}},
          data: [150, 232, 201, 154, 190, 330, 410],
        },
      ],
    };
    return option;
  },
  render() {
    return (
      <div className="examples">
        <div className="parent">

          <ReactEcharts
            option={this.getOtion()}
            style={{height: '350px', width: '100%'}}
            className="react_for_echarts"
          />

        </div>
      </div>
    );
  },
});

export default AreaChart;
