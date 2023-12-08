import React from 'react';
import Navbar from "./Navbar";
import { useParams } from 'react-router-dom'
const Notes = (props) => {
    const { sem } = useParams;

    const collection = {
        'First': [
            { name: 'Mathematics-I', dest: 'https://drive.google.com/drive/folders/1U049Mmp5HQz9Ru-mVG63STDlG5yBT4ao?hl=en_GB', img: 'src/images/kxov0rcoi4p21.png' },
            { name: 'Chemistry', dest: 'https://drive.google.com/drive/folders/1UPJ6HVHTM4Bqb-r7IHikZxW4mJCsVhnI?hl=en_GB' },
            { name: 'Introduction to C Programming', dest: 'https://drive.google.com/drive/folders/1JaxkLym6Fx5o3NcTXrQu1AdpTV7FQ1lC?hl=en_GB' },
            { name: 'Basic Electronics', dest: 'https://drive.google.com/drive/folders/1UW6MITK5Wp6N413KvtBO655AiYUfWHTd?hl=en_GB' },
            { name: 'Environmental Science & Engineering', dest: 'https://drive.google.com/drive/folders/1UXENwEHI0NXr7fZlCWiWnOQbdYx3JwTh?hl=en_GB' }
        ],
        'Second': [
            { name: 'Mathematics-II', dest: 'https://drive.google.com/drive/folders/1yq3nYJLLgfBTdzVTLmLQpzKtsaKpcRej?hl=en_GB' },
            { name: 'Physics', dest: 'https://drive.google.com/drive/folders/14rkf-pptG_AZ72QcyQpel5MfPJn5Fl7I?hl=en_GB' },
            { name: 'Engineering Mechanics', dest: 'https://drive.google.com/drive/folders/11E9dNQCvgRO2FXRWRtWcER3qDf_-iqYB?hl=en_GB' },
            { name: 'Basic Electrical Engineering', dest: 'https://drive.google.com/drive/folders/17_suMpeZ_hc-UhaNeoMaTQYIfIAPp4um?hl=en_GB' },
            { name: 'Communicative English', dest: 'https://drive.google.com/drive/folders/1Ymd5n6V724E6OEL6lGEjVqrfwTmIpn7g?hl=en_GB' },
            { name: 'Engineering Graphics and Design', dest: 'https://drive.google.com/drive/folders/1Rl8hgGomTDegkm_N4FBfWH9WTqtM7Ha2?hl=en_GB' }
        ],
        'Third': [
            { name: 'Mathematics-III', dest: 'https://drive.google.com/drive/folders/1o9O7EcyZWrebukg4tFr5f49UsP3BoY4m?hl=en_GB' },
            { name: 'Electronic Devices', dest: 'https://drive.google.com/drive/folders/1yg5DfbygXgUOw8hZY0PyRfNc1J5i9BL8?hl=en_GB' },
            { name: 'Analog Electronics', dest: 'https://drive.google.com/drive/folders/1X-NAB6RW7gt7D02iN4LrlodJdh-ExN-8?hl=en_GB' },
            { name: 'Signals and Systems', dest: 'https://drive.google.com/drive/folders/1ZreTTYywS3I6NXJqcKwa_BVprsv-GcRa?hl=en_GB' },
            { name: 'Network Analysis and Synthesis', dest: 'https://drive.google.com/drive/folders/1pDK7I25VsC2-xUpxVP7QPbJvEQln2-LI?hl=en_GB' },
            { name: 'Data Structures and Algorithms', dest: 'https://drive.google.com/drive/folders/1Waw3okYfQZ4LAv0M4gH2hjDxihvYBp1U?hl=en_GB' }
        ],
        'Fourth': [
            { name: 'Analog Communication', dest: 'https://drive.google.com/drive/folders/1Vd5SP6jI3G4E4Yk6h7v257End3nZxR-G?hl=en_GB' },
            { name: 'Control System', dest: 'https://drive.google.com/drive/folders/1VjeumFaFfRsttzQOeKMILlVrdjqO7sLH?hl=en_GB' },
            { name: 'Digital Electronics', dest: 'https://drive.google.com/drive/folders/1VbiSWNCbpDxaPNC4h1tsv1Q_c6_i-8Di?hl=en_GB' },
            { name: 'Electrical and Electronic Materials', dest: 'https://drive.google.com/drive/folders/1Vaoa_VekARLfRlT3Pu9WjMvV4VMQJuTG?hl=en_GB' },
            { name: 'Electromagnetic Field Theory', dest: 'https://drive.google.com/drive/folders/1VgxRDqHTmOH7tW15Ineqt-6xRgvSJBGa?hl=en_GB' },
            { name: 'Probability and Random Process', dest: 'https://drive.google.com/drive/folders/1VlFx3vh1zbMIBPJJLJw0H4lEIhdUXtw_?hl=en_GB' }
        ],
        'Fifth': [
            { name: 'Analog Circuit Design', dest: 'https://drive.google.com/drive/folders/1dP_PGkswfhyKRpCqjpqKSS8rj-ZvLEzm?hl=en_GB' },
            { name: 'Digital Communications', dest: 'https://drive.google.com/drive/folders/1k32bMGitS955ldzfUzJckEWc5-NSy6Gy?hl=en_GB' },
            { name: 'Digital Signal Processing', dest: 'https://drive.google.com/drive/folders/11VHsWHEthLjANjvI4SqZpeIJpro_jYhQ?hl=en_GB' },
            { name: 'Measurements and Instrumentation', dest: 'https://drive.google.com/drive/folders/1N2x793UZjkPjZs2hueDIfTUiTkzxqWOn?hl=en_GB' },
            { name: 'Microprocessor', dest: '' },
            { name: 'Optoelectronics', dest: 'https://drive.google.com/drive/folders/1NEvBWsHpHa9JElmfOUQ-KHyxF4wCw9qH?hl=en_GB' }
        ],
        'Sixth': [
            { name: 'Data Communication', dest: 'https://drive.google.com/drive/folders/1_lU7v6PHvBXQ4oABxAA8QV2qhS03tlyA?hl=en_GB' },
            { name: 'Materials For Semiconductors', dest: 'https://drive.google.com/drive/folders/1mp655A-LbBp_UenK8NR59i_0qlnY9-tg?hl=en_GB' },
            { name: 'Neural Networks and Fuzzy Logic', dest: 'https://drive.google.com/drive/folders/1l_gAX4yyq7FDIMCLyJYrIeaXmXwQqej2?hl=en_GB' },
            { name: 'Power Electronics', dest: 'https://drive.google.com/drive/folders/1XCKAWd8z8ApvRwdjqq8txgw9Gz6Sib1r?hl=en_GB' },
            { name: 'RF and Microwave', dest: 'https://drive.google.com/drive/folders/1pDulg3-Lcfv0yTQvS132EeaqJLnkMBdk?hl=en_GB' },
            { name: 'VLSI', dest: 'https://drive.google.com/drive/folders/1LXLRsjGDQF6QDJe6-kmCZX2zvHguczO6?hl=en_GB' }
        ],
        'Seventh': [
            { name: 'Business Management', dest: 'https://drive.google.com/drive/folders/1R2sZIkWWahKbhvv5elvq3xAqIrbLHBXu?hl=en_GB' },
            { name: 'Machine Learning', dest: 'https://drive.google.com/drive/folders/1s9sX1mFn5C1F8QFaMYyV4HVR2uqevw51?hl=en_GB' },
            { name: 'Satellite Communication', dest: 'https://drive.google.com/drive/folders/11LBc0YsCPw5d_qDLMXDCTkdYroXpL4S8?hl=en_GB' },
            { name: 'Wireless Communication', dest: 'https://drive.google.com/drive/folders/1il1y5gfG8Gjtw_zuMipMcCmhrsis5_4e?hl=en_GB' },
        ],
        'Eighth': [
            { name: 'Management Studies', dest: 'https://drive.google.com/drive/folders/1Ajyu3xtdqioRfO6lVkQcUuSDdF7Xq5WV?hl=en_GB' },
        ]
    };

    const subjects = collection[sem] || [];
    return (
        <div>
            <Navbar home='inactive' events='inactive' developers='inactive' about='inactive' feed='inactive' members='inactive' />
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {collection[props.sem].map((item, index) => (<div key={index} style={{ margin: '75px', textAlign: 'center' }}>
                <a href={item.dest} target="_blank" rel="noopener noreferrer">
                <img src={`/images/${item.img}`} 
                 alt={`${item.name} Image`}
                 style={{ width: '200px', height: '200px', marginBottom: '5px' }} />
                    {item.name}
                    </a>
                    </div>))}
                    </div>
        </div>
    );
}
export default Notes;