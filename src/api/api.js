import {
  wxRequest
} from '../utils/wxRequest';

// const API = "http://localhost:8000/api";
const API = "http://192.168.0.169:8000/api";

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, API + "/wxLogin");

const user2session = (params) => wxRequest(params, apiMall + "/emall/api/wechat/user2session?jsoncallback=?");


//查询菜谱列表
const getRecipes = (params) => wxRequest(params, API + "/recipes");

// 查询菜谱
const getRecipe = (params) => wxRequest(params, API + "/recipe");

// 查询食物，模糊查询
const getFoods = (params) => wxRequest(params, API + "/foods");

// 获取常见慢性病菜谱
const getRecommendRecipes = (params) => wxRequest(params, API + "/recipes/getRecipesByCategory");

const getImages = (params) => wxRequest(params, API + "/getImg");

// 身体信息填写
const userBodyCheck = (params) => wxRequest(params, API + "/bodyCheck");

export default {
  getRecipes,
  getRecipe,
  getFoods,
  wxJsCode2Session,
  getRecommendRecipes,
  getImages,
  userBodyCheck
}
