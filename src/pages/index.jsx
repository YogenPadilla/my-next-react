import Layout from "@/components/Layout";
import Hero from "@/Section/Home/Hero";
import Logos from "@/Section/Home/Logos";
import Products from "@/Section/Home/Products";
import CTA from "@/Section/Home/CTA";
import Email from "@/Section/Home/Email";

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
