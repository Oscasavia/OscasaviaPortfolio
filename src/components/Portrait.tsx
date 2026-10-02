import portrait400 from "@/assets/portrait-400.webp";
import portrait800 from "@/assets/portrait-800.webp";
import portrait1200 from "@/assets/portrait-1200.webp";
import portrait1600 from "@/assets/portrait-1600.webp";

const Portrait = ({ sizes }: { sizes: string }) => (
  <img
    src={portrait800}
    srcSet={`${portrait400} 400w, ${portrait800} 800w, ${portrait1200} 1200w, ${portrait1600} 1600w`}
    sizes={sizes}
    alt="Oscasavia Birungi"
    width="3352"
    height="4476"
    loading="lazy"
    decoding="async"
    className="h-full w-full object-cover"
  />
);

export default Portrait;
