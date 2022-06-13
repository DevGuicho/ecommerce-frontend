import * as Yup from 'yup'

const checkoutSchema = Yup.object().shape({
  card: Yup.number('Formato invalido')
    .required('El numero es obligatorio')
    .min(16),
  name: Yup.string()
    .min(8, 'El nombre es muy corto')
    .required('El nombre es obligatorio'),
  expiration: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, 'Formato invalido')
    .required('La fecha es obligatoria'),
  security: Yup.number()
    .min(3)
    .required('El codigo de seguridad es obligatorio')
})

export default checkoutSchema
