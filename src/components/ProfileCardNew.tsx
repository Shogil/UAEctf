import React from "react";

const ProfileCardNew = ({
    name, photo, prize = '',reward = null, linkedIn = null
}) => (
    <div className="shadow h-full text-center rounded-xl bg-white py-5 px-3">
         <video autoPlay loop muted src={photo} />
        <div className="text-xl lg:text-2xl font-semibold mb-2 mt-3">{name}</div>
        <div className=" text-xl lg:text-2xl font-bold mb-2 mt-3">{prize}</div>
        {prize && <div className="text-lg">{reward}</div>}
        {linkedIn && (
            <div className=" mt-3 text-3xl text-center">
                <a href={linkedIn} target="_blank" className="fab fa-linkedin" />
            </div>
        )}
    </div>
);

export default ProfileCardNew;