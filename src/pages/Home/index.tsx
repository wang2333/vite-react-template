import { useQuery } from '@tanstack/react-query';

import userService from '@/apis/services/userService';
import { Button } from '@/components/ui/button';
import useCounterStore from '@/stores/counter';

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  const { counter, increase } = useCounterStore();
  // const counter = useCounterStore((state) => state.counter)
  // const increase = useCounterStore((state) => state.increase)

  const { data } = useQuery({
    queryKey: ['userService', 'logout'],
    queryFn: userService.logout,
  });

  console.log('data :>> ', data);
  return (
    <>
      <Button onClick={() => increase(1)} size="lg">
        counter: {counter}
        <button>Button</button>
      </Button>
      <div text="primary" p="x-5 y-10" m-20>
        unocss
        <span p-10 m="20">
          123
        </span>
      </div>
    </>
  );
};

export default Home;
