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
  trans: number[];
}

const ParallaxLayer: React.FC<ParallaxLayerProps> = ({ src, depth, trans }) => {
  const scale = ((1 + (depth - 1) * 1) * 100);
  const vwWidth = `calc(${scale}vw)`;
  const translationX = -50 * (depth - 1) + trans[0];
  const translationY = -45 * (depth - 1) + trans[1];
  const translationZ = -100 * (depth - 1) + trans[2];
  const translation = `translate3d(${translationX}vw, ${translationY}vh, ${translationZ}px)`
  return (
    <div className={`parallax_layer`}>
      <div className={`parallax_layer_container`} >
        <img src={src} style={{ transform: translation, width: vwWidth }}/>
      </div>
    </div>
  );
};

const Parallax: React.FC = () => {
  const parallaxLayers = [
    { src: pb1, depth: 9, trans: [0,-50,0]},
    { src: pb2, depth: 8, trans: [0,-25,0] },
    { src: pb3, depth: 7, trans: [0,100,0] },
    { src: pb4, depth: 6, trans: [0,100,0] },
    { src: pb5, depth: 5, trans: [0,100,0] },
    { src: pb6, depth: 4, trans: [0,100,0] },
    { src: pb7, depth: 3, trans: [0,100,0] },
    { src: pb8, depth: 2, trans: [0,100,0] },
    { src: pb9, depth: 1, trans: [0,100,0] }
  ];

  return (
    <div className="parallax">
      {parallaxLayers.map(({ src, depth, trans }) => (
        <ParallaxLayer key={src} src={src} depth={depth} trans={trans}/>
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