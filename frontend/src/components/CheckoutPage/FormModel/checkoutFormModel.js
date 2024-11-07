export default {
  formId: 'checkoutForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'Nombre completo*',
      requiredErrorMsg: 'El nombre completo es obligatorio'
    },
    lastName: {
      name: 'lastName',
      label: 'Apellido*',
      requiredErrorMsg: 'El apellido es obligatorio'
    },
    address1: {
      name: 'address2',
      label: 'Dirección*',
      requiredErrorMsg: 'La dirección es obligatoria.'
    },

    city: {
      name: 'city',
      label: 'Ciudad*',
      requiredErrorMsg: 'La ciudad es obligatoria'
    },
    state: {
      name: 'state',
      label: 'Canton*',
      requiredErrorMsg: 'El canton es obligatorio'
    },
    zipcode: {
      name: 'zipcode',
      label: 'zipcode*',
      requiredErrorMsg: 'zipcode es obligatorio',
      invalidErrorMsg: 'Formato de zipcode inválido'
    },
    country: {
      name: 'country',
      label: 'País*',
      requiredErrorMsg: 'País es obligatorio'
    },
    useAddressForPaymentDetails: {
      name: 'useAddressForPaymentDetails',
      label: 'Utilice esta dirección para los detalles del pago'
    },
    invoiceId: {
      name: 'invoiceId',
      label: 'Utilice este ID de factura'
    },
    nameOnCard: {
      name: 'nameOnCard',
      label: 'Nombre en la tarjeta*',
      requiredErrorMsg: 'Se requiere el nombre en la tarjeta'
    },
    cardNumber: {
      name: 'cardNumber',
      label: 'Número de tarjeta*',
      requiredErrorMsg: 'Se requiere el número de tarjeta',
      invalidErrorMsg: 'El número de tarjeta no es válido (e.g. 4111111111111)'
    },
    expiryDate: {
      name: 'expiryDate',
      label: 'Fecha de caducidad*',
      requiredErrorMsg: 'Se requiere fecha de caducidad',
      invalidErrorMsg: 'La fecha de caducidad no es válida'
    },
    cvv: {
      name: 'cvv',
      label: 'CVV*',
      requiredErrorMsg: 'Se requiere CVV',
      invalidErrorMsg: 'CVV no es válido (e.g. 357)'
    }
  }
};
