import * as yup from 'yup'

export const formSchema = yup.object().shape({
  name: yup.string().required('Họ và tên không được để trống'),
  email: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
  major: yup.string().required('Ngành học không được để trống')
})

export type FormSchema = yup.InferType<typeof formSchema>
