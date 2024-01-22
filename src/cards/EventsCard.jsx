import React from 'react'

const EventsCard = (props) => {
  const t = props.order === `flex-row` ? '-10%' : '10%';
  return (
    <div id={props.reference} className={`flex flex-col flex-wrap justify-center align-center md:flex md:${props.order} bg-[#8BD6ECB2] m-[3rem] p-[1.5em] w-[85%%] text-[#ffffff]`} style={{
      borderRadius: '1.5rem', transitionDuration: '1000ms ease'
    }}>
      <img className='h-[13rem] w-[13rem] rounded-[1rem] ml-8 mb-3 sm:ml-2 m-[0 auto]' style={{ objectFit: 'cover' }} src={props.photo} alt="" />
      <div className='flex flex-col w-[80%] justify-center items-center'>
        <h1 className='text-[1.5rem] ml-10 sm:ml-0 sm:text-[2rem] uppercase mb-3' >{props.name}</h1>
        <p className='text-sm sm:text-lg ml-10 sm:ml-0 w-[95%] sm:w-[80%] text-center leading-5'>{props.desc}</p>
      </div>
    </div >
  )
}

export default EventsCard
// import React from 'react'

// const EventsCard = (props) => {
//   const t = props.order === 'flex-row' ? '-10%' : '10%';
//   return (
//     <div id={props.reference} className='flex flex-col align-center md:flex md:${props.order} bg-[#3498db] shadow-lg rounded-xl overflow-hidden m-[3rem] p-[2.3125rem] pr-0 text-[rgb(255,255,255)]' style={{
//       transitionDuration: '1000ms ease',
//       height: '20rem', // Adjusted height to change the aspect ratio
//     }}>
//       <div className="relative">
//         <img className='w-[10rem] h-[10rem]' src={props.photo} alt={props.name} />
//         <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#3498db] to-transparent">
//           <h1 className='text-[2rem] uppercase'>{props.name}</h1>
//         </div>
//       </div>
//       <div className='flex flex-col mt-4'>
//         <p className="text-lg" style={{ maxWidth: '60%' }}>
//           {props.desc}
//         </p>
//       </div>
//     </div>
    
    


    
//   )
// }

// export default EventsCard
