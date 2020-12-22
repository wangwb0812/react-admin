import React, { Component } from 'react';
import img from '../imgs/logo.png'
class GoodsImg extends Component {
  render() {
    return (
      <div>
        <img style={{ height: '50px' }} src={this.props.goodsInfo.imgurl} alt={this.props.goodsInfo.name} />
      </div>
    )
  }

}

export default GoodsImg