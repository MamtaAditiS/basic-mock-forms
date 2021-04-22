import microValidator from 'micro-validator' 

export const validateLogin  = (data) => {
    const errors = microValidator.validate({
        email: {
            required: {
                errorMsg: `Email is required`
            },
            email: {
                errorMsg: `Enter a valid email`
            }
        },
        password: {
            required: {
                errorMsg: `Password is required`
            },
            length: {
                min:8,
                max: 30,
                errorMsg: 'Passoword length is not appropriate'
            }
        }
    }, data)
    
    return errors
}
