import Image from 'next/image';
import { MdPlayCircleFilled } from 'react-icons/md';

const RightBar = () => {
  return (
    <div className='soft rounded-md p-5 fixed'>
      <div className='relative'>
        <div className='absolute bottom-0 right-0 h-[50%] w-[50%]'>
          <Image src="/astronaut.png" className='object-cover opacity-[0.2]' alt="" fill/>
        </div>
        <div className='flex flex-col gap-y-2'>
          <span className='font-bold text-lg'>Now Present</span>
          <h3>How to use the new version of this dashboard</h3>
          <span>Take 3 minutes to learn</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, placeat.</p>
          <button className='flex p-2 items-center gap-x-2 bg-purple-500 rounded-md cursor-pointer max-w-max'>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightBar;