import Head from 'next/head'
import pic from '../mages/logo.png'

const Meta = ({title}) => {
  return (
    <Head>
      <meta name='viewport' 
      content='width=device-width, 
      initial-scale=1' />
      <title>{title}</title>
      <link rel='icon' href={pic} sizes='any' />
    </Head>
  )
}

Meta.defaultProps = {
  title: "Spencer's Academy",
}

export default Meta