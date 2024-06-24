<template>
    <v-app class="pa-6">
        <Header />
        <Sidebar />
        <v-main class="content">
            <router-view />
            <Footer />
        </v-main>
    </v-app>
</template>

<script>
    import Header from '@/components/Header/AppHeader';
    import Sidebar from '@/components/Sidebar/AppSidebar';
    import Footer from "@/components/Footer/AppFooter";
    import './Layout.scss';

    export default {
        name: 'AppLayout',
        components: {Footer, Header, Sidebar },
    };
</script>

<style src="./Layout.scss" lang="scss" />
