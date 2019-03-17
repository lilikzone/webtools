import React from 'react';
import ReactEcharts from 'echarts-for-react';
require('echarts/map/js/world.js');

const MapChart = React.createClass({
  propTypes: {
  },
  randomData() {
    return Math.round(Math.random() * 1000);
  },
  getOtion() {
    const option = {
      title: {
        text: 'Geo Locations',
        subtext: '',
        bottom: '20%',
      },
      color: ['#70d811', '#70deff', '#f99681'],
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['High Traffic', 'Medium Traffic', 'Low Traffic'],
      },
      visualMap: {
        show: false,
        min: 0,
        max: 2500,
        left: 'left',
        top: 'bottom',
        text: ['Min', 'Max'],
        calculable: true,
      },
      toolbox: {
        show: false,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          dataView: {readOnly: false},
          restore: {},
          saveAsImage: {},
        },
      },
      series: [
        {
          name: 'High Traffic',
          type: 'map',
          mapType: 'world',
          roam: false,
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: true,
            },
          },
          data: [
                        {name: 'Alaska', value: this.randomData()},
                        {name: 'Canada', value: this.randomData()},
                        {name: 'Russia', value: this.randomData()},
                        {name: 'China', value: this.randomData()},
                        {name: 'United States', value: this.randomData()},
                        {name: 'Australia', value: this.randomData()},
                        {name: 'Greenland', value: this.randomData()},
                        {name: 'Turkey', value: this.randomData()},
                        {name: 'Brazil', value: this.randomData()},
                        {name: 'France', value: this.randomData()},
                        {name: 'Germany', value: this.randomData()},
                        {name: 'Argentina', value: this.randomData()},
                        {name: 'India', value: this.randomData()},
                        {name: 'Algeria', value: this.randomData()},
                        {name: 'Iran', value: this.randomData()},
                        {name: 'Angola', value: this.randomData()},
                        {name: 'Egypt', value: this.randomData()},
                        {name: 'Indonesia', value: this.randomData()},
                        {name: 'Thailand', value: this.randomData()},
                        {name: 'Mexico', value: this.randomData()},
                        {name: 'Mali', value: this.randomData()},
                        {name: 'Romania', value: this.randomData()},
                        {name: 'Finland', value: this.randomData()},
                        {name: 'Poland', value: this.randomData()},
                        {name: 'Norway', value: this.randomData()},
                        {name: 'Sweden', value: this.randomData()},
                        {name: 'Switzerland', value: this.randomData()},
                        {name: 'Iceland', value: this.randomData()},
                        {name: 'Peru', value: this.randomData()},
                        {name: 'United Kingdom', value: this.randomData()},
                        {name: 'Spain', value: this.randomData()},
                        {name: 'Pakistan', value: this.randomData()},
                        {name: 'Japan', value: this.randomData()},
                        {name: 'Korea', value: this.randomData()},
          ],
        },
        {
          name: 'Medium Traffic',
          type: 'map',
          mapType: 'world',
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: true,
            },
          },
          data: [
                        {name: 'Alaska', value: this.randomData()},
                        {name: 'Canada', value: this.randomData()},
                        {name: 'Russia', value: this.randomData()},
                        {name: 'China', value: this.randomData()},
                        {name: 'United States', value: this.randomData()},
                        {name: 'Germany', value: this.randomData()},
                        {name: 'India', value: this.randomData()},
                        {name: 'Iran', value: this.randomData()},
                        {name: 'Angola', value: this.randomData()},
                        {name: 'Mexico', value: this.randomData()},
                        {name: 'Mali', value: this.randomData()},
                        {name: 'Finland', value: this.randomData()},
                        {name: 'Poland', value: this.randomData()},
                        {name: 'Sweden', value: this.randomData()},
                        {name: 'Iceland', value: this.randomData()},
                        {name: 'Peru', value: this.randomData()},
                        {name: 'United Kingdom', value: this.randomData()},
                        {name: 'Japan', value: this.randomData()},
                        {name: 'Korea', value: this.randomData()},
          ],
        },
        {
          name: 'Low Traffic',
          type: 'map',
          mapType: 'world',
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: true,
            },
          },
          data: [
                        {name: 'Alaska', value: this.randomData()},
                        {name: 'Canada', value: this.randomData()},
                        {name: 'Russia', value: this.randomData()},
                        {name: 'Sweden', value: this.randomData()},
                        {name: 'Pakistan', value: this.randomData()},
                        {name: 'Japan', value: this.randomData()},
                        {name: 'Korea', value: this.randomData()},
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
            style={{height: '500px', width: '100%'}}
            className="react_for_echarts"
          />

        </div>
      </div>
    );
  },
});

export default MapChart;
