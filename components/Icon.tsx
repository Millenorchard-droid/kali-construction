import {
  Wrench, Droplet, Zap, Home, PaintRoller, Layers, Hammer, Trees,
  PhoneCall, ClipboardList, CheckCircle2, ShieldCheck, Flame, PoundSterling,
  Key, Building2, MapPin, FileText, Building,
} from "lucide-react";

const MAP = {
  wrench: Wrench, droplet: Droplet, zap: Zap, home: Home, paint: PaintRoller, layers: Layers,
  hammer: Hammer, trees: Trees, phone: PhoneCall, clipboard: ClipboardList, check: CheckCircle2,
  shield: ShieldCheck, flame: Flame, pound: PoundSterling, key: Key, building2: Building2,
  pin: MapPin, file: FileText, building: Building,
} as const;

export type IconName = keyof typeof MAP;

// Shared icon tile. Services and Commercial both use this so backgrounds and outlines match (Point 9).
export default function IconTile({ name, size = 22 }: { name: IconName; size?: number }) {
  const C = MAP[name];
  return (
    <span className="icon-wrap" aria-hidden="true">
      <C size={size} strokeWidth={1.75} />
    </span>
  );
}
