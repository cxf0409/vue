<template>
    <div>
        <h2>个人中心</h2>
        <br>
        <router-link to="/">主页</router-link>
        <br>
        姓名：{{name}}
    </div>
</template>
<script>
export default {
    props: ['name'],
    
}
</script>