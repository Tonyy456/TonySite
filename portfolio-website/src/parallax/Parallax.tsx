import pb1 from '/parallax_bg_1.png'
import pb2 from '/parallax_bg_2.png'
import pb3 from '/parallax_bg_3.png'
import pb4 from '/parallax_bg_4.png'
import pb5 from '/parallax_bg_5.png'
import pb6 from '/parallax_bg_6.png'
import pb7 from '/parallax_bg_7.png'
import pb8 from '/parallax_bg_8.png'
import pb9 from '/parallax_bg_9.png'

interface ParallaxLayerProps {
  src: string;
  depth: number;
}

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({ src, depth }) => {
  const scale = ((1 + (depth - 1) * 1) * 100);
  const vwWidth = `calc(${scale}vw)`;
  const translation = -100 * (depth - 1);
  console.log(scale, depth);
  return (
    <div className={`parallax_layer`}>
      <img src={src} style={{ transform: `translateZ(${translation}px) scale(1)`, width: vwWidth }} />
    </div>
  );
};

const Parallax: React.FC = () => {
  const parallaxLayers = [
    { src: pb1, depth: 9 },
    { src: pb2, depth: 8 },
    { src: pb3, depth: 7 },
    { src: pb4, depth: 6 },
    { src: pb5, depth: 5 },
    { src: pb6, depth: 4 },
    { src: pb7, depth: 3 },
    { src: pb8, depth: 2 },
    { src: pb9, depth: 1 }
  ];

  return (
    <div className="parallax">
      {parallaxLayers.map(({ src, depth }) => (
        <ParallaxLayer key={src} src={src} depth={depth} />
      ))}
    </div>
  );
};

function GetParallaxDiv()
{
    return (
        <Parallax />
      )
}

export default GetParallaxDiv;