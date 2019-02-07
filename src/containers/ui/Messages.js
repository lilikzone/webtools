import React from 'react';
import Message from '../../components/ui/messages/messages';
import {Row, Col} from 'react-flexbox-grid';
import {typography} from 'material-ui/styles';
import {grey600} from 'material-ui/styles/colors';

const styles = {
  row: {
    marginBottom: 15,
  },
  breadcrumb: {
    fontSize: 15,
    fontWeight: typography.fontWeightLight,
    color: grey600,
    paddingBottom: 15,
    display: 'block',
  },
};

const Page = () => {
  return (
    <div>
      <h3 style={styles.breadcrumb}>User Interfaces / Messages</h3>
      <Row style={styles.row}>
        <Col xs={12} md={6} lg={6}>
          <Message
            zdepth={1}
            color="positive"
            header="Positive Message Box"
            message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
          />
          <Message
            zdepth={1}
            color="negative"
            header="Negative Message Box"
            message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
          />
          <Message
            zdepth={1}
            color="info"
            header="Info Message Box"
            message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
          />

        </Col>
        <Col xs={12} md={6} lg={6}>
          <Message
            zdepth={1}
            color="warning"
            header="Warning Message Box"
            message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
          />
          <Message
            zdepth={1}
            color="error"
            header="Error Message Box"
            message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
          />
          <Message
            zdepth={1}
            color="success"
            header="Success Message Box"
            message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
          />

        </Col>
      </Row>
      <Row style={styles.row}>
        <Col xs={12} md={6} lg={6}>
          <Message
            zdepth={1}
            color="icon red"
            header="Red Iconed Message Box"
            message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
            icon="attach_file"
          />
          <Message
            zdepth={1}
            color="icon orange"
            header="Orange Iconed Message Box"
            message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
            icon="attach_money"
          />
          <Message
            zdepth={1}
            color="icon yellow"
            header="Yellow Iconed Message Box"
            message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
            icon="bug_report"
          />
          <Message
            zdepth={1}
            color="icon olive"
            header="Olive Iconed Message Box"
            message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
            icon="child_friendly"
          />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Message
            zdepth={1}
            color="icon green"
            header="Green Iconed Message Box"
            message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
            icon="content_cut"
          />
          <Message
            zdepth={1}
            color="icon blue"
            header="Blue Iconed Message Box"
            message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
            icon="directions_walk"
          />
          <Message
            zdepth={1}
            color="icon teal"
            header="Teal Iconed Message Box"
            message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
            icon="done_all"
          />
          <Message
            zdepth={1}
            color="icon violet"
            header="Violet Iconed Message Box"
            message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
            icon="extension"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Message
            zdepth={1}
            color="icon pink"
            header="Pink Iconed Message Box"
            message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
            icon="filter_vintage"
          />
          <Message
            zdepth={1}
            color="icon brown"
            header="Brown Iconed Message Box"
            message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
            icon="hearing"
          />
          <Message
            zdepth={1}
            color="icon purple"
            header="Purple Iconed Message Box"
            message="Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
            icon="language"
          />

        </Col>

      </Row>
    </div>
  );
};

export default Page;
