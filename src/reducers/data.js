import * as type from '../constants';

export default function data(state = {}, action) {
  switch (action.type) {
    case type.SET_DATA:
      const data = action.payload.value
      return {
        ...state,
        info: {
          ...state.info,
          value: data.info || {}
        },
        post: {
          ...state.post,
          value: data.getOnePost || {}
        },
        news: {
          ...state.news,
          value: data.getNews || state.news.value
        },
        foodNews: {
          ...state.news,
          value: data.getFoodNews || state.foodNews.value
        },
        newsInCategory: {
          ...state.newsInCategory,
          value: data.getNewsInCategory || state.news.value
        },
        product: {
          ...state.product,
          value : data.getOneProduct || {}
        },
        products: {
          ...state.products,
          value : data.getProducts || []
        },
        productsInCategory: {
          ...state.productsInCategory,
          value : data.getProductsByCategory || []
        },
        noibat: {
          ...state.noibat,
          value : data.getNoiBat || []
        },
        khuyenmai: {
          ...state.khuyenmai,
          value : data.getKhuyenMai || []
        },
        banchay: {
          ...state.banchay,
          value : data.getBanChay || []
        },
        productsInCategory: {
          ...state.productsInCategory,
          value : data.productsInCategory || []
        }
      };
    default:
      return state;
  }
}
