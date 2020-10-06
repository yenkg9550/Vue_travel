<template>
    <div>
      <AdminNavbar></AdminNavbar>
      <Alert></Alert>
        <div>
          <router-view></router-view>
        </div>
     </div>
</template>

<script>
import Alert from '../../components/AlertMessage.vue';
import AdminNavbar from './AdminNavbar.vue';

export default {
  components: {
    AdminNavbar,
    Alert,
  },
};
</script>
