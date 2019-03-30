<template>
  <div>
    <router-link
      class="button is-outlined is-danger is-info is-small"
      :to="{ path: '/companies' }"
    >
      Go to Companies Page
  </router-link><br><br>
  <h1>This is the home page</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
}
</script>
