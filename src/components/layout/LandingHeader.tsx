import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";

const LandingHeader = () => {
  const [changed, SwitchChanged] = useState(false);
  const { setTheme } = useTheme();
  useEffect(() => {
    changed === true ? setTheme("dark") : setTheme("light");
  }, [changed, setTheme]);

  return (
    <div>
      <Switch checked={changed} onCheckedChange={SwitchChanged} />
    </div>
  );
};

export default LandingHeader;
