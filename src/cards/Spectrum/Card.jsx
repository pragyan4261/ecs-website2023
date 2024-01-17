import "./Card.css"
const Card = (props) => {
    return (
        <>
            <div className='card flex flex-col justify-center items-center text-[#ffffff] w-[18rem] h-[18rem] md:w-[25rem] md:h-[20rem] rounded-[1rem]' style={{ backgroundImage: `url('${props.photo}')`,backgroundColor:'#00000055',backgroundBlendMode:'darken', backgroundSize: 'cover', backgroundPosition: 'center', margin: '2rem auto' }}>
                <h1 className="cardName text-[2rem]">{props.name}</h1>
                <a href={props.register} target="_blank"  className="content text-[1.2rem]" style={{border:'1px solid #ffffff',borderRadius:'2rem',padding:'1rem'}}>REGISTER HERE</p>
            </div>
        </>
    );
}
export default Card;
