import Card from "../cards/Spectrum/Card"
import Navbar from "../components/Navbar";
const Spectrum = () => {
    return (
        <div>
            <Navbar home='inactive' events='inactive' developers='inactive' about='inactive' feed='inactive' members='inactive' Spectrum='active' />
            <div className="flex flex-wrap">
                <Card name="FASTWEB" content={`
                A hackathon for the web developers
            `}
                    photo="https://res.cloudinary.com/dhry5xscm/image/upload/v1693860527/ecs-website/cardimg_m5t0pi.png"
                />
            </div>
        </div>
    );
}
export default Spectrum;