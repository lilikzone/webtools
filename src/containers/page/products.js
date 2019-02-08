import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import Data from '../../data';
import SemanticCard from '../../components/semanticui/products';


class ProductsPage extends React.Component {
  componentWillMount() {

  }

  render() {
    return (
      <div>

        <Row>
          {Data
                    .products
                    .items
                    .map((item) => <Col xs={12} md={2} lg={2} key={item.id}>
                      <SemanticCard
                        name={item.name}
                        date={item.date}
                        favcount={item.favcount}
                        description={item.description}
                        image={item.image}
                      />
                    </Col>)}

        </Row>
      </div>
    );
  }
}

export default ProductsPage;
