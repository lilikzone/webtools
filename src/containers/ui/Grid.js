import React from 'react';
import globalStyles from '../../styles';
import {color} from '../../themes/theme';
import Paper from 'material-ui/Paper';
import {Row, Col} from 'react-flexbox-grid';

const style = {
  paper: {
    background: color.russian_green,
    height: 50,
    marginBottom: 15,
    padding: 0,

  },
  paper_large: {
    background: color.russian_green,
    height: 100,
    marginBottom: 15,
    padding: 0,
  },
  text: {
    fontWeight: 300,
    color: 'white',
    padding: '15px 5px',
  },
};

const GridPage = () => {
  return (
    <div>
      <h3 style={globalStyles.navigation}>User Interfaces / Grid</h3>
      <h3>Responsive</h3>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Paper style={style.paper} />
        </Col>

      </Row>
      <Row >
        <Col xs={6} md={6} lg={6}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={6} md={6} lg={6}>
          <Paper style={style.paper} />
        </Col>

      </Row>
      <Row >
        <Col xs={4} md={4} lg={4}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={4} md={4} lg={4}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={4} md={4} lg={4}>
          <Paper style={style.paper} />
        </Col>

      </Row>
      <Row >
        <Col xs={3} md={3} lg={3}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={3} md={3} lg={3}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={3} md={3} lg={3}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={3} md={3} lg={3}>
          <Paper style={style.paper} />
        </Col>

      </Row>
      <Row >
        <Col xs={2} md={2} lg={2}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={2} md={2} lg={2}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={2} md={2} lg={2}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={2} md={2} lg={2}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={2} md={2} lg={2}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={2} md={2} lg={2}>
          <Paper style={style.paper} />
        </Col>
      </Row>
      <h3>Fluid</h3>
      <Row>
        <Col xs={6} sm={3} md={2} lg={1}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={3} sm={6} md={8} lg={10}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={3} sm={3} md={2} lg={1}>
          <Paper style={style.paper} />
        </Col>
      </Row>
      <Row >
        <Col xs={3} sm={3} md={2} lg={2}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={3} sm={6} md={8} lg={8}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={6} sm={3} md={2} lg={2}>
          <Paper style={style.paper} />
        </Col>
      </Row>
      <h3>Auto Width</h3>
      <Row>
        <Col xs={true}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={true}>
          <Paper style={style.paper} />
        </Col>
      </Row>
      <Row>
        <Col xs={true}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={true}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={true}>
          <Paper style={style.paper} />
        </Col>
      </Row>
      <h3>xsOffset <small>example: xsOffset={11} xs={1}</small></h3>
      <Row>
        <Col xsOffset={11} xs={1}>
          <Paper style={style.paper} />
        </Col>

        <Col xsOffset={10} xs={2}>
          <Paper style={style.paper} />
        </Col>
        <Col xsOffset={9} xs={3}>
          <Paper style={style.paper} />
        </Col>
        <Col xsOffset={8} xs={4}>
          <Paper style={style.paper} />
        </Col>
        <Col xsOffset={7} xs={5}>
          <Paper style={style.paper} />
        </Col>
        <Col xsOffset={6} xs={6}>
          <Paper style={style.paper} />
        </Col>
        <Col xsOffset={5} xs={7}>
          <Paper style={style.paper} />
        </Col>
        <Col xsOffset={4} xs={8}>
          <Paper style={style.paper} />
        </Col>
        <Col xsOffset={3} xs={9}>
          <Paper style={style.paper} />
        </Col>
        <Col xsOffset={2} xs={10}>
          <Paper style={style.paper} />
        </Col>
        <Col xsOffset={1} xs={11}>
          <Paper style={style.paper} />
        </Col>
        <Col xs={12}>
          <Paper style={style.paper} />
        </Col>
      </Row>
      <h3>Flexbox Aligment</h3>
      <Row>
        <Col xs={12}>
          <Row start="xs">
            <Col xs={6}><Paper style={style.paper} /></Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={6}><Paper style={style.paper} /></Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Row end="xs">
            <Col xs={6}><Paper style={style.paper} /></Col>
          </Row>
        </Col>
      </Row>

      <Row top="xs">
        <Col xs={6}><Paper style={style.paper_large} /></Col>
        <Col xs={6}><Paper style={style.paper} /></Col>
      </Row>
      <Row middle="xs">
        <Col xs={6}><Paper style={style.paper_large} /></Col>
        <Col xs={6}><Paper style={style.paper} /></Col>
      </Row>
      <Row bottom="xs">
        <Col xs={6}><Paper style={style.paper_large} /></Col>
        <Col xs={6}><Paper style={style.paper} /></Col>
      </Row>

      <h3>Distribution .Around</h3>
      <Row around="xs">
        <Col xs={2}><Paper style={style.paper} /></Col>
        <Col xs={2}><Paper style={style.paper} /></Col>
        <Col xs={2}><Paper style={style.paper} /></Col>
      </Row>
      <h3>Distribution .Between</h3>
      <Row between="xs">
        <Col xs={2}><Paper style={style.paper} /></Col>
        <Col xs={2}><Paper style={style.paper} /></Col>
        <Col xs={2}><Paper style={style.paper} /></Col>
      </Row>
    </div>
  );
};

export default GridPage;
