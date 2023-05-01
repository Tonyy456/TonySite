import pb1 from '/parallax_bg_1.png'
import pb2 from '/parallax_bg_2.png'
import pb3 from '/parallax_bg_3.png'
import pb4 from '/parallax_bg_4.png'
import pb5 from '/parallax_bg_5.png'
import pb6 from '/parallax_bg_6.png'
import pb7 from '/parallax_bg_7.png'
import pb8 from '/parallax_bg_8.png'
import pb9 from '/parallax_bg_9.png'

interface Props {
    imageUrls: string[];
  }

const Parallax: React.FC<Props> = ({ imageUrls } : Props) : JSX.Element  => 
{
  const url_count = imageUrls.length;

  var classes: Array<string> = [];
  for(let i = 0; i < url_count; i++)
  {
    classes.push(`parallax__layer__${i}`)
  }

  const renderGalleryItems = () : JSX.Element[] => {
    return imageUrls.map((url, index) => (
      <div className={classes[index] + ' parallax__layer'} key={index}>
        <img src={url} />
      </div>
    ));
  }

  return (
    <>
    {renderGalleryItems()}
    </>
  )

}

const urls : string[] = [pb1,pb2,pb3,pb4,pb5,pb6,pb7,pb8,pb9];

function GetParallaxDiv()
{
    return (
        <Parallax imageUrls={urls} />
      )
}

export default GetParallaxDiv;