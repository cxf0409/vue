<template>
    <div>
        <!-- <router-link to="/foo">Go to Foo</router-link>
        <br>
        <router-link to="/user/12">Go to user/12</router-link>
        <br>
        <router-link to="/user/12/profile">Go to user/12/profile</router-link>
        <br>
        <router-link to="/other">Go to 404</router-link>
        <br>
        <router-link to="/a">Go to a 重定向 Foo</router-link>
        <br>
        <a href="#/foo">Go to Foo</a>
        <br>
        <button @click="$router.push('foo')">Go to Foo</button> -->



        <router-link to="/">主页</router-link>
        <br>
        <router-link to="/index">博客</router-link>
        <br>
        <router-link to="">问答</router-link>
        <br>
        <router-link to="/Shopping">商城</router-link>
        <br>
        <router-link to="/pepole/陈晓飞">个人中心</router-link>
        <br>
        <a href="https://www.baidu.com/?tn=62095104_26_oem_dg">baidu</a>
        <br>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        routerInfo(){
            const{fullPath,path,name,params,query,meta}=this.$route
            return {
                fullPath,path,name,params,query,meta
            }
        }
    }
}
</script>