import React from "react";

const SocialMediaLinks = () => {

    const links = [
        // {
        //     "href": "",
        //     "icon": "fa fa-envelope"
        // },
        {
            "href": "",
            "icon": "fab fa-instagram"
        },
        {
            "href": "",
            "icon": "fab fa-twitter"
        },
        // {
        //     "href": "",
        //     "icon": "fab fa-facebook"
        // },
        {
            "href": "",
            "icon": "fab fa-youtube"
        },
        // {
        //     "href": "",
        //     "icon": "fab fa-discord"
        // }
    ];

    return (
        <div className="flex items-center md:justify-end text-2xl lg:text-3xl xl:text-4xl justify-center md:mb-0 mb-2 p-2">
            {links.map((l) => (
                <a
                    className="mx-2 opacity-75 hover:opacity-100"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={l.href}
                >
                    <i className={l.icon} />
                </a>
            ))}
        </div>
    )

};

export default SocialMediaLinks;