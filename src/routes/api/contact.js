export const post = (request)=>
{
    const formbody = JSON.parse(request.body)
    const name = formbody.name
    const email = formbody.email

    return{
        body: {
            name,
            email,
        },
    }
}