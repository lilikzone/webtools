import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
const EngagementRate = React.createClass({
  propTypes: {},
  getOtion() {
    const option = {
      title: {
        text: 'Engagement Rage',
        subtext: '',
        textStyle: {

          color: '#ccc',

        },
      },
      tooltip: {
        trigger: 'axis',
      },
      toolbox: {
        show: false,
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: [
          '00:00',
          '01:15',
          '02:30',
          '03:45',
          '05:00',
          '06:15',
          '07:30',

        ],
        axisLine: {
          show: false,
        },
        axisLabel: {

          textStyle: {
            color: '#ccc',
            fontWeight: 'bolder',
          },
        },

      },
      yAxis: {

        type: 'value',
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: '#ccc',
            fontWeight: 'bolder',
          },
        },
        axisLine: {
          show: false,
        },
      },
      grid: {
        show: false,
        containLabel: true,
        left: '10',
        right: '20',
        top: '50',
        bottom: '20',

      },
      series: [
        {
          name: 'First Visit',
          type: 'line',
          smooth: true,
          showSymbol: false,
          symbol: false,
          lineStyle: {
            normal: {
              color: new echarts
                                .graphic
                                .LinearGradient(0, 0, 1, 0, [
                                  {
                                    offset: 0.7,
                                    color: '#fd7869',
                                  }, {
                                    offset: 1,
                                    color: '#F9564F',
                                  },
                                ], false),
              width: 5,
            },
          },
          data: [
            30,
            75,
            30,
            120,
            30,
            170,
            80,


          ],
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
            style={{
              height: '450px',
              width: '100%',
            }}
            className="react_for_echarts"
          />

        </div>
      </div>
    );
  },
});

export default EngagementRate;
