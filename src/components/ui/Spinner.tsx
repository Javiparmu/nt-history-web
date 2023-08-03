import styles from '@/styles/Spinner.module.css'

const Spinner = () => {
  return (
    <div className={`${styles.spinner} border-8 border-white border-t-8 border-t-lime-600 rounded-[50%] w-8 h-8`}></div>
  )
}

export default Spinner
