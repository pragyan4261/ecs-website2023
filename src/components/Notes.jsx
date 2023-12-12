import React from 'react';
import Navbar from "./Navbar";
import { useParams } from 'react-router-dom'
import './Notes.css'
const Notes = (props) => {
    const { sem } = useParams;

    const collection = {
        'First': [
            { name: 'Mathematics-I', dest: 'https://drive.google.com/drive/folders/1U049Mmp5HQz9Ru-mVG63STDlG5yBT4ao?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702125979/ecs-website/635eeb3d-640a-4259-84bf-2666deca8e3c_gvlwqu.jpg' },
            { name: 'Chemistry', dest: 'https://drive.google.com/drive/folders/1UPJ6HVHTM4Bqb-r7IHikZxW4mJCsVhnI?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702125942/ecs-website/eb79df6e-9e62-45bc-8f3e-704d6e50fa51_px2zte.jpg' },
            { name: 'Introduction to C Programming', dest: 'https://drive.google.com/drive/folders/1JaxkLym6Fx5o3NcTXrQu1AdpTV7FQ1lC?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702126266/ecs-website/dac67fc0-2f26-42fd-8bdb-782fc195a046_aq0yrj.jpg' },
            { name: 'Basic Electronics', dest: 'https://drive.google.com/drive/folders/1UW6MITK5Wp6N413KvtBO655AiYUfWHTd?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702125930/ecs-website/6de9d208-e8c9-43d7-a26c-9cd7cde10e2a_i0gens.jpg' },
            { name: 'Environmental Science & Engineering', dest: 'https://drive.google.com/drive/folders/1UXENwEHI0NXr7fZlCWiWnOQbdYx3JwTh?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702125962/ecs-website/5f9b621b-d0fb-4396-918e-e8d391634637_tq16ve.jpg' }
        ],
        'Second': [
            { name: 'Mathematics-II', dest: 'https://drive.google.com/drive/folders/1yq3nYJLLgfBTdzVTLmLQpzKtsaKpcRej?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702125979/ecs-website/635eeb3d-640a-4259-84bf-2666deca8e3c_gvlwqu.jpg' },
            { name: 'Physics', dest: 'https://drive.google.com/drive/folders/14rkf-pptG_AZ72QcyQpel5MfPJn5Fl7I?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702125970/ecs-website/2aa448a1-0412-485d-a38b-79d58a593172_pfbyqw.jpg' },
            { name: 'Engineering Mechanics', dest: 'https://drive.google.com/drive/folders/11E9dNQCvgRO2FXRWRtWcER3qDf_-iqYB?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702125964/ecs-website/abbadc8c-e0b8-46aa-beeb-cc6f46d39609_vtdqpb.jpg' },
            { name: 'Basic Electrical Engineering', dest: 'https://drive.google.com/drive/folders/17_suMpeZ_hc-UhaNeoMaTQYIfIAPp4um?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702125939/ecs-website/f8f0fab1-d8f7-4555-aa3d-cc95ab17bbb2_jipsyr.jpg' },
            { name: 'Communicative English', dest: 'https://drive.google.com/drive/folders/1Ymd5n6V724E6OEL6lGEjVqrfwTmIpn7g?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702125954/ecs-website/ac79e8c9-7fc9-4fd5-aebf-3c0aaa1353ec_qcneze.jpg' },
            { name: 'Engineering Graphics and Design', dest: 'https://drive.google.com/drive/folders/1Rl8hgGomTDegkm_N4FBfWH9WTqtM7Ha2?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702125946/ecs-website/ee9185ae-732d-4180-8c87-ad9ce2d2520d_kmxp7x.jpg' }
        ],
        'Third': [
            { name: 'Mathematics-III', dest: 'https://drive.google.com/drive/folders/1o9O7EcyZWrebukg4tFr5f49UsP3BoY4m?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702125979/ecs-website/635eeb3d-640a-4259-84bf-2666deca8e3c_gvlwqu.jpg' },
            { name: 'Electronic Devices', dest: 'https://drive.google.com/drive/folders/1yg5DfbygXgUOw8hZY0PyRfNc1J5i9BL8?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702125951/ecs-website/f10358c0-8ec2-40cb-9144-f40a62e29eca_tek8fc.jpg' },
            { name: 'Analog Electronics', dest: 'https://drive.google.com/drive/folders/1X-NAB6RW7gt7D02iN4LrlodJdh-ExN-8?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702125928/ecs-website/2e2afc61-e38d-4124-b79f-bf38c8c66d53_cxdzwr.jpg' },
            { name: 'Signals and Systems', dest: 'https://drive.google.com/drive/folders/1ZreTTYywS3I6NXJqcKwa_BVprsv-GcRa?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702125977/ecs-website/e246f894-8e44-44cd-8aef-5ae266cd7065_y66q19.jpg' },
            { name: 'Network Analysis and Synthesis', dest: 'https://drive.google.com/drive/folders/1pDK7I25VsC2-xUpxVP7QPbJvEQln2-LI?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702125968/ecs-website/cfd7b357-c424-415b-8775-8f39348fc199_rgltja.jpg' },
            { name: 'Data Structures and Algorithms', dest: 'https://drive.google.com/drive/folders/1Waw3okYfQZ4LAv0M4gH2hjDxihvYBp1U?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702126266/ecs-website/dac67fc0-2f26-42fd-8bdb-782fc195a046_aq0yrj.jpg' }
        ],
        'Fourth': [
            { name: 'Analog Communication', dest: 'https://drive.google.com/drive/folders/1Vd5SP6jI3G4E4Yk6h7v257End3nZxR-G?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702148280/ecs-website/6f13a684-15c5-47b7-b6e5-1fd6c44ab1c7_pplwmk.jpg' },
            { name: 'Control System', dest: 'https://drive.google.com/drive/folders/1VjeumFaFfRsttzQOeKMILlVrdjqO7sLH?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702148278/ecs-website/d8f8f0d3-491f-4ade-9420-37e4f481f421_qdtmse.jpg' },
            { name: 'Digital Electronics', dest: 'https://drive.google.com/drive/folders/1VbiSWNCbpDxaPNC4h1tsv1Q_c6_i-8Di?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702148266/ecs-website/47117c5a-c665-4758-9539-ec03760f62f3_tn2bqq.jpg' },
            { name: 'Electrical and Electronic Materials', dest: 'https://drive.google.com/drive/folders/1Vaoa_VekARLfRlT3Pu9WjMvV4VMQJuTG?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702393658/ecs-website/electrical_and_electronic_materials_crtel6.webp' },
            { name: 'Electromagnetic Field Theory', dest: 'https://drive.google.com/drive/folders/1VgxRDqHTmOH7tW15Ineqt-6xRgvSJBGa?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702148257/ecs-website/ca509263-1880-41eb-a47d-6404e475c709_imxeyj.jpg' },
            { name: 'Probability and Random Process', dest: 'https://drive.google.com/drive/folders/1VlFx3vh1zbMIBPJJLJw0H4lEIhdUXtw_?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702148259/ecs-website/53246fa7-e26a-41b5-975b-d2118b024fa7_jvw6oq.jpg' }
        ],
        'Fifth': [
            { name: 'Analog Circuit Design', dest: 'https://drive.google.com/drive/folders/1dP_PGkswfhyKRpCqjpqKSS8rj-ZvLEzm?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702393658/ecs-website/analog_circuit_design_dcoj9z.jpg' },
            { name: 'Digital Communications', dest: 'https://drive.google.com/drive/folders/1k32bMGitS955ldzfUzJckEWc5-NSy6Gy?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702148243/ecs-website/ca122db6-a686-4b88-9c89-08f1be26eb18_hhrlci.jpg' },
            { name: 'Digital Signal Processing', dest: 'https://drive.google.com/drive/folders/11VHsWHEthLjANjvI4SqZpeIJpro_jYhQ?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702148210/ecs-website/96486496-4538-44b7-9f6f-d8b570e9a963_vaw0wu.jpg' },
            { name: 'Measurements and Instrumentation', dest: 'https://drive.google.com/drive/folders/1N2x793UZjkPjZs2hueDIfTUiTkzxqWOn?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702393658/ecs-website/measurement_and_instrumentation_vrnrjw.jpg' },
            { name: 'Microprocessor', dest: 'https://drive.google.com/drive/folders/1O9YNjQ9FfjSyzqu6B3qkPbY5hFqRG9hU', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702148251/ecs-website/ea53886e-8531-4da8-b080-649851ba41d7_lq5zqx.jpg' },
            { name: 'Optoelectronics', dest: 'https://drive.google.com/drive/folders/1NEvBWsHpHa9JElmfOUQ-KHyxF4wCw9qH?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702148238/ecs-website/591db996-96b9-4150-8cb4-5971fdab005b_vjbogj.jpg' }
        ],
        'Sixth': [
            { name: 'Data Communication', dest: 'https://drive.google.com/drive/folders/1_lU7v6PHvBXQ4oABxAA8QV2qhS03tlyA?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702393658/ecs-website/data_communication_wqukgz.jpg' },
            { name: 'Materials For Semiconductors', dest: 'https://drive.google.com/drive/folders/1mp655A-LbBp_UenK8NR59i_0qlnY9-tg?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702394137/ecs-website/semicondutor_materials_vfxaxb.webp' },
            { name: 'Neural Networks and Fuzzy Logic', dest: 'https://drive.google.com/drive/folders/1l_gAX4yyq7FDIMCLyJYrIeaXmXwQqej2?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702148229/ecs-website/4968a1ca-0e24-425b-a9ab-82300eac9696_rbivdu.jpg' },
            { name: 'Power Electronics', dest: 'https://drive.google.com/drive/folders/1XCKAWd8z8ApvRwdjqq8txgw9Gz6Sib1r?hl=en_GB', img: "https://res.cloudinary.com/dhry5xscm/image/upload/v1702148237/ecs-website/0f792de9-7386-45d9-80e7-81687de7b968_qoj3np.jpg" },
            { name: 'RF and Microwave', dest: 'https://drive.google.com/drive/folders/1pDulg3-Lcfv0yTQvS132EeaqJLnkMBdk?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702393658/ecs-website/RF_and_microwave_yjbem7.jpg' },
            { name: 'VLSI', dest: 'https://drive.google.com/drive/folders/1LXLRsjGDQF6QDJe6-kmCZX2zvHguczO6?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702148233/ecs-website/a2e27375-4efb-4145-bdd3-1ccd25ab4ca0_xc7z9j.jpg' }
        ],
        'Seventh': [
            { name: 'Business Management', dest: 'https://drive.google.com/drive/folders/1R2sZIkWWahKbhvv5elvq3xAqIrbLHBXu?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702148223/ecs-website/1819247a-68b3-45b8-8bef-a3ebc8fa24c8_yhv4p7.jpg' },
            { name: 'Machine Learning', dest: 'https://drive.google.com/drive/folders/1s9sX1mFn5C1F8QFaMYyV4HVR2uqevw51?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702393658/ecs-website/machine_learning_aabyol.jpg' },
            { name: 'Satellite Communication', dest: 'https://drive.google.com/drive/folders/11LBc0YsCPw5d_qDLMXDCTkdYroXpL4S8?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702148221/ecs-website/33952070-d251-4936-8067-89b7b3900f08_kxb82b.jpg' },
            { name: 'Wireless Communication', dest: 'https://drive.google.com/drive/folders/1il1y5gfG8Gjtw_zuMipMcCmhrsis5_4e?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702148210/ecs-website/96486496-4538-44b7-9f6f-d8b570e9a963_vaw0wu.jpg' },
        ],
        'Eighth': [
            { name: 'Management Studies', dest: 'https://drive.google.com/drive/folders/1Ajyu3xtdqioRfO6lVkQcUuSDdF7Xq5WV?hl=en_GB', img: 'https://res.cloudinary.com/dhry5xscm/image/upload/v1702393965/ecs-website/management_hvqqld.jpg' },
        ]
    };

    const subjects = collection[sem] || [];
    return (
        <div>
            <Navbar home='inactive' events='inactive' developers='inactive' about='inactive' feed='inactive' members='inactive' />
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                {collection[props.sem].map((item, index) => (
                    <a target="_blank" rel="noopener noreferrer" href={item.dest} key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url('${item.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', overflow: 'hidden', textAlign: 'center', height: '20rem', margin: '5rem', width: '20rem' }} className='subHolder'>
                        <div className='lustre'></div>
                        <h2 className='text-[1.3rem] text-[#ffffff] bg-[#00000099] p-[1rem]' style={{ border: '0px solid transparent', borderRadius: '2rem' }}>{item.name}</h2>
                    </a>))}
            </div>
        </div>
    );
}
export default Notes;