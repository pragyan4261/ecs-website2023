import { Link } from 'react-router-dom'
const ResourceHubCard = (props) => {
  return (
    <div className='flex flex-col justify-between items-center bg-[#aaaabb55] md:flex-row m-[1rem] text-[#ffffff] text-[1.5rem] p-[1rem] rounded-[1rem] border-[2px] border-[#ffffff55] w-[80%]'
      style={{ boxShadow: 'inset 0 0 2rem #ffffff55' }}
    >
      <label style={{ margin: '0 auto' }}>{props.sem}</label>
      <div style={{ display: 'flex', minWidth: '20%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: '0 auto', boxShadow: 'inset 0 0 2rem #ffffff55'}} className='bg-[#aaaadd55] rounded-[0.8rem] border-[2px] border-[#ffffff55] p-[0.2rem] w-[40% ]' >
        <Link to={props.notes} style={{ height: '100%', padding: '2rem' }}>NOTES</Link>
        <Link to={props.course} style={{ height: '100%', borderLeft: '2px solid #ffffff', padding: '2rem', fontSize: '1rem' }}>COURSE<br /> STRUCTURE</Link>
      </div>
    </div>
  )
}

export default ResourceHubCard