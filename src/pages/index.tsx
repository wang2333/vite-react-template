import { Header } from '@/components/layout/Header'
import { Button } from '@/components/ui/button'
import { ThemeSwitch } from '@/components/ui/ThemeSwitch'
import WagmiIcon from '~icons/fisand-icons/wagmi-icon'

const Home = () => {
  return (
    <>
      <Header action={<></>} />
      123123
      <Button
        p-4
        m-l-10
        onClick={() => {
          console.log('123 :>> ', 123)
        }}
      >
        123
      </Button>
      {/* <ThemeSwitch /> */}
      <div className="relative max-w-6xl min-h-[calc(100vh-8rem)] m-auto pt-16 flex-col-center justify-start">
        <p
          className="font-bold bg-clip-text text-4xl lt-sm:text-2xl"
          style={
            {
              backgroundImage: 'linear-gradient(270deg, #B4EAA1 0%, #F8D07A 100%)',
              display: 'inline-block',
              lineHeight: 1,
              WebkitTextFillColor: 'transparent',
            } as any
          }
        >
          Unoi Dapp Template
        </p>
        <p className="mt-3 text-5xl text-center font-bold lt-sm:text-3xl">The better template to launch a Web3 dapp</p>
        <p className="mt-3 text-3xl text-center lt-sm:text-xl group">
          Designed for everyone. <br className="hidden lt-sm:block" /> Built with{' '}
          <WagmiIcon className="inline-flex h-5 group-hover:animate-bounce-alt !animate-delay-300" />{' '}
          <span className="inline-flex w-5 h-5 group-hover:animate-bounce-alt transition-all i-logos:vitejs" />{' '}
          <span className="inline-flex w-5 h-5 !animate-delay-200 group-hover:animate-bounce-alt transition-all i-logos:unocss " />
          .
        </p>
        <div className="mt-8 flex-center">
          <div className="m-auto py-2 px-8 flex-center bg-#666 rounded-full text-white">
            pnpm dlx fisand
            <span className="i-carbon:copy ml-6 cursor-pointer active:scale-95" />
          </div>
        </div>
      </div>
      <p className="py-5 text-center">
        <a className="App-link" href="https://wagmi.sh/" target="_blank" rel="noopener noreferrer">
          Wagmi Docs
        </a>
        {' | '}
        <a className="App-link" href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
          Vite Docs
        </a>
        {' | '}
        <a className="App-link" href="https://unocss.dev/" target="_blank" rel="noopener noreferrer">
          Unocss Docs
        </a>
      </p>
      <div className="border-t-1 border-border border-solid">
        <div className="max-w-6xl py-6 mx-auto sm:px-8 lt-sm:px-4 text-center">© 2022-present Hang Zou</div>
      </div>
    </>
  )
}

export default Home
