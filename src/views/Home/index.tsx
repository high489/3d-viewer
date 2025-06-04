import styles from './home.module.scss'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <>
      <div className={styles['home']}>Home</div>
    </>
  )
}

export { Home }