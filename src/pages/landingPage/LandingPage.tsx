import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
// import { Building2 } from "lucide-react";
import Header from "@/components/layout/LandingHeader";
import Footer from "@/components/layout/Footer";
import GridBackground from "@/assets/images/gridBackground.svg?react";
import CtaBackground from "@/assets/images/ctaBackground.svg?react";
import { useTheme } from "@/hooks/Theme/themeContext";
import { steps } from "./constants";
import { WhyChooseSection } from "@/components/landingpage/whyChooseBrikkle";
import BrikkleIcon from "@/assets/icons/brikkleIcon.svg?react";
const LandingPage = () => {
  const { theme } = useTheme();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Mock property images for carousel
  const propertyImages = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen flex-col items-center justify-center overflow-hidden pb-10 pt-36">
        <div className="absolute inset-0 pointer-events-none ">
          {theme === "dark" ? (
            <GridBackground
              className="w-full h-full object-cover opacity-100 "
              style={{
                maskImage:
                  "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%)",
                WebkitMaskImage:
                  "radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%)",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                maskSize: "cover",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                WebkitMaskSize: "cover",
              }}
            />
          ) : null}
        </div>

        <div className="relative z-10">
          <motion.div
            className="container mx-auto px-4 text-center relative z-10"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              className="font-display font-bold mb-6 leading-tight 
             text-[clamp(2.5rem,6vw,4.5rem)]"
              variants={fadeInUp}
            >
              Own Real Estate
              <br />
              <span className="dark:text-tertiary text-primary">
                Without Owning the
              </span>
              <br />
              Whole Property
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Invest in premium Nigerian properties from as little as ₦10k.
              Powered by blockchain.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              variants={fadeInUp}
            >
              <Button size="lg" className="text-base px-8" asChild>
                <Link to="/dashboard">Learn more</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8"
                asChild
              >
                <Link to="/dashboard">Join the waitlist</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/**Scrolling images */}
        <div className="w-full overflow-hidden">
          <div
            className="w-full bg-primary overflow-hidden"
            style={{ clipPath: "polygon(0 0, 100% 35%, 100% 100%, 0 100%)" }}
          >
            <div className="h-78 flex items-center overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: [0, -1000] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {[...propertyImages, ...propertyImages].map((img, i) => (
                  <div
                    key={i}
                    className="w-80 h-78 flex-shrink-0 overflow-hidden"
                  >
                    <img
                      src={img}
                      alt={`Property ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="bg-primary text-primary-foreground py-4 overflow-hidden">
              <motion.div
                className="whitespace-nowrap"
                animate={{ x: ["0%", "-70%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="inline-block px-6 text-sm">
                  Co-own vetted rental properties, earn rent daily, and cash out
                  anytime. Brikkle makes property investment as easy as buying
                  airtime.
                </span>
                <span className="inline-block px-6 text-sm">
                  Co-own vetted rental properties, earn rent daily, and cash out
                  anytime. Brikkle makes property investment as easy as buying
                  airtime.
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How Brikkle Works */}
      <section id="how-it-works" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              How{" "}
              <span className="dark:text-tertiary text-primary">Brikkle</span>{" "}
              Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple way to invest in real estate — sign up, buy property
              tokens, earn rent and sell when you want.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xxl:grid-cols-4 gap-6 lg:px-40">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative overflow-hidden  bg-gradient-to-br ${theme === "dark" ? step.gradient : step.lightGradient} rounded-lg   p-6 hover:border-white/20 transition-all duration-300`}
              >
                {/* Large background number */}
                <div className="absolute top-4 right-4 text-[120px] font-bold text-primary/10 dark:text-white/5 leading-none select-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-lg  backdrop-blur-sm flex items-center justify-center mb-6">
                  <step.icon
                    className="w-6 h-6 dark:text-white"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="dark:text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Brikkle - Slanted Cards */}
      <WhyChooseSection />

      {/* FAQ Section */}

      <section id="faqs" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div
            className="flex flex-col md:flex-row items-center md:items-start 
                    max-w-5xl mx-auto gap-12 md:gap-20"
          >
            {/* Left: Heading block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                <span className="text-primary">Frequently Asked</span>
                <br />
                Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Key insights for your investment journey
              </p>
            </motion.div>

            {/* Right: Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 max-w-xl"
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="item-1"
                  className="border-none bg-black1 rounded-sm px-6 py-2"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    Do I need crypto experience?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No. Brikkle is designed for everyone. We handle all the
                    blockchain complexity behind the scenes, so you can invest
                    without any crypto knowledge.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border-none bg-black1 rounded-sm px-6 py-2"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    Is this legal in Nigeria?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes. Brikkle works with licensed partners and follows local
                    laws to ensure all investments are compliant and secure.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border-none bg-black1 rounded-sm px-6 py-2"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    How do I get paid?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Rental income goes directly to your wallet. Withdraw to your
                    bank or crypto wallet anytime with just a few clicks.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border-none bg-black1 rounded-sm px-6 py-2"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    Can I cash out to Naira?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes. You can easily withdraw your earnings to your local
                    bank account or crypto wallet in Naira.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section
        className={`py-24 ${theme === "dark" ? "bg-gradient-to-br from-primary/20 via-primary/10 to-background" : "bg-primary/90"} relative overflow-hidden`}
      >
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div> */}
        <div className="absolute inset-0 pointer-events-none ">
          {/* {theme === "dark" ? ( */}
          <CtaBackground className="w-full h-full object-cover dark:opacity-10 opacity-100" />
          {/* ) : null} */}
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className=" flex items-center justify-center mx-auto mb-6 text-primary-foreground">
              <BrikkleIcon className="w-20 h-20 flex-shrink-0" />
            </div>
            <h2 className="text-4xl text-background dark:text-foreground md:text-5xl font-display font-bold mb-6">
              Join The Waitlist & Earn Rewards
            </h2>
            <p className="text-lg text-background dark:text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be among our first users and unlock exclusive benefits and bonuses
            </p>

            <div className="max-w-md mx-auto">
              <Button size="lg" className="h-12 px-8 bg-white dark:bg-primary text-primary dark:text-primary-foreground">
                Join the waitlist
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
