import React from 'react';
import Paper from 'material-ui/Paper';
import PageBase from '../../components/PaperBase';
import {Row, Col} from 'react-flexbox-grid';
const style = {
  height: 100,
  width: 100,
  margin: 17,
  textAlign: 'center',
  display: 'inline-block',
};
const imgPaperStyle = {
  height: 300,
  width: '100%',
};
const img = {
  height: 300,
  width: '100%',
  display: 'inline-block',
  borderRadius: 2,
  objectFit: 'cover',
};

const Box_Page = () => {
  return (

    <div>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <PageBase title="Basic Papers">
            <Paper style={style} zDepth={1} />
            <Paper style={style} zDepth={2} />
            <Paper style={style} zDepth={3} />
            <Paper style={style} zDepth={4} />
            <Paper style={style} zDepth={5} />
          </PageBase>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <PageBase title="Rounded False Papers">
            <Paper style={style} zDepth={1} rounded={false} />
            <Paper style={style} zDepth={2} rounded={false} />
            <Paper style={style} zDepth={3} rounded={false} />
            <Paper style={style} zDepth={4} rounded={false} />
            <Paper style={style} zDepth={5} rounded={false} />
          </PageBase>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <PageBase title="Circular Papers">
            <Paper style={style} zDepth={1} circle={true} />
            <Paper style={style} zDepth={1} circle={true} />
            <Paper style={style} zDepth={2} circle={true} />
            <Paper style={style} zDepth={3} circle={true} />
            <Paper style={style} zDepth={4} circle={true} />
            <Paper style={style} zDepth={5} circle={true} />
            <Paper style={style} zDepth={5} circle={true} />
            <Paper style={style} zDepth={4} circle={true} />
            <Paper style={style} zDepth={3} circle={true} />
            <Paper style={style} zDepth={2} circle={true} />
            <Paper style={style} zDepth={1} circle={true} />
            <Paper style={style} zDepth={1} circle={true} />

          </PageBase>
        </Col>

      </Row>

      <Row>
        <Col xs={12} md={3} lg={3}>

          <Paper zDepth={5} style={imgPaperStyle}><img style={img} src="./assets/images/people/7.jpg" /></Paper>

        </Col>
        <Col xs={12} md={3} lg={3}>

          <Paper zDepth={5} style={imgPaperStyle}><img style={img} src="./assets/images/people/10.jpg" /></Paper>

        </Col>
        <Col xs={12} md={3} lg={3}>

          <Paper zDepth={5} style={imgPaperStyle}><img style={img} src="./assets/images/people/12.jpg" /></Paper>

        </Col>
        <Col xs={12} md={3} lg={3}>

          <Paper zDepth={5} style={imgPaperStyle}><img style={img} src="./assets/images/people/11.jpg" /></Paper>

        </Col>
      </Row>

    </div>
  );
};

export default Box_Page;
