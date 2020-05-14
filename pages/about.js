import Link from 'next/link';
import Layout from '../components/Layout'
import { Component } from 'react'
import axios from 'axios'

export default class About extends Component {
  

  static async getInitialProps() {
    const res = await axios.get('https://api.github.com/users/JakubKarp')
      .then((response) => {
        return response.data;
      })
    return {user: res}
  }

  render() {
    const {user} = this.props;
    return (
      <Layout title="About">
        <h1>  Mr. {user.name} </h1>
        <h3>Has public repos: {user.public_repos}</h3>
        <Link href="/">
          Go to home
        </Link>
        <p>A javascript developr</p>
        <img src="/logo.png" alt="logo" height="200px" />
       </Layout>
    )
  }
}

