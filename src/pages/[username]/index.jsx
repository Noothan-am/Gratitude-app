import Head from 'next/head'
import styles from '../../styles/Username.module.scss'
import { useRouter } from 'next/router'

import InputWrapper from '../../../components/input-wrapper/input-wrapper.component.jsx'
import Form from '../../../components/form/form.component'
const Username = () => {
  const router = useRouter()
  const username = router.query.username
  console.log(username)

  // Form Handle
  // const [input, setInput] = useState({})

  return (
    <>
      <Head>
        <title>Gratitude for {username}</title>
        <meta
          name='description'
          content='19x Author, Teacher & Speaker | Co-founder of Audvisor.com | Mentor to Game-changers | Amateur Go Player'
        />
      </Head>
      <div className={styles['main-wrapper']}>
        <h1 className={styles.username}>About {username}</h1>
        <InputWrapper username={username} />
        <Form username={username} />
      </div>
    </>
  )
}

export default Username
