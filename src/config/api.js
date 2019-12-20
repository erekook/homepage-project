export default {
    // 获取随机的一句话
    getRandQuote: '/api/v1/quote/rand',

    // 登录
    login: '/api/v1/admin/login',

    // 注册
    register: 'api/v1/admin/register',

    // 发送邮箱验证码
    sendEmailCode: function(email) {
        return `/api/v1/admin/send-email-code/${email}`
    },

    // get 获取所有博客 post 新增博客
    fetchAllBlogs: 'api/v1/blog/blogs',

    fetchBlogById: function(id) {
        return `api/v1/blog/${id}`
    },

    // 获取所有博客分类
    fetchAllCategorys: 'api/v1/blog/categorys'

}