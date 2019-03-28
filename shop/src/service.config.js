const MOCKURL = 'http://www.haoluweb.com/'; // mock模拟
const SERVERURL = 'http://localhost:3000/';//真实URL

const URL = {
    getVarietyItem: MOCKURL + 'getVarietyItem',           //推荐商品
    registUser: SERVERURL + 'user/registUser',             //注册
    loginUser: SERVERURL + 'user/loginUser',               //登陆
    getTypes: SERVERURL + 'type/getTypes',                    //获取商品种类
    getProductsByType: SERVERURL + 'product/getProductsByType',               //获取商品种类id
    getDetail: SERVERURL + 'product/getDetail',                //获取商品详情
    addcar: SERVERURL + 'cart/addcar',                      //添加到购物车
    getCar: SERVERURL + 'cart/getCar',              //获取购物车列表
    cutdata: SERVERURL + 'cart/cutdata',              //删除数据                    
};

export default URL;