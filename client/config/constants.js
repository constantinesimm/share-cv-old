const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.APP_PROD_URL : process.env.APP_DEV_URL;


export default {
    BASE_URL
}