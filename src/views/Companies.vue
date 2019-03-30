<template>
  <div class="companies">

    <strong><u><h1 style="font-size: 30px">Company List</h1></u></strong><br>
    <ul class="company" :key="company.id" v-for="company in companies">
        <strong><li>Company Name: {{ company.name }}</li></strong>
        <li>Company ID: {{ company.id }}</li>
        <li>Company Domain: {{ company.domain }}</li>
        <li>Company # of Employees: {{ company.numberOfEmployees }}</li>
        <li>Company Suscriptions/Employee: {{ company.subscriptionsPerEmployee }}</li>
        <router-link
          class="button is-outlined is-info is-small"
          :to="{ path: '/company/' + company.id }"
        >
          Edit Company
        </router-link>
      </ul>
  </div>
</template>

<script>

import CompanyService from '../services/CompanyService'

export default {
  data() {
    return {
      companies: [],
      currentEditId: 0,
    };
  },
  methods: {
    toggleEdit(id) {
      if (this.currentEditId === id) {
        this.currentEditId = 0

        return id === this.currentEditId
      }

      this.currentEditId = id

      return id === this.currentEditId
    },
  },
  created() {
    CompanyService.getAll()
      .then((data) => {
        this.companies = data
      })
  },
}
</script>
