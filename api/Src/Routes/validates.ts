import argon2 from 'argon2'

export const validationEmail = (email: string) => {

    let re = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i

    if(!re.test(email)){
        
        return false
    }

    return true
}

export const validatePassword = async (password: string, hash: any): Promise<boolean> => {

    if(await argon2.verify(hash.password, password)){
        return true
    }
    return false
}

export const validationUrl = (url: string) => {

    let parse = JSON.parse(url)
    let re = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    let validate = true

    parse.forEach((e: string)=> {

        if(!re.test(parse)){
            
            validate = false
        }
    })

    return validate
}