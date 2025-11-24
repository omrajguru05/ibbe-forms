'use server'

import { cookies } from 'next/headers'

export async function login(formData: FormData) {
    const username = formData.get('username')
    const password = formData.get('password')

    // Hardcoded credentials as requested
    if (username === 'omrajguru05' && password === 'OmwillbeLive@12pm') {
        // Set a persistent session cookie (30 days)
        const cookieStore = await cookies()
        cookieStore.set('session', 'authenticated', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: '/',
        })
        return { success: true }
    }

    return { success: false, message: 'Invalid credentials' }
}

export async function logout() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
}
