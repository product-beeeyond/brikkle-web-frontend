import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Wallet,
  Building2,
  DollarSign,
  Globe,
  TrendingUp,
  Shield,
  ChevronDown,
} from "lucide-react";
import LandingHeader from "@/components/layout/LandingHeader";

const LandingPage = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-primary/5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-display font-bold mb-6"
            variants={fadeInUp}
          >
            Own Real Estate,
            <br />
            <span className="text-primary">Without Owning the</span>
            <br />
            Whole Property
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Invest in premium Nigerian properties from as little as ₦10k.
            Powered by blockchain.
          </motion.p>

          <motion.div className="flex gap-4 justify-center" variants={fadeInUp}>
            <Button size="lg" asChild>
              <Link to="/waitlist">Join the waitlist</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/learn">Learn more</Link>
            </Button>
          </motion.div>

          <motion.div className="mt-12" variants={fadeInUp}>
            <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-muted-foreground" />
          </motion.div>
        </motion.div>

        {/* Property Images Strip */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-primary/20 to-transparent">
          <div className="h-full flex items-center overflow-hidden">
            <motion.div
              className="flex gap-4 px-4"
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-64 h-40 bg-muted rounded-lg flex-shrink-0"
                ></div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Brikkle Works */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              How <span className="text-primary">Brikkle</span> Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple way to invest in real estate — sign up, buy property
              tokens, earn rent and sell when you want.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Wallet,
                title: "Sign Up & Get Your Wallet",
                description:
                  "Create a free account. Brikkle automatically sets up a secure wallet for you — no crypto knowledge needed.",
              },
              {
                icon: Building2,
                title: "Explore Verified Properties",
                description:
                  "Browse vetted, premium real estate listings. Sign-up form, see prices, projected rental income, and details.",
              },
              {
                icon: DollarSign,
                title: "Invest from ₦10k",
                description:
                  "Buy stakes (as little as ₦10,000 to ₦50,000) or more. Own a piece of real estate.",
              },
              {
                icon: TrendingUp,
                title: "Earn & Cash Out Anytime",
                description:
                  "Receive rental income directly in your wallet. Sell your stakes whenever you're ready.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow bg-card/50 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Brikkle */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Why Choose Brikkle
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real estate investing, made easy — secure, affordable,
              transparent, and flexible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: DollarSign,
                title: "Start Small, Grow Big",
                description:
                  "No need to save millions — start with as little as ₦10k.",
              },
              {
                icon: TrendingUp,
                title: "Monthly Passive Income",
                description:
                  "Earn rental income directly to your wallet—no banks, no delays.",
              },
              {
                icon: Globe,
                title: "Global Access, Local Assets",
                description:
                  "Invest in Nigerian properties from anywhere in the world.",
              },
              {
                icon: Shield,
                title: "Full Transparency",
                description:
                  "See all rental income directly to your wallet—no bugs, no delays.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know before you invest
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "Do I need crypto experience?",
                answer:
                  "No. Brikkle works with licensed partners and follows local laws.",
              },
              {
                question: "Is this legal in Nigeria?",
                answer:
                  "Yes. Brikkle works with licensed partners and follows local laws.",
              },
              {
                question: "How do I get paid?",
                answer:
                  "Rental income goes directly to your wallet. Withdraw to your bank or crypto wallet anytime.",
              },
              {
                question: "Can I cash out to Naira?",
                answer: "Yes. Withdraw to your local bank or crypto wallet.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-t from-primary/20 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Join The Waitlist & Earn Rewards
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be among our first users comes with exclusive benefits and bonuses
            </p>
            <Button size="lg" asChild>
              <Link to="/waitlist">Join the waitlist</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg"></div>
                <span className="text-xl font-display font-bold">Brikkle</span>
              </div>
              <p className="text-sm text-muted-foreground">
                A real estate platform
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">How it works</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Why Brikkle</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Need help?</h3>
              <p className="text-sm text-muted-foreground">
                Reach us at{" "}
                <a
                  href="mailto:support@brikkle.co"
                  className="text-primary hover:underline"
                >
                  support@brikkle.co
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Address</h3>
              <p className="text-sm text-muted-foreground">📍 Lagos Nigeria</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2026 Brikkle. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground">
                Terms used
              </a>
              <a href="#" className="hover:text-foreground">
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
