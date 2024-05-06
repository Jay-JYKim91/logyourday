import supabase from '@/util/supabase'

export type UserType = {
    name?: string;
    nickname?: string;
    email: string;
    image?: string;
}
export const addUser = async (user: UserType) => {
    const {data, error} = await supabase
    .from('users')
    .insert([{
        name: user.name,
        nickname: user.nickname,
        email: user.email,
        profile_image: user.image
    }
    ]).select()
    return {data, error}
}

export const getUser = async (email: string) => {
    const {data, error} = await supabase
    .from('users')
    .select()
    .eq('email', email)
    .single()

    return {data, error}
}

export const fetchUser = async () => {
    const {data, error} = await supabase.from('user').select('*')
    return {data, error}
}