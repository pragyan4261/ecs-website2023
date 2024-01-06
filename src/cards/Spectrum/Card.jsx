import "./Card.css"
import { useState, useEffect } from "react";
const Card = (props) => {
    const [formStep, setformStep] = useState(1);
    return (
        <>
            <div className="wideview">
                <div className="widecard">
                    <div className="cont">
                        {formStep === 1 ?
                            <div className="innerCont">
                                <h1>I am:</h1>
                                <div className="flex flex-row">
                                    <div className="flex flex-row"><input type="radio" value="Solo" name="participation" /><label>
                                        A solo participant
                                    </label></div>
                                    <div className="flex flex-row"><input type="radio" value="Team" name="participation" /><label>
                                        In a Team
                                    </label></div>
                                </div>
                            </div> :
                            <form>

                            </form>
                        }
                        <div className="flex flex-row justify-center items-center"><button>Back</button><button>Next</button></div>
                    </div>
                </div>
            </div>
            <button className='card flex flex-col justify-center items-center text-[#ffffff] w-[14rem] h-[14rem] rounded-[1rem]' style={{ backgroundImage: `url('${props.photo}')`, backgroundSize: 'auto', backgroundPosition: 'center', margin: '0 auto' }}>
                <h1 className="cardName">{props.name}</h1>
                <p className="content">{props.content}</p>
            </button>
        </>
    );
}
export default Card;