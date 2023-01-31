import Head from 'next/head'
import { Categories } from '../components/categories/Categories'
import { trpc } from '../utils/trpc';

export default function Home() {
  const userMutation = trpc.createScore.useMutation();

  const createNewScore = () => {
    userMutation.mutate({ name: "Production", score: 700, accuracy: 70, quiz: "capitals" });
    console.log('it ran')
  }

  return (
    <div>
      <Head>
        <title>GeoQuix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button onClick={() => createNewScore()}>Click here</button>
        <Categories />
      </main>
     
    </div>
  )
}
