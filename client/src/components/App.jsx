import React from 'react';
import axios from 'axios';
import Planets from './Planets';
import Satellites from './Satellites';
import Featured from './Featured';
import SpaceNews from './SpaceNews';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      spaceNews: undefined,
      wanderers: undefined,
      satellites: undefined,
      featured: 'solar-system',
      articleNumber: 0,
    }
    this.getSpaceNews = this.getSpaceNews.bind(this);
    this.getSolarBodies = this.getSolarBodies.bind(this);
    this.handleClickPlanet = this.handleClickPlanet.bind(this);
    this.handleClickMoon = this.handleClickMoon.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount(){
    this.getSpaceNews();
    this.getSolarBodies();
  }

  handleClickPlanet(e) {
    console.log(e);
    this.setState({
      featured: e,
    })
  }

  handleClickMoon(e) {
    console.log(e);
    this.setState({
      featured: e,
    })
  }

  handleReset(){
    this.setState({
      featured: 'solar-system'
    })
  }

  getSpaceNews() {
    axios.get('https://spaceflightnewsapi.net/api/v1/articles')
    .then((results) => {
      this.setState({
        spaceNews: results.data.docs,
      })
    })
    .catch((error) => { console.log(error) });
  }

  getSolarBodies() {
    axios.get('https://api.le-systeme-solaire.net/rest/bodies')
    .then((results) => {
      let Wanderers = [];
      let Satellites = [];
      results.data.bodies.forEach((body) => {
        if (body.isPlanet === false) {
          if (body.aroundPlanet) {
            if (body.aroundPlanet.planet === 'eris' || body.aroundPlanet.planet === 'pluton' || body.aroundPlanet.planet === 'terre' || body.aroundPlanet.planet === 'mars' || body.aroundPlanet.planet === 'jupiter' || body.aroundPlanet.planet === 'saturne' || body.aroundPlanet.planet === 'uranus' || body.aroundPlanet.planet === 'neptune' || body.aroundPlanet.planet === 'haumea' || body.aroundPlanet.planet === 'makemake') {
              Satellites.push(body);
            }
          }
        } else {
          Wanderers.push(body)
        }
      })
      this.setState({
        wanderers: Wanderers,
        satellites: Satellites,
      })
    })
    .then(() => {
      console.log(this.state);
    })
    .catch((error) => { console.log(error) });
  }

  render(){
    let newsData;
    let myPlanets;
    let mySatellites;

    let nextButton =
      <div className="next" onClick={() => {
        if (this.state.articleNumber === 9) {
        this.setState({articleNumber: 0})
        } else{
          this.setState((prev) => ({ articleNumber: prev.articleNumber + 1 }))
        }
      }}>
        Next ->
      </div>

    if (this.state.spaceNews !== undefined) {
      newsData =
      <div className="spaceNews">
        <img className="newsImage" src={this.state.spaceNews[this.state.articleNumber].featured_image}></img>
        <div className="articleContents">
          <div>{this.state.spaceNews[this.state.articleNumber].title}</div>
          <a href={this.state.spaceNews[this.state.articleNumber].url}>Read Full Story</a>
          <div className="bottomLine">
            <div>{this.state.spaceNews[this.state.articleNumber].published_date.slice(0,10)}</div>
            <div>{nextButton}</div>
          </div>
        </div>
      </div>
    }

    if (this.state.wanderers !== undefined) {
      myPlanets = <Planets planets={this.state.wanderers} handleClick={this.handleClickPlanet} />
    }

    if (this.state.satellites !== undefined) {
      mySatellites = <Satellites satellites={this.state.satellites} handleClick={this.handleClickMoon} />
    }

    return(
      <div className="main">
        <h1 className="title" onClick={this.handleReset}>EXPLORATIO SYSTEMATIS SOLARIS</h1>
        {newsData}
        <Featured planetInfo={this.state.wanderers} moonInfo={this.state.satellites} featuring={this.state.featured} />
        {myPlanets}
        {mySatellites}
      </div>
    )
  }
}

export default App;