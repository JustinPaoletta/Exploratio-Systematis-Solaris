import React from 'react';

class SpaceNews extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div className="spaceNews">
        <img src={this.state.spaceNews[0].featured_image}></img>
        <div className="articleContents">
          <div>{props.newsTwo}</div>
          <div>{props.newsThree}</div>
          <div className="bottomLine">
            <div>{props.newsFour}</div>
            {props.newsFive}
          </div>
        </div>
      </div>
    )
  }
}

export default SpaceNews;
