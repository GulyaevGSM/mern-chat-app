import {$instance} from "./$axios"

export const addMessage = async (params: any) => {
    try  {
        const res = await $instance.post('/api/messages/addmsg', {
            content: params
        })

        return res.data
    } catch (e) {
        console.log('Something went wrong!', e)
    }
}


export const addImage = async (params: any) => {
    try  {
        const res = await $instance.post('/api/messages/addimg', {
            img: params
        })

        return res.data
    } catch (e) {
        console.log('Something went wrong!', e)
    }
}