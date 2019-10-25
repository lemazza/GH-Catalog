import imageChocChip from '../images/food/choc-chip-cookies.jpg';
import imageChocPie from '../images/food/choc-pie.jpg';
import imagePennyPress from '../images/food/penny-press.jpg';
import imageForbiddenDesert from '../images/food/forbidden-desert.jpg';




const adImageIndex = [
  {
    name: "Chocolate Chip Cookies",
    category: "",
    image: imageChocChip
  },
  {
    name: "Chocolate Espresso Pie",
    category: "",
    image: imageChocPie
  },
  {
    name: "The Penny Press",
    category: "Sandwich",
    image: imagePennyPress
  },
  {
    name: "The Forbidden Desert",
    category: "Soju Cocktail",
    image: imageForbiddenDesert
  }
]

export function randAdImage() {
  const adIndex = Math.floor(Math.random()*adImageIndex.length)
  return adImageIndex[adIndex]
}