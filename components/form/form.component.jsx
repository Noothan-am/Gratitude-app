import Image from 'next/image'
import styles from '../../src/styles/form.module.scss'
import { useState } from 'react'

const defaultFormFields = {
  message: '',
  name: '',
  email: '',
  linkedinUrl: '',
  designation: '',
  profileImage: {},
}

const Form = ({ username }) => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { message, name, email, linkedinUrl, designation } = formFields

  // initial Input value for unique user to identify the form for each user
  let [uniqueName, setUniqueName] = useState(username)
  console.log('Unique name', uniqueName)

  console.log(formFields)

  const handleChange = (event) => {
    const { name, value, type, files } = event.target

    // // set unique names
    setUniqueName({ username })

    if (type === 'file') {
      // check if files were selected
      if (files.length > 0) {
        // Since we only allow selecting one file, access the first file in the list
        const selectedFile = files[0]
        console.log(selectedFile)
        // Update the state with the selected file
        setFormFields({ ...formFields, [name]: selectedFile })
      } else {
        // If no file was selected, reset the state for the file input field
        setFormFields({ ...formFields, [name]: null })
      }
    } else {
      // For other input fields (text, email, etc.), update the state as before
      setFormFields({ ...formFields, [name]: value })
    }
  }

  const handleSubmit = () => {}

  return (
    <div className={styles['form-wrapper']}>
      <form onSubmit={() => {}} className={styles['form']}>
        <input
          className={styles['form-input']}
          type='text'
          name={`${username}`}
          id='username'
          placeholder={`username`}
          onChange={handleChange}
          value={uniqueName}
        />

        <textarea
          className={`${styles['form-input']} ${styles['textarea']}`}
          type='text'
          name='message'
          id='message'
          placeholder={`What are you grateful to ${username}?`}
          onChange={handleChange}
          value={message}
        />
        <input
          className={styles['form-input']}
          type='text'
          name='name'
          id='name'
          placeholder={`Name`}
          onChange={handleChange}
          value={name}
        />
        <input
          className={styles['form-input']}
          type='email'
          name='email'
          id='email'
          placeholder={`Email`}
          onChange={handleChange}
          value={email}
        />
        <input
          className={styles['form-input']}
          type='url'
          name='linkedinUrl'
          id='linkedin-url'
          placeholder={`Linkedin profile`}
          onChange={handleChange}
          value={linkedinUrl}
          required
        />

        <input
          className={styles['form-input']}
          type='text'
          name='designation'
          id='designation'
          placeholder={`Ex: Founder & CEO`}
          onChange={handleChange}
          value={designation}
        />
        <div className={styles['form-submit-wrapper']}>
          <div className={styles['file-upload-wrapper']}>
            <label htmlFor='profile-photo'>Profile photo</label>
            <input
              type='file'
              name='profileImage'
              id='profile-photo'
              onChange={handleChange}
            />
          </div>
          <button type='submit' title='Submit'>
            <Image
              className={styles['send-icon']}
              src={`/send-icon.svg`}
              alt='Send Icon'
              width='32'
              height='32'
            />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
