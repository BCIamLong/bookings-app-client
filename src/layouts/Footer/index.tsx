import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { IoLogoGooglePlaystore, IoLogoAppleAppstore } from "react-icons/io5";
import Logo from "../Logo";
import FooterList from "../FooterList";
import Button from "../../components/Button";
import Copyright from "../Copyright";

export default function Footer() {
  return (
    <footer className="bg-stone-50">
      <nav className="grid grid-cols-[2.1fr,1fr,1fr,1fr] gap-x-16 px-16 py-20">
        <div className="flex flex-col gap-6">
          <Logo />
          <p className="text-xs text-stone-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            debitis accusantium autem nemo nobis enim iusto? Praesentium
            cupiditate asperiores officia quas maiores doloremque, fuga aperiam,
            impedit et rerum quibusdam nesciunt!
          </p>
          <div className="flex gap-3">
            <Button type="footer">
              <IoLogoGooglePlaystore className="text-lg" />
              <span>PlayStore</span>
            </Button>
            <Button type="footer">
              <IoLogoAppleAppstore className="text-lg" />
              <span>AppleStore</span>
            </Button>
          </div>
        </div>
        <FooterList title="Company">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Legal information</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
        </FooterList>

        <FooterList title="Help center">
          <li>
            <a href="#">Find a property</a>
          </li>
          <li>
            <a href="#">How to host?</a>
          </li>
          <li>
            <a href="#">Why us?</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Rental guides</a>
          </li>
        </FooterList>

        <FooterList title="Contact Inf">
          <li>
            <a href="#">Phone: 1234567890</a>
          </li>
          <li>
            <a href="#">Email: company@example.com</a>
          </li>
          <li>
            <a href="#">Location: 123 None</a>
          </li>
          <li>
            <div className="mt-2 flex gap-2 text-xl">
              <a href="">
                <FaFacebookSquare />
              </a>
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
            </div>
          </li>
        </FooterList>
      </nav>
      <Copyright />
    </footer>
  );
}
