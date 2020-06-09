import React from 'react';

class Featured extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    let planetArray = [
      'https://vignette.wikia.nocookie.net/thesolarsystem6361/images/d/df/Ceres_spacepedia.png/revision/latest/scale-to-width-down/340?cb=20180301164929',
      'https://nineplanets.org/wp-content/uploads/2019/11/Eris_spacepedia.png',
      'https://www.nicepng.com/png/full/182-1821527_uranus1-uranus-on-a-white-background.png',
      'https://i.ya-webdesign.com/images/pluto-planet-png.png',
      'https://lh3.googleusercontent.com/proxy/2bMqYrc2cQQxq6qxVL5ajJ5POfV0eiaZEnFdu0pCW439fv1tHSDX7kpURTdTwtQSh8b-n3W5yyHoRIbnu32PGxXZef5l3S85myK1zCAzgtiHS9ui40NHFRY',
      'https://nineplanets.org/wp-content/uploads/2019/09/haumea.png',
      'https://vignette.wikia.nocookie.net/battlefordreamisland/images/0/00/DiaMakemake.png/revision/latest/scale-to-width-down/80?cb=20180812004901',
      'https://vignette.wikia.nocookie.net/battlefordreamisland/images/0/04/DiaJupiter.png/revision/latest/scale-to-width-down/80?cb=20180812001738',
      'https://upload.wikimedia.org/wikipedia/commons/6/68/Mars_%2816716283421%29_-_Transparent_background.png',
      'https://vignette.wikia.nocookie.net/battlefordreamisland/images/f/f6/DiaMercury.png/revision/latest/scale-to-width-down/80?cb=20180812000806',
      'https://ya-webdesign.com/transparent250_/saturn-planet-png-4.png',
      'https://lh3.googleusercontent.com/proxy/gSZBJzs1IspUVvsb6Yyx0IZVRIo-MDj-OIIIUDamjcaSCbBGbGc6hLWf3KRr8K2pvs46DCz8eFXHULgmCo7mWsdP8xhgnc6pdbG-ou_j6qQ_EsjLzTLwZ7wcXjW3wFgenE2mrw',
      'https://upload.wikimedia.org/wikipedia/commons/f/f4/3D_Venus.png'
    ];
    let moonArray = [
      'https://hubpng.com/download/bgszleRRqhoKmPsxFk0cL3EIyN4XE50I6vpT3Yq70uHhOgFY87jX5kNxzDceE0ZpNvsJwGhPa1xmxbGonwF5ZWqYPKAEoau1ZmeqptS3n8UNyChnSu0GoAEUrYdSAJynHdhGFLNlOjDWmQi1lUUKIL3TUA6bp78XfVcRBLGhXoedzieuQ1RM5WW4gcqWOQKF7IrLdkSA/large',
      'https://www.astrobio.net/articles/images/phobos.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Deimos-MRO.jpg/196px-Deimos-MRO.jpg',
      'https://lh3.googleusercontent.com/proxy/PAIkp3_2MNiHQ2hXe8tWYKKrCejjCR5ZpC9zFjdsz4YJVu0TirZmeAIYOix220fBpbkaLYj7dFecL60neFV6QPJjx6V5FMy34SunJ3w5d9Ck0gSMYpM',
      'https://sos.noaa.gov/images/fullsize/Solar_System/europa.jpg',
      'https://lh3.googleusercontent.com/proxy/zO3h09P2lphmLANCI36-K8hxIR51oBZGMNKBCYC0uUueicZmb04a1c64Pzq_95NZZUlDtSgRqLSPSsLUic8HDMuaKGiKXEDqJ-LeJZ11XUKtZfh-3tAz2Jf7CXE',
      'https://upload.wikimedia.org/wikipedia/commons/e/e9/Callisto.jpg',
      'https://vignette.wikia.nocookie.net/remixfavoriteshowandgame/images/2/2c/Amalthea_%28moon%29.jpg/revision/latest/scale-to-width-down/340?cb=20170110172516',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSW2l_lsSp4CfK5Ud5M5BY-zlWUDso0tsgOeyFseEZzapdzy_cx&usqp=CAU',
      'https://www.go-astronomy.com/images/moons/jupiter-moon-elara.jpg',
      'https://i.pinimg.com/originals/fd/13/96/fd13969bfc6993ee82fe2eaded8b524f.jpg',
      'https://alchetron.com/cdn/sinope-moon-b36ade1e-0859-438f-adae-67cf62aa73a-resize-750.jpeg',
      'https://i.pinimg.com/originals/94/7f/de/947fde69825ccdcbc4eb89f61906dbda.gif',
      'https://s-media-cache-ak0.pinimg.com/564x/0a/21/ba/0a21ba39a1dfac4e7a7def00a3542197.jpg',
      'https://alchetron.com/cdn/ananke-moon-e9e4ce6f-d535-4b0a-bddf-4cc2ba1b4cd-resize-750.jpg',
      'https://upload.wikimedia.org/wikipedia/en/0/0e/Leda2%28moon%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Thebe_-_January_4_2000_%2826781645690%29.jpg/220px-Thebe_-_January_4_2000_%2826781645690%29.jpg',
      'https://vignette.wikia.nocookie.net/galnet/images/c/cb/Astrea_moon.jpg/revision/latest?cb=20140130230027',
      'https://alchetron.com/cdn/metis-moon-64354dba-44bf-43b2-8487-4b70278043f-resize-750.jpeg',
      'https://i.pinimg.com/originals/3a/30/6a/3a306aaf1e001f5ba2f1c029492c4ddd.jpg',
      'https://i.pinimg.com/originals/de/f4/41/def441e30ba4ece6b5f5c2b06991580c.jpg',
      'https://i.pinimg.com/originals/78/e0/a1/78e0a1c7f18a1573d5e214db87337f3d.jpg',
      'https://vignette.wikia.nocookie.net/thesolarsystem6361/images/c/c3/Taygete.jpg/revision/latest?cb=20120813191941',
      'https://vignette.wikia.nocookie.net/thesolarsystem6361/images/6/61/Chaldene.jpg/revision/latest?cb=20120814015903',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrzKAAHJ92OdID_w5EzAuniTTcLPNarT1CXoBfDeYvJ1e4kbNZ&usqp=CAU',
      'https://vignette.wikia.nocookie.net/our-solar-system/images/8/8f/Kalyke.jpg/revision/latest/scale-to-width-down/340?cb=20180531014953',
      'https://vignette.wikia.nocookie.net/oursolarsystem/images/5/54/Iocaste.jpg/revision/latest/top-crop/width/220/height/220?cb=20180701103339',
      'https://vignette.wikia.nocookie.net/thesolarsystem6361/images/2/2b/Erinome.jpg/revision/latest?cb=20120818203321',
      'https://vignette.wikia.nocookie.net/thesolarsystem6361/images/d/db/Isonoe.jpg/revision/latest/top-crop/width/220/height/220?cb=20120824231512',
      'https://alchetron.com/cdn/praxidike-moon-2636c232-0100-482d-8c7d-1e85ad5e47b-resize-750.jpg',
      'https://pbs.twimg.com/profile_images/929247391605178368/bDi5mEGv.jpg',
      'https://vignette.wikia.nocookie.net/thesolarsystem6361/images/4/4a/Thyone.jpg/revision/latest/scale-to-width-down/340?cb=20170908142255',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Hermippe_%28moon%29.png/320px-Hermippe_%28moon%29.png',
      'https://avatars0.githubusercontent.com/u/50342674?v=4',
      'https://www.mpm.edu/sites/default/files/images/planetarium/eblasts/dec/Eurydome.jpg',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/thesolarsystem6361/images/9/91/Mimas_spacepedia.png/revision/latest/scale-to-width-down/340?cb=20180302104358',
      'https://space-facts.com/wp-content/uploads/encladus.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/PIA19638-Tethys-SaturnMoon-TrailingHemisphere-Enhanced-20150411.jpg/180px-PIA19638-Tethys-SaturnMoon-TrailingHemisphere-Enhanced-20150411.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/42/Dione_in_natural_light.jpg',
      'https://solarsystem.nasa.gov/system/content_pages/main_images/805_PIA12648.jpg',
      'https://images.theconversation.com/files/302643/original/file-20191120-467-1jdql0z.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hyperion_in_natural_colours.jpg/195px-Hyperion_in_natural_colours.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/42/Iapetus_Roncevaux.jpg',
      'https://sos.noaa.gov/ftp_mirror/astronomy/phoebe/media/thumbnail_big.jpg',
      'https://lh3.googleusercontent.com/proxy/OgDsnERRLh8Y6L3BEtXEyMPI1U5cb8PfzAIrOJd_zThNRoBFG0LsVqfIidAdnXRjB8m1_4bqdV8IqCizs1SIVcy61uY',
      'https://upload.wikimedia.org/wikipedia/commons/2/24/PIA09813_Epimetheus_S._polar_region.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Helene_over_Saturn.jpg/150px-Helene_over_Saturn.jpg',
      'https://solarsystem.nasa.gov/system/content_pages/main_images/893_PIA07702.jpg',
      'https://solarsystem.nasa.gov/system/resources/detail_files/12854_PIA07633.jpg',
      'https://s.yimg.com/ny/api/res/1.2/HPa8gmAR9i8.NNPjL5fJvw--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/space.com/6f8ec1006736e9fc18c00183ad561649',
      'https://upload.wikimedia.org/wikipedia/commons/0/08/Prometheus_12-26-09b.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/b/bc/PIA21055_-_Pandora_Up_Close.jpg',
      'https://lifeboat.com/blog.images/pan-moon-of-saturn-looks-like-a-cosmic-ravioli-or-maybe-a-walnut.jpg',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://tilmanndenk.de/wp-content/uploads/631_Nar_0_Title1.png',
      'https://upload.wikimedia.org/wikipedia/commons/b/bf/Methone_-_Best_Image_From_Cassini.jpg',
      'https://planetary.s3.amazonaws.com/assets/images/6-saturn/2012/20120910_pallene_20050608.png',
      'https://solarsystem.nasa.gov/system/content_pages/main_images/789_PIA08209.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/6/6d/PIA21056cropsharpen.jpg',
      'https://tilmanndenk.de/wp-content/uploads/636_Aeg_0_Title1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/1f/Bebhionn%2C_sat%C3%A9lite.jpg',
      'https://i.pinimg.com/474x/6c/cb/76/6ccb7699b59b4e1d75c7dc03e3e1cd25.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/8/88/Bestla%2C_sat%C3%A9lite.jpg',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://solarsystem.nasa.gov/images/casJPGFullS86/N00231926.jpg',
      'https://vignette.wikia.nocookie.net/thesolarsystem6361/images/1/15/Skoll.png/revision/latest/scale-to-width-down/340?cb=20180305123226',
      'https://solarsystem.nasa.gov/images/casJPGFullS93/N00257745.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/f/f3/Anthe_N1832831075_1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/3/31/Jarnsaxa%2C_sat%C3%A9lite.jpg',
      'https://solarsystem.nasa.gov/images/casJPGFullS90/N00246970.jpg',
      'https://solarsystem.nasa.gov/images/casJPGFullS95/N00264161.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/8/83/N1643264379_1.jpg',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://upload.wikimedia.org/wikipedia/commons/5/59/Ariel_%28moon%29.jpg',
      'https://i.pinimg.com/originals/c3/02/5e/c3025e4038fe69a7294611a0c41a5cf5.jpg',
      'https://solarsystem.nasa.gov/system/content_pages/main_images/292_PIA00036.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Voyager_2_picture_of_Oberon.jpg/220px-Voyager_2_picture_of_Oberon.jpg',
      'https://lh3.googleusercontent.com/proxy/a91bckhHokbhYKn2WlfZ6ALRbWm8_L0P2eczMWWPVQN4IISZbfYWcBubB1J_U-BR4oI1uFbtjPJfpoHDbJCLFIZIqEfnUjCJCra_uqBIQl1TW6NeWlgdJGxWoA',
      'https://upload.wikimedia.org/wikipedia/commons/5/59/Cordeliamoon.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Opheliamoon.png/220px-Opheliamoon.png',
      'https://upload.wikimedia.org/wikipedia/commons/c/cf/Biancamoon.png',
      'https://upload.wikimedia.org/wikipedia/commons/5/57/Cressida.png',
      'https://upload.wikimedia.org/wikipedia/commons/4/41/Desdemonamoon.png',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Julietmoon.png',
      'https://vignette.wikia.nocookie.net/tiny-space-program/images/c/ca/Th.jpeg/revision/latest?cb=20180629100524',
      'https://upload.wikimedia.org/wikipedia/commons/3/34/Rosalindmoon.png',
      'https://www.go-astronomy.com/images/moons/uranus-moon-belinda.jpg',
      'https://solarsystem.nasa.gov/system/content_pages/main_images/277_Puck1.jpg',
      'https://www.daviddarling.info/images/Caliban.jpg',
      'https://www.go-astronomy.com/images/moons/uranus-moon-sycorax.jpg',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://upload.wikimedia.org/wikipedia/commons/b/ba/Uranus_-_Setebos_image.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Stephano_-_Uranus_moon.jpg/220px-Stephano_-_Uranus_moon.jpg',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://upload.wikimedia.org/wikipedia/commons/0/08/Uranus_moon_021002_02.jpg',
      'https://static.le-systeme-solaire.net/ressources/syssol/urasat_s2003u3_movie_margaret.jpg',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://kids.kiddle.co/images/0/02/Mab_moon.png',
      'https://upload.wikimedia.org/wikipedia/commons/0/03/Cupidmoon.png',
      'https://www.solarsystemscope.com/spacepedia/images/handbook/renders/triton.png',
      'https://upload.wikimedia.org/wikipedia/commons/b/b0/Nereid-Voyager2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/f/f3/Naiad_Voyager.png',
      'https://upload.wikimedia.org/wikipedia/commons/5/5c/Neptune_Trio.jpg',
      'https://www.daviddarling.info/images/Despina.gif',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Galatea_moon.jpg/220px-Galatea_moon.jpg',
      'https://alchetron.com/cdn/larissa-moon-3586cd01-bda3-4d6b-8b5c-dc232db2799-resize-750.gif',
      'https://upload.wikimedia.org/wikipedia/commons/8/83/Proteus_%28Voyager_2%29.jpg',
      'https://vignette.wikia.nocookie.net/thesolarsystem6361/images/e/ea/Halimede_Moon.png/revision/latest/scale-to-width-down/340?cb=20170909164019',
      'https://vignette.wikia.nocookie.net/thesolarsystem6361/images/0/02/Psamathe.png/revision/latest/scale-to-width-down/340?cb=20180305122253',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/thesolarsystem6361/images/5/52/Neso-celestia.jpg/revision/latest/scale-to-width-down/340?cb=20170909164842',
      'https://solarsystem.nasa.gov/system/content_pages/main_images/538_PIA19968.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Nix_best_view.jpg/220px-Nix_best_view.jpg',
      'https://www.nasa.gov/sites/default/files/thumbnails/image/hydra_solo.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Haumea_Hubble.png/220px-Haumea_Hubble.png',
      'https://upload.wikimedia.org/wikipedia/en/6/65/2003_EL61_Haumea%2C_with_moons.jpg',
      'https://upload.wikimedia.org/wikipedia/en/thumb/0/07/Moon_of_Xena.jpg/220px-Moon_of_Xena.jpg',
      'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/783_dia_480x320_moons.jpg',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://www.go-astronomy.com/images/moons/pluto-moon-kerberos.jpg',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://solarsystem.nasa.gov/system/content_pages/main_images/547_styx-moon.jpg',
      'https://www.universetoday.com/wp-content/uploads/2019/02/proteusdfull1besthirghresf.png',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://www.evolving-science.com/sites/default/files/Recovery-image-of-Valetudo.jpg',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615',
      'https://vignette.wikia.nocookie.net/planet-archives/images/9/97/No_Photo.png/revision/latest/scale-to-width-down/340?cb=20190213014615'
    ];
    let myFeaturedItem;
    let moons = 0;
    let index = 0;
    if (this.props.featuring === 'solar-system') {
      myFeaturedItem =
      <div className="solarSystem">
        <div className="sun"></div>
        <div className="orbit1">
          <div className="orbital1">
            <img className="" src="https://miro.medium.com/max/300/1*qgP_9WqLI7Bstp6qP-XXgA.png"></img>
          </div>
        </div>
        <div className="orbit2">
          <div className="orbital2">
            <img className="" src="https://upload.wikimedia.org/wikipedia/commons/f/f4/3D_Venus.png"></img>
          </div>
        </div>
        <div className="orbit3">
          <div className="orbital3">
            <img className="" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ad4afd9-1b7c-4043-8820-8322dc919c18/d6r41tn-b5461900-f7f5-4695-99cc-8faccf3708bd.png/v1/fill/w_400,h_320,strp/earth_transparent_background_by_royalblueiv_d6r41tn-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0zMjAiLCJwYXRoIjoiXC9mXC80YWQ0YWZkOS0xYjdjLTQwNDMtODgyMC04MzIyZGM5MTljMThcL2Q2cjQxdG4tYjU0NjE5MDAtZjdmNS00Njk1LTk5Y2MtOGZhY2NmMzcwOGJkLnBuZyIsIndpZHRoIjoiPD00MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.KERRNV20vpyzpk4_aw5ypG3TiVp412efxgstIWIXu1s"></img>
          </div>
        </div>
        <div className="orbit4">
          <div className="orbital4">
            <img className="" src="https://upload.wikimedia.org/wikipedia/commons/6/68/Mars_%2816716283421%29_-_Transparent_background.png"></img>
          </div>
        </div>
        <div className="orbit5">
          <div className="orbital5">
            <img className="" src="https://i2.wp.com/freepngimages.com/wp-content/uploads/2016/04/planet-jupiter-1.png?fit=800%2C800"></img>
          </div>
        </div>
        <div className="orbit6">
          <div className="orbital6">
            <img className="" src="https://nineplanets.org/wp-content/uploads/2019/09/saturn.png"></img>
          </div>
        </div>
        <div className="orbit7">
          <div className="orbital7">
            <img className="" src="https://www.nicepng.com/png/full/182-1821527_uranus1-uranus-on-a-white-background.png"></img>
          </div>
        </div>
        <div className="orbit8">
          <div className="orbital8">
            <img className="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/3D_Neptune.png/243px-3D_Neptune.png"></img>
          </div>
        </div>
      </div>
    } else if (this.props.featuring.slice(0,6) === 'planet') {
        index = Number(this.props.featuring.slice(6));
        if (this.props.planetInfo[index].moons) {
          moons = this.props.planetInfo[index].moons.length
        }

        myFeaturedItem = <div><img className="featuredSize" src={planetArray[index]} />
      <div className="Info">
        <h1>{this.props.planetInfo[index].englishName}</h1>
        <ul className="ListOFacts">
          <li>{`Discovered By: ${this.props.planetInfo[index].discoveredBy}`}</li>
          <li>{`Date Found: ${this.props.planetInfo[index].discoveryDate}`}</li>
          <li>Moons: {moons}</li>
          <li>{`Denisty: ${this.props.planetInfo[index].density}`}</li>
          <li>{`Mass: ${this.props.planetInfo[index].mass.massValue} e ${this.props.planetInfo[index].mass.massExponent}`}</li>
          <li>{`Gravity: ${this.props.planetInfo[index].gravity}`}</li>
          <li>{`Escape Velocity: ${this.props.planetInfo[index].escape}`}</li>
          <li>{`Aphelion: ${this.props.planetInfo[index].aphelion}`}</li>
          <li>{`Perihelion: ${this.props.planetInfo[index].perihelion}`}</li>
          <li>{`Inclination: ${this.props.planetInfo[index].inclination}`}</li>
        </ul>
      </div>
      </div>
    } else if (this.props.featuring.slice(0,4) === "moon") {
        index = Number(this.props.featuring.slice(4));
        console.log(index)
        if (this.props.moonInfo[index].moons) {
          moons = this.props.moonInfo[index].moons.length
        }

        myFeaturedItem = <div><img className="featuredSize" src={moonArray[index]} />
        <div className="Info">
          <h1>{this.props.moonInfo[index].englishName}</h1>
          <ul className="ListOFacts">
            <li>{`Discovered By: ${this.props.moonInfo[index].discoveredBy}`}</li>
            <li>{`Date Found: ${this.props.moonInfo[index].discoveryDate}`}</li>
            <li>Moons: {moons}</li>
            <li>{`Denisty: ${this.props.moonInfo[index].density}`}</li>
            <li>{`Mass: ${this.props.moonInfo[index].mass.massValue} e ${this.props.moonInfo[index].mass.massExponent}`}</li>
            <li>{`Gravity: ${this.props.moonInfo[index].gravity}`}</li>
            <li>{`Escape Velocity: ${this.props.moonInfo[index].escape}`}</li>
            <li>{`Aphelion: ${this.props.moonInfo[index].aphelion}`}</li>
            <li>{`Perihelion: ${this.props.moonInfo[index].perihelion}`}</li>
            <li>{`Inclination: ${this.props.moonInfo[index].inclination}`}</li>
          </ul>
        </div>
        </div>
      }

    return(
      <div className="featuredContainer">{myFeaturedItem}</div>
    )
  }
}

export default Featured;
