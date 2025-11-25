import { getImgPath } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">      
      {/* <p className='text-2xl font-bold text-white'>You.Tec</p> */}
      <Image
        src={getImgPath("/images/logo/youtec-logo.svg")}
        alt="logo"
        width={100}
        height={20}
        style={{ width: '700', height: 'auto' }}
        quality={100}
        className='dark:hidden'
      />
      <Image
        src={getImgPath("/images/logo/youtec-logo.svg")}
        alt="logo"
        width={100}
        height={20}
        style={{ width: '700', height: 'auto' }}
        quality={100}
        className='dark:block hidden'
      />
    </Link>
  );
};

export default Logo;
