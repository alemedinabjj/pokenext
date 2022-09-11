import '../styles/global.scss'

import { Layout } from '../components/Layout/Layout'
import { UseFavorite } from '../hooks/FavoriteContext'

function MyApp({ Component, pageProps }) {
  return (
    // eslint-disable-next-line react/no-children-prop
    <Layout>
      <UseFavorite>
        <Component {...pageProps} />
      </UseFavorite>
    </Layout>
  )
}

export default MyApp
