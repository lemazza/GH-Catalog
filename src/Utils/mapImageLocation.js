import image2player from '../images/maps/map-2player.png';
import imageAbstract from '../images/maps/map-abstract.png';
import imagePonyWall from '../images/maps/map-pony-wall.png';
import imageSmallBox from '../images/maps/map-small-box.png';
import imageSocialDeduction from '../images/maps/map-social-deduction.png';

import imageFamilyL from '../images/maps/map-family-l.png';
import imageFamilyM from '../images/maps/map-family-m.png';
import imageFamilyR from '../images/maps/map-family-r.png';

import imageDesigner1 from '../images/maps/map-designer-1.png';
import imageDesigner2 from '../images/maps/map-designer-2.png';
import imageDesigner3 from '../images/maps/map-designer-3.png';
import imageDesigner4 from '../images/maps/map-designer-4.png';
import imageDesigner5 from '../images/maps/map-designer-5.png';
import imageDesigner6 from '../images/maps/map-designer-6.png';
import imageDesigner7 from '../images/maps/map-designer-7.png';
import imageDesigner8 from '../images/maps/map-designer-8.png';

import imagePartyL from '../images/maps/map-party-l.png';
import imagePartyR from '../images/maps/map-party-r.png';




const imageIndex = {
  'Designer1': imageDesigner1,
  'Designer2': imageDesigner2,
  'Designer3': imageDesigner3,
  'Designer4': imageDesigner4,
  'Designer5': imageDesigner5,
  'Designer6': imageDesigner6,
  'Designer7': imageDesigner7,
  'Designer8': imageDesigner8,
  'PartyL': imagePartyL,
  'PartyR': imagePartyR,
  'FamilyL': imageFamilyL,
  'FamilyM': imageFamilyM,
  'FamilyR': imageFamilyR,
  '2player': image2player,
  'Abstract': imageAbstract,
  'PonyWall': imagePonyWall,
  'SmallBox': imageSmallBox,
  'SocialDeduction': imageSocialDeduction
}

export function imageFinder(type) {
  return imageIndex[type]
}