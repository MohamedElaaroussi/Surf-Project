import { jsx as _jsx } from "react/jsx-runtime";
var Maps_location = function () {
    var partners = [
        { name: "Partner 1", logo: "images/partner1.png" },
        { name: "Partner 2", logo: "images/partner2.svg" },
        { name: "Partner 3", logo: "https://example.com/images/partner-3.png" },
        { name: "Partner 4", logo: "https://example.com/images/partner-4.png" },
        { name: "Partner 5", logo: "https://example.com/images/partner-5.png" },
        { name: "Partner 6", logo: "https://example.com/images/partner-6.png" },
        { name: "Partner 7", logo: "https://example.com/images/partner-7.png" },
        { name: "Partner 8", logo: "https://example.com/images/partner-8.png" },
    ];
    return (_jsx("div", { className: "flex justify-center items-center h-screen", children: _jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.8569059392184!2d-10.042925025341896!3d29.589705239974574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb48fb339c0219b%3A0x10b661ea21556545!2sMirleft%20Plage%20Maroc!5e1!3m2!1sfr!2sma!4v1729313692899!5m2!1sfr!2sma", width: "600", height: "450", style: { border: "0" }, allowFullScreen // Correction ici
            : true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" // Correction ici
         }) }));
};
export default Maps_location;
