import Navbar from "./Navbar";
import { useParams } from 'react-router-dom'
const Notes = (props) => {
    const collection = {
        'First': [
            { name: 'Mathematics-I', dest: '' },
            { name: 'Chemistry', dest: '' },
            { name: 'Introduction to C Programming', dest: '' },
            { name: 'Basic Electronics', dest: '' },
            { name: 'Environmental Science & Engineering', dest: '' }
        ],
        'Second': [
            { name: 'Mathematics-II', dest: '' },
            { name: 'Physics', dest: '' },
            { name: 'Engineering Mechanics', dest: '' },
            { name: 'Basic Electrical Engineering', dest: '' },
            { name: 'Communicative English', dest: '' },
            { name: 'Engineering Graphics and Design', dest: '' }
        ],
        'Third': [
            { name: 'Mathematics-III', dest: '' },
            { name: 'Electronic Devices', dest: '' },
            { name: 'Analog Electronics', dest: '' },
            { name: 'Signals and Systems', dest: '' },
            { name: 'Network Analysis and Synthesis', dest: '' },
            { name: 'Data Structures and Algorithms', dest: '' }
        ],
        'Fourth': [
            { name: 'Analog Communication', dest: '' },
            { name: 'Control System', dest: '' },
            { name: 'Digital Electronics', dest: '' },
            { name: 'Electrical and Electronic Materials', dest: '' },
            { name: 'Electromagnetic Field Theory', dest: '' },
            { name: 'Probability and Random Process', dest: '' }
        ],
        'Fifth': [
            { name: 'Analog Circuit Design', dest: '' },
            { name: 'Digital Communications', dest: '' },
            { name: 'Digital Signal Processing', dest: '' },
            { name: 'Measurements and Instrumentation', dest: '' },
            { name: 'Microprocessor', dest: '' },
            { name: 'Optoelectronics', dest: '' }
        ],
        'Sixth': [
            { name: 'Data Communication', dest: '' },
            { name: 'Materials For Semiconductors', dest: '' },
            { name: 'Neural Networks and Fuzzy Logic', dest: '' },
            { name: 'Power Electronics', dest: '' },
            { name: 'RF and Microwave', dest: '' },
            { name: 'VLSI', dest: '' }
        ],
        'Seventh': [
            { name: 'Business Management', dest: '' },
            { name: 'Machine Learning', dest: '' },
            { name: 'Satellite Communication', dest: '' },
            { name: 'Wireless Communication', dest: '' },
        ],
        'Eighth': [
            { name: 'Management Studies', dest: '' },
        ]
    };
    return (
        <div>
            <Navbar home='inactive' events='inactive' developers='inactive' about='inactive' feed='inactive' members='inactive' />
            {collection[props.sem].map((item, index) => <div>{item.name}</div>)}
        </div>
    );
}
export default Notes;