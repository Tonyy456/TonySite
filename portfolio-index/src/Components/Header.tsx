
import "./Header.css"
interface Item
{
    name: string;
    link: string;
}

interface Props
{
    items: Item[];
}

export class HeaderTab implements Item
{
    public name: string;
    public link: string;
    constructor(name_: string, link_: string)
    {
        this.name = name_;
        this.link = link_;
    }
}

const Header = ({items} : Props)  => {
    const elements : JSX.Element[] = items.map((item, index) => {
        return <a href={item.link}><p key={index}>{item.name}</p></a>
    })
    return (
        <>
            <div className="HeaderTabHolder">
                {elements}
            </div>
        </>
    )
}

export default Header;