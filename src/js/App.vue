<template>
    <div>
        <nav>
            <router-link to="/">domu</router-link>
            <router-link to="/hovno">Go to hovno</router-link>
            <router-link to="/sracka">Go to sracka</router-link>
        </nav>
        <!-- tady se zobrazi content těch stránek-->
        <router-view></router-view>
    </div>
</template>

<script>
    import '../styles/styles.scss'

    export default {
        name: 'App',
        data: function () {
            return {}
        },
        computed: {},
        watch: {},
        mounted() {
        },
        methods: {}
    }
</script>
