import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import AppBare from '../../components/appBar';
import {teal300, blue400} from 'material-ui/styles/colors';

const BurnedCalories = React.createClass({
  propTypes: {
  },
  getOtion() {
    const option = {
      backgroundColor: '#fff',
      title: {
        text: '',
        subtext: '',
        textStyle: {
          color: '#fff',
        },
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
      },
      toolbox: {
        show: false,
        feature: {
          saveAsImage: {
            title: 'Save',
          },
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisLine: {
          lineStyle: {
            color: blue400,
          },
        },
        axisLabel: {
          textStyle: {
            color: blue400,
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: blue400,
          },
        },
      },
      yAxis: {
        type: 'value',
        min: 400,
        max: 900,
        axisLine: {
          lineStyle: {
            color: blue400,
          },
        },
        axisLabel: {
          textStyle: {
            color: blue400,
          },
          formatter: '{value}',
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: blue400,
          },
        },
      },
      grid: {
        show: false,
        containLabel: true,
        left: '20',
        right: '20',
        top: '20',
        bottom: '10',

      },
      series: [
        {
          name: 'Burned Calories',
          type: 'line',
          smooth: true,
          showSymbol: false,
          symbol: 'circle',
          symbolSize: 7,
          lineStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [{
                offset: 0.3, color: blue400,
              }, {
                offset: 1, color: teal300,
              }], false),
              width: 5,
              borderWidth: 0,
              shadowBlur: 30,
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },

          },

          data: [650, 550, 800, 500, 750, 850, 750, 450, 650, 480, 520, 450],
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
            style={{height: '267px', width: '100%'}}
            className="react_for_echarts"
          />

        </div>
      </div>
    );
  },
});

export default BurnedCalories;
