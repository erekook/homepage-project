export default {
    // 获取随机的一句话
    getRandQuote: '/api/v1/quote/rand',

    login: '/api/v1/admin/login',

    register: 'api/v1/admin/register',

    sendEmailCode: function(email) {
        return `/api/v1/admin/send-email-code/${email}`
    },

    fetchAllBlogs: 'api/v1/blog/blogs'
}