import '../styles/global.scss'

import { Layout } from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    // eslint-disable-next-line react/no-children-prop
    <Layout children={undefined}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp