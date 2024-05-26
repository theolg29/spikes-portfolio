const Footer = () => {
    return (
        <footer className="flex items-center justify-between m-5">
            <div className="flex">
                <img src="/public/icons/Logomark.svg" alt="" />
                <h1 className="text-3xl font-medium ml-5">Layers</h1>
            </div>
            <div className="links">
                <ul className="flex items-center space-x-5">
                    <li><img src="/public/icons/Social icon.svg" alt="" /></li>
                    <li><img src="/public/icons/Social icon-1.svg" alt="" /></li>
                    <li><img src="/public/icons/Social icon-2.svg" alt="" /></li>
                </ul>
            </div>
            
        </footer>
    );
};

export default Footer;