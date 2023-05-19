
const Footer = () => {
    return (
        <footer className="mt-5 footer p-10 bg-base-200 text-base-content">
            <div>
                <img className="w-72" src="/src/assets/logo.png" alt="" />
                <p>KidsLand Ltd.<br />Providing kids toy since 1999</p>
            </div>
            <div>
                <span className="footer-title">Social Links</span>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">Twitter</a>
                <a className="link link-hover">Instagram</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;