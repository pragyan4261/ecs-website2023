import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventsHero from '../components/EventsHero';
import EventsCard from '../cards/EventsCard';
const Events = () => {
    const events = [
        { reference: 'Orientation', order: 'flex-row', name: 'Orientation', desc: 'The new members of the ECE Department are cordially welcomed by ECS. The numerous facets of the branch, the faculties, and the various events that the society has planned for them are introduced to the newcomers. Freshmen are given the chance to clear any query they may have about the branch.', photo: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1701984664/ecs-website/orientation23-img_v4xrwk.jpg' },
        { reference: 'Utkrishtha', order: 'flex-row', name: 'Utkrishtha', desc: 'Every year ECS welcomes its freshees to the college in a glamourous way. Utkrishtha, the freshers party, is organised by ECS which involves a lot of fun activities including music, dance, ramp walk and many more.', photo: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1701984661/ecs-website/freshers23-img_fsfmck.jpg' },
        { reference: 'Spectrum', order: 'flex-row', name: 'Spectrum', desc: 'Spectrum is the annual branch fest of ECE organised to foster the technical and artistic traits in the students .To display a variety of skills, coding competitions, hackathons, literary contests, photography competitions, poster competitions, and many more amusing competitions are organised.', photo: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1693860527/ecs-website/cardimg_m5t0pi.png' },
        { reference: 'Spectrum Fit', order: 'flex-row', name: 'Spectrum Fit', desc: "Health is beauty and fitness is its key. We all know the importance of physical and mental fitness in ones's overall development. Keeping that in mind, ECS conducts Spectrum Fit where the participants show their sporting spirit and enthusiasm towards fitness.", photo: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1701985197/ecs-website/specfit-img_otd7vl.jpg' },
        {
            reference: 'Dehleez', order: 'flex-row', name: 'Dehleez', desc: 'We say adieu in style. Final-year seniors leave the college in a fun and memorable way by walking through Dahleez. Dahleez, the ECE branch farewell, gives the seniors a chance to reconcile their exciting college journey.', photo: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1701985195/ecs-website/dehleez-img_uhlfxy.jpg'
        }
    ];
    return (
        <div>
            <Navbar home='inactive' events='active' developers='inactive' about='inactive' feed='inactive' members='inactive' />
            <EventsHero />
            {events.map((item) => <EventsCard reference={item.reference} name={item.name} desc={item.desc} photo={item.photo} order={item.order} />)}
            <Footer />
        </div>
    );
};
export default Events;