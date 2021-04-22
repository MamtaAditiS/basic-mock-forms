import microValidator from 'micro-validator' 

export const validate = (data) => {
    const errors = microValidator.validate({
        email: {
            required: {
                errorMsg: `Email is required`
            },
            email: {
                errorMsg: `Enter a valid email`
            }
        },
        name: {
            required: {
                errorMsg: `Name is required`
            }, 
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
        }, 
        mobile: {
            required: {
                errorMsg: `Mobile number is required`
            }, 
            length: {
                min:10,
                max: 10,
                errorMsg: 'Mobile number length should be 10'
            }
        }
    }, data)
    
    return errors
}
