import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
const VisitorStatus = React.createClass({
  propTypes: {},
  getOtion() {
    const option = {
      title: {
        text: 'Visitor Status',
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
          '08:45',
          '10:00',
          '11:15',
          '12:30',
          '13:45',
          '15:00',
          '16:15',
          '17:30',
          '18:45',
          '20:00',
          '21:15',
          '22:30',
          '23:45',
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
                                    color: '#a6a2f9',
                                  }, {
                                    offset: 1,
                                    color: '#F9564F',
                                  },
                                ], false),
              width: 5,
            },
          },
          data: [
            190,
            160,
            100,
            20,
            80,
            130,
            110,
            220,
            200,
            40,
            80,
            90,
            110,
            45,
            40,
            20,
            120,
            80,
            60,
            90,
          ],
        }, {
          name: 'A Few Visit',
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
                                    color: '#59d0fa',
                                  }, {
                                    offset: 1,
                                    color: '#F9564F',
                                  },
                                ], false),
              width: 5,
            },
          },
          data: [
            100,
            120,
            60,
            90,
            5,
            55,
            95,
            130,
            140,
            160,
            90,
            60,
            180,
            110,
            85,
            160,
            56,
            125,
            135,
            100,
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

export default VisitorStatus;
