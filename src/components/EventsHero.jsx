import React from 'react';
const EventsHero = () => {
    return (
        <div style={{ backgroundImage: "url('https://res.cloudinary.com/dhry5xscm/image/upload/v1702401198/ecs-website/events_page_cover_ok022w.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            <div className='bg-[#00000055] p-[8rem] pl-[1rem] md:pl-[20%] pr-[1rem] md:pr-[20%]' style={{ backdropFilter: 'blur(4px)' }}>
                <h1 className='text-[1.3125rem] md:text-[1.6rem] uppercase text-[#ffffff]'>KNOW YOUR EVENTS</h1><br />
                <p className='text-[#ffffff] w-[100%] text-[1.05rem] md:text-[1.25rem]'>
                    With the vast array of events going on under it, ECS truely proves to be a versatile society. Throughout the calendar year, a number of exciting events are organised by this thriving society. The events can be both technical, as well as non-technical. These events are meant for the goodwill of the students of the branch. The events also include competitions to level up the competitive spirit of a student. These competitions can be broadly classified into LIT-FIT-TECH. LIT stands for Literary, FIT for Fitness and TECH for Technology. Let us find out more about the events.
                </p>
            </div>
        </div>
    );
};
export default EventsHero;