import React from 'react';
import Timeline from 'antd/lib/timeline';
import './recentVisitors.scss';
const timelinePage = () => <div>
  <Timeline>
    <Timeline.Item>
      <p>
        <a className="ui label tiny teal">Visitors</a>
      </p>
      <p>Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.
        Donec rutrum congue leo eget malesuada.</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>
        <a className="ui label tiny red">Visitors</a>
      </p>
      <p>Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus
        nibh. Curabitur aliquet quam id dui posuere blandit.</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>
        <a className="ui label tiny purple">Visitors</a>
      </p>
      <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
        quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada
        feugiat. Pellentesque in ipsum id orci porta dapibus.</p>
    </Timeline.Item>
    <Timeline.Item>
      <p>
        <a className="ui label tiny blue">Visitors</a>
      </p>
      <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum
        congue leo eget malesuada.</p>
    </Timeline.Item>
  </Timeline>
</div>;
export default timelinePage;
