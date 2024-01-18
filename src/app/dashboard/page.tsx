import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const Page = async () => {
    const { getUser } = getKindeServerSession();
    const user = getUser();
  return <div>Satya Prakash</div>
}

export default Page