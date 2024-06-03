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
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="bg-stone-50">
      <nav className="grid grid-cols-[2.1fr,1fr,1fr,1fr] gap-x-16 gap-y-12 px-16 py-20 thin:max-sm:grid-cols-[2.1fr,1fr] thin:max-sm:gap-x-8">
        <div className="flex flex-col gap-6">
          <Logo />
          <p className="text-xs text-stone-400">
            {t('footer.description')}
          </p>
          <div className="flex gap-3">
            <Button type="footer">
              <IoLogoGooglePlaystore className="text-lg" />
              <span>{t('footer.play-store')}</span>
            </Button>
            <Button type="footer">
              <IoLogoAppleAppstore className="text-lg" />
              <span>AppleStore</span>
            </Button>
          </div>
        </div>
        <FooterList title="Company">
          <li>
            <a href="#">{t('footer.nav.company.nav.about')}</a>
          </li>
          <li>
            <a href="#">{t('footer.nav.company.nav.legal-inf')}</a>
          </li>
          <li>
            <a href="#">{t('footer.nav.company.nav.contact')}</a>
          </li>
          <li>
            <a href="#">{t('footer.nav.company.nav.blogs')}</a>
          </li>
        </FooterList>

        <FooterList title="Help center">
          <li>
            <a href="#">{t('footer.nav.help.nav.find')}</a>
          </li>
          <li>
            <a href="#">{t('footer.nav.help.nav.how')}</a>
          </li>
          <li>
            <a href="#">{t('footer.nav.help.nav.why')}</a>
          </li>
          <li>
            <a href="#">{t('footer.nav.help.nav.faqs')}</a>
          </li>
          <li>
            <a href="#">{t('footer.nav.help.nav.guide')}</a>
          </li>
        </FooterList>

        <FooterList title="Contact Inf">
          <li>
            <a href="#">{t('footer.nav.contact.nav.phone')}</a>
          </li>
          <li>
            <a href="#">{t('footer.nav.contact.nav.email')}</a>
          </li>
          <li>
            <a href="#">{t('footer.nav.contact.nav.location')}</a>
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
