<template>
  <div>
    <h1>This is the home page</h1><br><br>
    <router-link
      class="button is-outlined is-info is-small"
      :to="{ path: '/companies' }"
    >Go to Companies Page
  </router-link><br>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>
