import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventsHero from '../components/EventsHero';
import EventsCard from '../cards/EventsCard';
const Events = () => {
    const events = [
        { order: 'flex-row', name: 'Spectrum', desc: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', photo: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1693860527/ecs-website/cardimg_m5t0pi.png' },
        { order: 'flex-row-reverse', name: 'Spectrum', desc: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', photo: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1693860527/ecs-website/cardimg_m5t0pi.png' },
        { order: 'flex-row', name: 'Spectrum', desc: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', photo: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1693860527/ecs-website/cardimg_m5t0pi.png' },
        { order: 'flex-row-reverse', name: 'Spectrum', desc: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', photo: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1693860527/ecs-website/cardimg_m5t0pi.png' }
    ];
    return (
        <div>
            <Navbar home='inactive' events='active' developers='inactive' about='inactive' feed='inactive' members='inactive' />
            <EventsHero />
            {events.map((item) => <EventsCard name={item.name} desc={item.desc} photo={item.photo} order={item.order} />)}
            <Footer />
        </div>
    );
};
export default Events;