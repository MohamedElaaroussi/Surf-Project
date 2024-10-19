import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
const SocialMediaSection = () => {
    const socialMedias = [
        { name: 'facebook', icon: _jsx(FaFacebookF, {}), link: 'https://www.facebook.com/abdilah.farouki' },
        { name: 'instagram', icon: _jsx(FaInstagram, {}), link: 'https://instagram.com' },
        { name: 'twitter', icon: _jsx(FaTwitter, {}), link: 'https://twitter.com' },
        { name: 'youtube', icon: _jsx(FaYoutube, {}), link: 'https://youtube.com' },
        { name: 'whatsapp', icon: _jsx(FaWhatsapp, {}), link: 'https://api.whatsapp.com/send/?phone=653175243&text=Hello%2C+I+would+like+to+know+more+about+your+services.&type=phone_number&app_absent=0' } // Remplace 'yourNumber' par ton numéro WhatsApp
    ];
    return (_jsx(motion.section, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "py-16 bg-gray-100", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl font-bold mb-8 text-center", children: "Suivez-nous" }), _jsx("div", { className: "flex justify-center space-x-8 mb-8", children: socialMedias.map((social) => (_jsx(motion.a, { href: social.link, target: "_blank", rel: "noopener noreferrer", whileHover: { scale: 1.2 }, className: "text-4xl text-gray-600 hover:text-blue-500", children: social.icon }, social.name))) })] }) }));
};
export default SocialMediaSection;
