import Link from 'next/link';
import Layout from '../components/Layout'

const Index = () =>
  <Layout title="Home">
    <Link href="/about">
      Go to about
    </Link>
    <div>Welcome to the page </div>
  </Layout>

export default Index