import { Outlet } from 'react-router-dom'

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <h3>Layout</h3>
      <i className="inline-block i-logos:vitejs" />
      <div className="i-logos-admob " />

      <Outlet />
    </>
  )
}

export default Layout
