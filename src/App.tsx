import { ContactSection } from 'presenters/ContactSection';
import { HeroSection } from 'presenters/HeroSection';
import { ProductDetailsSection } from 'presenters/ProductDetailsSection';
import { productDetails } from "db/ProductDetails"
import { useId } from 'react';

function App() {
  const id = useId();
  
  return (
    <div className="main__wrapper">
      <HeroSection />
      {productDetails.map((details) => (
        <ProductDetailsSection {...details} key={id} />
      ))}
      <ContactSection />
    </div>
  );
}

export default App;
