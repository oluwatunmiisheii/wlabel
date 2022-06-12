import { ContactSection } from 'presenters/ContactSection';
import { HeroSection } from 'presenters/HeroSection';
import { ProductDetailsSection } from 'presenters/ProductDetailsSection';
import CameraImage from "assets/images/camera.png"
import DroneImage from "assets/images/Drone.png"
import RemoteImage from "assets/images/Remote.png"

function App() {
  return (
    <div className="main__wrapper">
      <HeroSection />
      <ProductDetailsSection 
        theme="light"
        title="Craft and design"
        description='Breakthrough design makes F-201 essentially improved. with a bow body design
        and carbon fiber material, is has superior ruggedness and anti-drop ability. Though improved small details, it will 
        definitely give you more satisfaction axis equidistant design ensures the gravity center of the aircraft in the middle.
        Which makes the flight more stable and turning agiler. Motor protection.'
        imgSrc={DroneImage}
        imageFirst={false}
      />
      <ProductDetailsSection 
        theme="dark"
        title="Camera"
        description='Breakthrough design makes F-201 essentially improved. with a bow body design
        and carbon fiber material, is has superior ruggedness and anti-drop ability. Though improved small details, it will 
        definitely give you more satisfaction axis equidistant design ensures the gravity center of the aircraft in the middle.
        Which makes the flight more stable and turning agiler. Motor protection.'
        imgSrc={CameraImage}
        attributes={[
          { key: "tvl video", value: "700" },
          { key: "visual range", value: "120 \u00B0" },
          { key: "night vision", value: "hd" }
        ]}
        imageFirst
      />
      <ProductDetailsSection 
        theme="light"
        title="Remote Control"
        description='Classic outer design, more humane control design. Adopting 2.4HZ direct sequence spread spectrum 
        technology (DSSS), the Devo 7 can match frequency and assign ID automatically. The devo7 has wireless copy function, 
        The player can set its own fixed'
        imgSrc={RemoteImage}
        imageFirst={false}
      />
      <ContactSection />
    </div>
  );
}

export default App;
