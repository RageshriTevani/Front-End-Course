import React from 'react'
import { BiUser,BiMailSend, BiPhone, BiLogoFacebook, BiMap, BiLogoGithub, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import img from './images/img.jpeg'
function PortFolioApp() 
{
    return (
    <div>
    {/* navbar*/}
    <div className='container shadow-md shadow-slate-700 p-2'>
        <ul className='text-white flex p-5 space-x-16 items-center ml-60 ms-80 font-bold'>
            <li className='underline underline-offset-8'><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Skills</a></li>
            <li><a href=''>Experience</a></li>
            <li><a href=''>Portfolio</a></li>
            <li><a href=''>Pricing</a></li>
            <li><a href=''>Blog</a></li>
            <li><a href=''>Contact</a></li>
        </ul>
    </div>

     {/* content */}
    <div className='container ms-10 p-10'>
        <div className="flex">
            <div className="flex-none w-50 text-white p-10 ms-60 mt-12">
                <button className='bg-sky-500  font-bold m-0 p-2 w-40 rounded-t-3xl rounded-r-2xl'>Hello I'm</button>
                <h1 className='text-white font-bold  text-4xl mt-3 '>Alex Johnson</h1>
                <h5 className='text-white font-bold text-2xl '>Product Designer</h5>
                <h4 className='mt-5 flex'>
                    <BiMailSend className='mt-1' /> &nbsp;&nbsp; <a href=''> &nbsp;&nbsp;getemail@gmail.com </a></h4>
                <h4 className='mt-4 flex'>
                    <BiPhone className='mt-1' /> &nbsp;&nbsp; +12 986 987 7867
                </h4>
                <h4 className='mt-4 flex'>
                    <BiMap className='mt-1' /> &nbsp;&nbsp; 37,Polland,New York,United State
                </h4>
                <h4 className='mt-5  flex'>
                    <BiLogoLinkedin className='text-4xl rounded-full  border-spacing-40  text-white  p-2' /> &nbsp;&nbsp;
                    <BiLogoFacebook className='text-4xl rounded-full border-spacing-40  text-white  p-2' /> &nbsp;&nbsp;
                    <BiLogoTwitter className='text-4xl rounded-full  border-spacing-40 text-white  p-2' /> &nbsp;&nbsp; 
                    <BiLogoGithub className='text-4xl rounded-full  border-spacing-40 text-white  p-2' /> &nbsp;&nbsp; 
                </h4>
            </div>
            <div className="flex-initial w-50 text-white p-10 ms-28 mt-16">
                <img src={img} alt="users" className='w-80 h-80 ms-5 rounded-full ' />
            </div>
        </div>
    </div>
</div>
)
}

export default PortFolioApp