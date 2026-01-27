import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

type Props = {
  label: string;
  value: string;
  updated: string;
};

export default function StatCard({ label, value, updated }: Props) {
  return (
    <Card>
      <CardHeader className="pb-2 flex-row items-center justify-between">
        <CardTitle className="text-sm text-muted-foreground">
          {label}
        </CardTitle>
        <Button size="icon" variant="ghost">
          <RefreshCw className="w-4 h-4" />
        </Button>
      </CardHeader>

      <CardContent>
        <p className="text-3xl font-bold mb-2">{value}</p>
        <p className="text-xs text-muted-foreground">
          Updated {updated}
        </p>
      </CardContent>
    </Card>
  );
}
