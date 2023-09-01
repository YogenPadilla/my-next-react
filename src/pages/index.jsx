import Layout from "@/components/Layout";
import Hero from "@/components/Section/Hero";
import Logos from "@/components/Section/Logos";
import Products from "@/components/Section/Products";
import CTA from "@/components/Section/CTA";
import Email from "@/components/Section/Email";

export default function Home() {
  return (
    <>
      <Layout >
        <Hero />
        <Logos />
        <Products />
        <CTA />
        <Email />
      </Layout>
    </>
  );
}
