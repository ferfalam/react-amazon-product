import classes from './App.module.css';
import ProductDetails from './productDetails/ProductDetails';
import ProductPreview from './productPreview/ProductPreview';
import TopBar from './TopBar/TopBar';
import { Component } from 'react';
import ProductData from './TopBar/ProductData';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentFeaturePos: 0
  }

  onClickColorChange = (pos) => {
    this.setState({currentPreviewImagePos : pos})
  }

  onClickFeatureChange = (pos) => {
    this.setState({currentFeaturePos : pos})
  }
    
  render() {
      return (
      <div className="App">
        <TopBar />
        <div className={classes.mainContainer}>
          <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} currentFeaturePos={this.state.currentFeaturePos} />
          <ProductDetails currentPreviewImagePos={this.state.currentPreviewImagePos} currentFeaturePos={this.state.currentFeaturePos}  data={this.state.productData} onClickColorChange={this.onClickColorChange} onClickFeatureChange={this.onClickFeatureChange} />
        </div>
      </div>
    );
  }
}

export default App;
