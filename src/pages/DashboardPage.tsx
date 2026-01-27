import { motion } from "framer-motion";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import EmptyState from "@/components/dashboard/EmptyState";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  const stats = [
    { label: "Total BNGN Balance", value: "₦ * * * * *", updated: "1 min ago" },
    { label: "Total BRKL Balance", value: "* * * * *", updated: "1 min ago" },
    { label: "Total Assets", value: "* * *", updated: "1 min ago" },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary text-primary-foreground rounded-lg p-4 text-center font-medium"
          >
            Verify your identity
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <StatCard {...s} />
              </motion.div>
            ))}
          </div>

          <Card>
            <CardContent className="p-6 h-72">
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-semibold">Investment summary</h2>
                <Link to="/investments" className="text-primary text-sm">
                  View more →
                </Link>
              </div>

              <EmptyState text="Make a new investment" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 h-56">
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-semibold">Recent transactions</h2>
                <Link to="/transactions" className="text-primary text-sm">
                  View more →
                </Link>
              </div>

              <EmptyState text="Recent transactions" />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
