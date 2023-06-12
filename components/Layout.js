import Nav from './Nav'


const Layout = ({children}) => {
  return (
    <div>
      <Nav />
      <div style={{
        width: '100%',
        maxWidth: '1440px',
        margin: 'auto'
      }}>
        {children}
      </div>
    </div>
  )
}

export default Layout