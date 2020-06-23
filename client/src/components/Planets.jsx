import React from 'react';

function Planets (props) {
  let planetArray = [
    'https://vignette.wikia.nocookie.net/thesolarsystem6361/images/d/df/Ceres_spacepedia.png/revision/latest/scale-to-width-down/340?cb=20180301164929',
    'https://nineplanets.org/wp-content/uploads/2019/11/Eris_spacepedia.png',
    'https://www.nicepng.com/png/full/182-1821527_uranus1-uranus-on-a-white-background.png',
    'https://i.ya-webdesign.com/images/pluto-planet-png.png',
    'https://cdn.mos.cms.futurecdn.net/eNTJrysq4A6DqXncBtsRrB-320-80.jpg',
    'https://nineplanets.org/wp-content/uploads/2019/09/haumea.png',
    'https://vignette.wikia.nocookie.net/battlefordreamisland/images/0/00/DiaMakemake.png/revision/latest/scale-to-width-down/80?cb=20180812004901',
    'https://vignette.wikia.nocookie.net/battlefordreamisland/images/0/04/DiaJupiter.png/revision/latest/scale-to-width-down/80?cb=20180812001738',
    'https://upload.wikimedia.org/wikipedia/commons/6/68/Mars_%2816716283421%29_-_Transparent_background.png',
    'https://vignette.wikia.nocookie.net/battlefordreamisland/images/f/f6/DiaMercury.png/revision/latest/scale-to-width-down/80?cb=20180812000806',
    'https://ya-webdesign.com/transparent250_/saturn-planet-png-4.png',
    'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/f/f4/3D_Venus.png'
  ]
  return(
    <div className="planets">
      <div className="sectName">Wanderers</div>
      {props.planets.map((planet, index) => {
        return  <div className={`planet planet${index}`}>
                  <p className="planetName">{planet.englishName}</p>
                  <img className="planetPic" name={"planet" + index} onClick={(e) => {props.handleClick(e.target.name)}} src={planetArray[index]} />
                </div>
      })}
    </div>
  )
}

export default Planets;