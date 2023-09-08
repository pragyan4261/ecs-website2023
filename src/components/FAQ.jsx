import React, {useState} from 'react'
// import "./accordion.css"
import Arrow from "../images/arrow.png"

const AccordionItem = ({title, content}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isOpen);
  };

  return (
    <div className='h-auto mb-5 accordion-item flex flex-col justify-center items-center text-2xl font-semibold'>
      <div  className={`bg-blue-300 bg-opacity-60 h-16 w-[80vw] flex justify-between items-center pl-7 pr-7 rounded-xl ${isOpen ? "rounded-b-none": "rounded-xl"}`} onClick={toggle}>
      <h1>{title}</h1>
      <img src={Arrow} alt="" className={`h-6 w-6 ${isOpen ? "rotate-0" : "-rotate-90"}`} />
      </div>
      {isOpen && (
        <p className='text-left text-lg p-5 pl-7 pr-7 w-[80vw] accordion-content bg-blue-300 bg-opacity-60'>{content}</p>
      )}
    </div>
  )
  
}




const FAQ = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-semibold mb-7 text-white'>FREQUENTLY ASKED QUESTIONS</h1>
      <div className='h-20 w-[40rem] accordion-item' id='item1'>
        <AccordionItem 
        title="What is ECS?"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perspiciatis at mollitia sed consectetur pariatur quisquam ratione nostrum quibusdam dolores illum magnam odio modi neque, ipsum doloremque sint, tempora soluta. Quasi reprehenderit corporis consectetur hic exercitationem similique ducimus, omnis officiis."
        />
        <AccordionItem 
        title="What is ECS?"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perspiciatis at mollitia sed consectetur pariatur quisquam ratione nostrum quibusdam dolores illum magnam odio modi neque, ipsum doloremque sint, tempora soluta. Quasi reprehenderit corporis consectetur hic exercitationem similique ducimus, omnis officiis."
        />
        <AccordionItem 
        title="What is ECS?"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perspiciatis at mollitia sed consectetur pariatur quisquam ratione nostrum quibusdam dolores illum magnam odio modi neque, ipsum doloremque sint, tempora soluta. Quasi reprehenderit corporis consectetur hic exercitationem similique ducimus, omnis officiis."
        />
        <AccordionItem 
        title="What is ECS?"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perspiciatis at mollitia sed consectetur pariatur quisquam ratione nostrum quibusdam dolores illum magnam odio modi neque, ipsum doloremque sint, tempora soluta. Quasi reprehenderit corporis consectetur hic exercitationem similique ducimus, omnis officiis."
        />
        
      </div>
    
    </div>
    
  )
}


export default FAQ
