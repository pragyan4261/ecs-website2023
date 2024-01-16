import Card from "../cards/Spectrum/Card"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Spectrum = () => {
    const dbTech=[
        {id:1,name:'Fastweb',photo:'https://res.cloudinary.com/dyuggtbjl/image/upload/v1705428386/ecs/667fffab-2554-42b9-8bd3-af8b126ba0d6_smktzz.jpg',register:'https://docs.google.com/forms/d/1KpnPWINlUthaB0hIfQOFAa--QH7iC3z3JbW8EbZexRw/edit?usp=drivesdk&chromeless=1'},
        {id:2,name:'Smartdroid',photo:'https://res.cloudinary.com/dyuggtbjl/image/upload/v1705429756/ecs/200d6803-ac7c-4a3f-8017-14de0efc1917_aftcia.jpg',register:'https://docs.google.com/forms/u/3/d/1tMiZb7KgPkRHKqx84QbjruLMK0-q4aqJdnAGLbMdRQk/edit?usp=drivesdk&chromeless=1'},
        {id:3,name:'Arduino Mania',photo:'https://res.cloudinary.com/dyuggtbjl/image/upload/v1705428397/ecs/e6f2e82b-d7dd-4685-8f76-76f4a908feca_pgj4wo.jpg',register:'https://docs.google.com/forms/d/1Do85XGnh647in2n5MZNLvmhgA9hs_GdPhtFqwQgwSSc/edit?chromeless=1'},
        {id:4,name:'Eniac',photo:'https://res.cloudinary.com/dyuggtbjl/image/upload/v1705429947/ecs/f2a00c38-45d3-46c9-8d22-e7fb530cea30_gy2ign.jpg',register:'https://docs.google.com/forms/u/3/d/1AcGp0bAzjv_XDloBPWFyIvY0DLV65UxxdnpEtQ88ORk/edit?usp=drivesdk&chromeless=1'},
        {id:5,name:'Byte the Code',photo:'https://res.cloudinary.com/dyuggtbjl/image/upload/v1705428388/ecs/14e839d8-cd91-47f2-90c8-5bd1dda4ce5e_lyluwy.jpg',register:'https://forms.gle/FEe8H7XTwZ22yf5R6'}];

    const dbnTech=[{id:1,name:'Knock Your Heads',photo:'https://res.cloudinary.com/dyuggtbjl/image/upload/v1705428399/ecs/602db80f-66c2-424c-ae6b-bf943bddbeba_at465k.jpg',register:'https://docs.google.com/forms/u/3/d/1y9tngOqW3aEq-7drybuXzvOQfEqEqz17FbikQtTZvQs/edit?usp=drivesdk&chromeless=1'},
        {id:2,name:'Chamber of Secrets',photo:'https://res.cloudinary.com/dyuggtbjl/image/upload/v1705428403/ecs/b0a3db62-abe8-490b-8d35-3c6697aba161_drup1r.jpg',register:'https://docs.google.com/forms/d/1IYBtAlWiV2fpnQzK0X2KVNUeFAjWBlSS9Zp4vbvMfNo/edit?usp=drivesdk&chromeless=1'},
        {id:3,name:'IPL Auction',photo:'https://res.cloudinary.com/dyuggtbjl/image/upload/v1705428383/ecs/d8b6cedd-a29e-4378-962d-bb87cb6b80ce_w2duur.jpg',register:'https://docs.google.com/forms/u/3/d/1Z6SzzT8Vm6wTITMbxCdJ5ydqCB8dVXrEZ_YfQnk4D1s/edit?usp=drivesdk&chromeless=1'},
        {id:4,name:'Moments',photo:'https://res.cloudinary.com/dyuggtbjl/image/upload/v1705428395/ecs/ca89611e-bb76-4855-98fb-904f0e36e307_yl1bkl.jpg',register:'https://docs.google.com/forms/d/e/1FAIpQLSeUHmfkUWwGmPZp9rwX0fMZGsc9G6297JaVo2ZmWJnKk7YeTg/viewform'},
        {id:5,name:'Poesis',photo:'https://res.cloudinary.com/dyuggtbjl/image/upload/v1705428411/ecs/b763a00b-ce6c-41a9-959d-6759deba11a6_rcutbj.jpg',register:'https://docs.google.com/forms/d/e/1FAIpQLSeWRmKPtMIDuhF7VuQQD-YFUi7wnqykGbu8iujvrvgGPigQGA/viewform'},
        {id:6,name:'Hindi Non-Stop',photo:'https://res.cloudinary.com/dyuggtbjl/image/upload/v1705429891/ecs/a7e849bb-4dd8-4055-864b-7b7156e37abe_srlr8l.jpg',register:'https://forms.gle/119AZq198uRUN9jS6'},
        {id:7,name:'Get Hired',photo:'https://res.cloudinary.com/dyuggtbjl/image/upload/v1705428390/ecs/d2bcd667-6f20-40d9-95c1-8d2ace554c86_gmhiv6.jpg',register:'https://forms.gle/5N3oHBfW4TSuKzuE8'},
        {id:8,name:'Minimalist',photo:'https://res.cloudinary.com/dyuggtbjl/image/upload/v1705428408/ecs/8a017ed5-89c1-431d-ae1e-970e1b6a3233_pdlhll.jpg',register:'https://docs.google.com/forms/u/3/d/1AoKk9XDcMGGgIHMH31OPaCdxOBfmQDv2rmdnxUYZB9Y/edit?usp=drivesdk&chromeless=1'},
        {id:9,name:'Electrohunt',photo:'https://res.cloudinary.com/dyuggtbjl/image/upload/v1705428392/ecs/a3c972c6-c3cd-4c42-9ac7-ea63169e7cce_xq1ngq.jpg',register:'https://docs.google.com/forms/d/1x8ge_rWSJtS4QEPy4xFX1jE6oepSk3649cWjLddzN9Y/edit?chromeless=1'},
        {id:10,name:'Memecraft',photo:'https://res.cloudinary.com/dyuggtbjl/image/upload/v1705428405/ecs/b8297dec-6e45-415a-9802-d0e02a76feb1_o6zriu.jpg',register:'https://docs.google.com/forms/u/3/d/1c4KYXYta-x9tPM5YFgQocP1O7voqbI0pSJuYn0CwCIA/edit?usp=drivesdk&chromeless=1'}];
    return (
        <div>
            <Navbar home='inactive' events='inactive' developers='inactive' about='inactive' feed='inactive' members='inactive' Spectrum='active' />
            <h1 style={{textAlign:'center'}} className="m-[4rem] text-[#ffffff] text-[2rem]">TECHNICAL EVENTS</h1>
            <div className="flex flex-wrap" style={{columnGap:'3rem',rowGap:'3rem'}}>
                {
                    dbTech.map((item)=><Card name={item.name}
                        photo={item.photo} register={item.register}
                    />)
                }
            </div>
            <h1 style={{textAlign:'center'}} className="m-[4rem] text-[#ffffff] text-[2rem]">NON-TECHNICAL EVENTS</h1>
            <div className="flex flex-wrap" style={{columnGap:'3rem',rowGap:'3rem'}}>
                {
                    dbnTech.map((item)=><Card name={item.name}
                        photo={item.photo}
                    />)
                }
                </div>
            <Footer />
        </div>
    );
}
export default Spectrum;