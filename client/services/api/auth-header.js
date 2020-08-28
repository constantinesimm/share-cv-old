import Storage from '@/plugins/storage';

class AuthHeader {
    static setToken(token) {
        return Storage.setItem('share-cv__auth', token)
    }
    static getToken() {
        return Storage.getItem('share-cv__auth')
    }
    static removeToken() {
        return Storage.removeItem('share-cv__auth')
    }
}

export default AuthHeader;
