import { ContactSection } from 'presenters/ContactSection';
import { HeroSection } from 'presenters/HeroSection';
import { ProductDetailsSection } from 'presenters/ProductDetailsSection';
import { productDetails } from "db/ProductDetails"

function App() {
  return (
    <div className="main__wrapper">
      <HeroSection />
      {productDetails.map((details) => (
        <ProductDetailsSection {...details} key={details.title} />
      ))}
      <ContactSection />
    </div>
  );
}

export default App;
