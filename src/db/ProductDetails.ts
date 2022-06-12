import { IProductDetailsProps } from  'presenters/ProductDetailsSection';
import DroneImage from "assets/images/Drone.png";
import CameraImage from "assets/images/camera.png";
import RemoteImage from "assets/images/Remote.png";

export const productDetails: IProductDetailsProps[]  = [
  {
    theme: "light",
    title: "Craft and design",
    description:  "Breakthrough design makes F-201 essentially improved. with a bow body design and carbon fiber material, is has superior ruggedness and anti-drop ability. Though improved small details, it will definitely give you more satisfaction axis equidistant design ensures the gravity center of the aircraft in the middle. Which makes the flight more stable and turning agiler. Motor protection.",
    imgSrc: DroneImage,
    imageFirst: false
  },
  {
    theme: "dark",
    title: "Camera",
    description:  "Breakthrough design makes F-201 essentially improved. with a bow body design and carbon fiber material, is has superior ruggedness and anti-drop ability. Though improved small details, it will definitely give you more satisfaction axis equidistant design ensures the gravity center of the aircraft in the middle. Which makes the flight more stable and turning agiler. Motor protection.",
    imgSrc: CameraImage,
    imageFirst: true,
    attributes: [
      { key: "tvl video", value: "700" },
      { key: "visual range", value: "120 \u00B0" },
      { key: "night vision", value: "hd" }
    ]
  },
  {
    theme: "light",
    title: "Remote Control",
    description:  "Classic outer design, more humane control design. Adopting 2.4HZ direct sequence spread spectrum  technology (DSSS), the Devo 7 can match frequency and assign ID automatically. The devo7 has wireless copy function, The player can set its own fixed",
    imgSrc: RemoteImage,
    imageFirst: false,
    attributes: [
      { key: "tvl video", value: "700" },
      { key: "visual range", value: "120 \u00B0" },
      { key: "night vision", value: "hd" }
    ]
  }
]