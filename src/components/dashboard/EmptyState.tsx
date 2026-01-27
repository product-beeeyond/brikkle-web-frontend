import { ShoppingBag } from "lucide-react";

export default function EmptyState({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
      <ShoppingBag className="w-12 h-12 mb-2 opacity-50" />
      <p>{text}</p>
    </div>
  );
}
