// 一、导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
//mintUI是vue插件，将来需要手动use才可以使用
import MintUI from "mint-ui";
// 引入样式库还需单独导入css文件
import "../../node_modules/mint-ui/lib/style.css";
// 引入mui样式
import '../../node_modules/mui/dist/css/mui.css';
// 引入MUI的扩展图标样式
import '../../node_modules/mui/examples/hello-mui/css/icons-extra.css';




// 1.1、记得手动use启用插件
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);

// 二、导入我们自己的东西

// 2.1 引入过滤器
  import './filter.js';

// 2.1导入自己的组件
import App from '../component/App.vue';  // 根组件

// 2.2 导入配置好的路由对象
import router from './router.js';  // 路由

// 三、创建一个Vue实例，关联视图，把根组件渲染到视图中
new Vue({
    el: '#app',
    render: c => c(App),
    router
});
