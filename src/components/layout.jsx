import Button from "./button.jsx";

"use client"
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion"
import { useState } from "react"

export const FAQ = () => {
  const [value, setValue] = useState(["second-item"])
  return (
    <section id="faq">
        <h1>FAQ (คำถามที่พบบ่อย)</h1>
        <ul>
          <AccordionRoot value={value} onValueChange={(e) => setValue(e.value)}>
            {items.map((item, index) => (

              <AccordionItem key={index} value={item.value}>
                <li><AccordionItemTrigger>{item.title}</AccordionItemTrigger></li>
                <li><AccordionItemContent>{item.text}</AccordionItemContent></li>
              </AccordionItem>

          ))}
          </AccordionRoot>
        </ul>

    </section>
  )
}

const items = [
  { value: "first-item", title: "Q: What makes XYZ Company's products so unique?", text: "A: At XYZ Company, we pride ourselves on innovation and cutting-edge technology. Our products are crafted with a perfect blend of creativity and functionality, setting them apart from the competition. We constantly strive to push the boundaries of what's possible to deliver a truly exceptional user experience." },
  { value: "second-item", title: "Q: How does XYZ Company contribute to sustainability and environmental conservation?", text: "A: XYZ Company is committed to environmental responsibility. We implement eco-friendly practices throughout our production process, from sourcing materials to manufacturing. Our dedication to sustainability extends beyond our products, as we actively engage in initiatives to reduce our carbon footprint and promote a greener future." },
  { value: "third-item", title: "Q: What kind of support can customers expect from XYZ Company's customer service team?", text: "At XYZ Company, customer satisfaction is our top priority. Our dedicated support team is available 24/7 to address any inquiries or concerns you may have. Whether you need assistance with product usage, troubleshooting, or general information, our knowledgeable and friendly customer service representatives are always ready to provide prompt and effective support." },
  { value: "fourth-item", title: "Q: How does XYZ Company stay ahead of industry trends?", text: "XYZ Company stays at the forefront of industry trends through continuous research and development. We invest heavily in staying ahead of the curve, monitoring market dynamics, and actively seeking feedback from our customers. By embracing innovation and staying agile, we ensure that our products and services evolve to meet the ever-changing needs of our dynamic customer base." },
  { value: "fifth-item", title: "Q: Can you tell us about XYZ Company's commitment to community involvement?", text: "XYZ Company is deeply committed to giving back to the communities we serve. We actively engage in philanthropic initiatives, supporting local charities and community projects. Additionally, we encourage our employees to participate in volunteer programs, fostering a culture of social responsibility. By being actively involved in the community, we aim to make a positive impact beyond the products and services we offer." },

]

export function Header() {
    return (
      <header>
        <nav>
          <div className="logo">🚀 XYZ CORP</div>
          <ul className="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export function MainContent() {
    return (
      <main>
        <div className="company-detail-left">
          <h1>Welcome to XYZ Corp</h1>
          <p>Your Trusted Partner in Excellence</p>
          <img src="https://placehold.co/300x300" />
        </div>
        <div className="company-detail-right">
          <h2>About Our Company</h2>
          <p>
            Welcome to XYZ Corp, where excellence meets innovation. We are a
            passionate team dedicated to providing high-quality solutions for the
            technology industry. With a track record of 10 years of success, we
            have become a trusted partner for clients worldwide.
          </p>
          <p>
            Our mission is to empower businesses through cutting-edge technology.
            We believe in integrity, collaboration, and innovation, and we strive
            to make a positive impact on businesses and communities alike.
          </p>
          <p>
            At XYZ Corp, we take pride in our commitment to staying at the
            forefront of technological advancements. Our team of experts is ready
            to collaborate with you to tackle your most complex challenges and
            drive your success.
          </p>
          <Button buttonText="Learn More" buttonStyle="learn-button" />
        </div>
      </main>
    );
  }
  
  export function ProductSection() {
    return (
      <section className="product-section">
        <div className="product-section-container">
          <h2 className="product-featured-heading">Featured Products</h2>
          <div className="product-card-list">
            <div className="product-card">
              <img
                src="https://placehold.co/300x300"
                alt="The Lorem Ipsum for photos."
              />
              <h3>Premium Bluetooth Headphones</h3>
              <p className="product-price">2,400 Baht</p>
              <Button buttonText="Add to Cart" buttonStyle="add-to-cart-button" />
            </div>
            <div className="product-card">
              <img
                src="https://placehold.co/300x300"
                alt="The Lorem Ipsum for photos."
              />
              <h3>Classic Leather Watch</h3>
              <p className="product-price">4,000 Baht</p>
              <Button buttonText="Add to Cart" buttonStyle="add-to-cart-button" />
            </div>
            <div className="product-card">
              <img
                src="https://placehold.co/300x300"
                alt="The Lorem Ipsum for photos."
              />
              <h3>Organic Green Tea</h3>
              <p className="product-price">79.99 Baht</p>
              <Button buttonText="Add to Cart" buttonStyle="add-to-cart-button" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export function Footer() {
    return (
      <footer>
        <p>&copy; 2023 Your Ecommerce Store. All rights reserved.</p>
      </footer>
    );
  }
