import TamimLogo from "../../assets/tamim_logo_transparent.png"

const Navbar = () => {
    return (
        <>
            <nav>
                <div>
                    <a href="/" className="inline-block">
                        <img className="w-48 md:w-60" src={TamimLogo} alt="Tamim Talukdar" />
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;