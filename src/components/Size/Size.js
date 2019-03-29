import React from 'react';
import AddNewSize from '../AddNewSize';
import SizeTable from '../SizeTable';

class Size extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sizes: [],
    };

    this.onNewSizeAdded = this.onNewSizeAdded.bind(this);
  }
  
  //TODO: create cache to avoid calling everytime
  componentDidMount() {
    fetch('https://pizza-admin-api.herokuapp.com/product')
      .then((response) => response.json())
      .then((product) => {
        const sizes = product.filter(product => {
          if(product.type === "sizes") return product;
        })
        this.setState({
          sizes,
        });
      });
  }

  componentWillUnmount() {
    console.log("Size Unmount")
  }

  onNewSizeAdded(size) {
    const { sizes } = this.state;

    this.setState({
      sizes: [
        ...sizes,
        size,
      ],
    })
  }

  render() {
    const { sizes } = this.state;
    return (
      <div>
        <SizeTable sizes={sizes} />
        <br />
        <br />
        <AddNewSize onNewSizeAdded={this.onNewSizeAdded} />
      </div>
    )
  }
};

export default Size;