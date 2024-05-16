import Image from 'next/image'
import styles from '../../src/styles/input-wrapper.module.scss'

const InputWrapper = ({ username }) => {
  return (
    <div className={styles['fixed-input']}>
      <div className={styles['input-wrapper']}>
        <p>What are you grateful to {username}?</p>
        <Image
          className={styles['send-icon']}
          src={`/send-icon.svg`}
          alt='Send Icon'
          width='20'
          height='20'
        />
      </div>
    </div>
  )
}

export default InputWrapper
