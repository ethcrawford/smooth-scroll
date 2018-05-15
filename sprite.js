const path = require('path');
const nsg = require('node-sprite-generator');
const sPath = {
  source: path.join(__dirname, 'sprite/'),
  destSprite: path.join(__dirname, 'app/assets/images/'),
  destStylus: path.join(__dirname, 'app/styles/variables/')
};
nsg({
  src: [
    sPath.source + '*.png'
  ],
  spritePath: sPath.destSprite + 'sprite.png',
  stylesheetPath: sPath.destStylus + '_sprite.styl',
  stylesheet: 'stylus',
  stylesheetOptions: {prefix: 'sprite-'},
  layout: 'vertical',
  layoutOptions: {padding: 10, scaling: 1},
  compositor: 'canvas'
}, function(err) {
  console.log('Sprite generated');
});
