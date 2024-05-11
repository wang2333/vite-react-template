import useCounterStore from '@/stores/counter'

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  const { counter, increase } = useCounterStore()
  // const counter = useCounterStore((state) => state.counter)
  // const increase = useCounterStore((state) => state.increase)

  return <button onClick={() => increase(1)}> counter: {counter} </button>
}

export default Home
