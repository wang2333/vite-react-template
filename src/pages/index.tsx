import { shorten } from '@did-network/dapp-sdk'
import { useAccount } from 'wagmi'

import { Header } from '@/components/layout/Header'
import { NetworkSwitcher } from '@/components/SwitchNetworks'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import { WalletModal } from '@/components/WalletModal'
import { useWagmi } from '@/hooks'
import { useCopyToClipboard } from '@/hooks/useCopy'
import WagmiIcon from '~icons/fisand-icons/wagmi-icon'

const Home = () => {
  const { address } = useAccount()

  const [show, setShow] = useState(false)

  const toggleModal = (e: boolean) => {
    setShow(e)
  }

  const [_, copy] = useCopyToClipboard()
  const { toast } = useToast()

  const copyHandler = useCallback(() => {
    copy('pnpm dlx fisand')

    toast({
      title: 'Copied success!',
    })
  }, [copy, toast])

  return (
    <>
      <Header
        action={
          <>
            <NetworkSwitcher />
            <WalletModal open={show} onOpenChange={toggleModal} close={() => setShow(false)}>
              {({ isLoading }) => (
                <Button className="flex items-center mr-4">
                  {isLoading && (
                    <span className="i-line-md:loading-twotone-loop inline-flex mr-1 w-4 h-4 text-white"></span>
                  )}{' '}
                  {address ? shorten(address) : 'Connect Wallet'}
                </Button>
              )}
            </WalletModal>
          </>
        }
      />
      <Button
        p-4
        m-l-10
        onClick={() => {
          console.log('123 :>> ', 123)
        }}
      >
        123
      </Button>
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
            <span className="i-carbon:copy ml-6 cursor-pointer active:scale-95" onClick={copyHandler} />
          </div>
        </div>
        <div className="mt-16 max-w-6xl m-auto px-4 flex gap-8 flex-wrap items-stretch justify-center">
          <div className="p-.5 rounded-lg hover:bg-gradient-conic hover:bg-gradient-[from_var(--conic-deg),#B4EAA1,transparent,#B4EAA1] hover:animate-[conic_2.5s_infinite_linear]">
            <Card className="w-[318px] rounded-lg">
              <CardHeader>
                <CardTitle className="flex gap-1">Wagmi11</CardTitle>
                <CardDescription>React Hooks for Ethereum</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex flex-col gap-4">
                  <span>20+ hooks</span>
                  <span>Built-in wallet connectors</span>
                  <span>TypeScript ready</span>
                  <span className="i-lucide:more-horizontal h-4"></span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="p-.5 rounded-lg hover:bg-gradient-conic hover:bg-gradient-[from_var(--conic-deg),#B4EAA1,transparent,#B4EAA1] hover:animate-[conic_2.5s_infinite_linear]">
            <Card className="w-[318px] rounded-lg">
              <CardHeader>
                <CardTitle className="flex gap-2">
                  <span className="i-logos:vitejs inline-flex h-4 -group-hover:rotate-30 transition-all" /> Vite
                </CardTitle>
                <CardDescription>Next Generation Frontend Tooling</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex flex-col gap-4">
                  <span>Instant Server Start</span>
                  <span>Lightning Fast HMR</span>
                  <span>Rich Features</span>
                  <span className="i-lucide:more-horizontal h-4"></span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="p-.5 rounded-lg hover:bg-gradient-conic hover:bg-gradient-[from_var(--conic-deg),#B4EAA1,transparent,#B4EAA1] hover:animate-[conic_2.5s_infinite_linear]">
            <Card className="w-[318px] rounded-lg">
              <CardHeader>
                <CardTitle className="flex gap-2">
                  <span className="i-logos:unocss inline-flex h-4 group-hover:rotate-23 transition-all" />
                  unocss
                </CardTitle>
                <CardDescription>Instant On-demand Atomic CSS Engine</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex flex-col gap-4">
                  <span>Fully Customizable</span>
                  <span>Instant</span>
                  <span>Rich Integrations</span>
                  <span className="i-lucide:more-horizontal h-4"></span>
                </div>
              </CardContent>
            </Card>
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
      <p>
        {['', '', '', ''].map((_, index) => (
          <Item key={index} />
        ))}
      </p>
      <div className="border-t-1 border-border border-solid">
        <div className="max-w-6xl py-6 mx-auto sm:px-8 lt-sm:px-4 text-center">© 2022-present Hang Zou</div>
      </div>
    </>
  )
}

export default Home

function Item() {
  const { status } = useWagmi()

  return <span></span>
}
