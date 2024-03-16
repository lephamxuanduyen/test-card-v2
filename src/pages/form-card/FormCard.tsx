import { useNavigate } from 'react-router-dom'
import { path } from 'src/constants/path'
import styles from './formCard.module.css'
import { bg_icon_bl, bg_icon_tl, form_bg_icon, form_logo } from 'src/assets/images'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormSchema, formSchema } from 'src/utils/schemas'
import { yupResolver } from '@hookform/resolvers/yup'

export interface HomeProps {}

export default function FormCard() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormSchema>({
    resolver: yupResolver(formSchema)
  })
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    navigate(path.generateCard, { replace: false, state: { name: data.name } })
  }

  return (
    <div className={styles.form_wrapper}>
      <img className={styles.bg_icon_tl} src={bg_icon_tl} alt={'bg-icon'} />
      <img className={styles.bg_icon_bl} src={bg_icon_bl} alt={'bg-icon'} />
      <img className={styles.bg_icon_cr} src={form_bg_icon} alt={'bg-icon'} />
      <div className={styles.form_logo}>
        <img src={form_logo} alt='logo' />
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.form_field}>
          <label htmlFor='name'>Họ và tên</label>
          <input type='text' id='name' placeholder='Nhập họ và tên của bạn' {...register('name')} />
          <span>{errors.name?.message}</span>
        </div>
        <div className={styles.form_field}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='Nhập email của bạn' {...register('email')} />
          <span>{errors.email?.message}</span>
        </div>
        <div className={styles.form_field}>
          <label htmlFor='major'>Ngành học</label>
          <input type='text' id='major' placeholder='Nhập ngành học của bạn' {...register('major')} />
          <span>{errors.major?.message}</span>
        </div>
        <button className={styles.btn_submit}>Hoàn thành</button>
      </form>
    </div>
  )
}
