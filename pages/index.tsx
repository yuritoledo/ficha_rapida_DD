import Link from 'next/link'
import Layout from '../components/Layout'

import { Button } from "@chakra-ui/react"

const IndexPage = () => (
  <Layout title="Ficha rápida D&D 5e">
    <Button>as</Button>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
