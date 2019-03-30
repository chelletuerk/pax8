<template>
  <div class="company">
    <div>
      Company Name:
      <input v-model="companyName" />
    </div>
    <div>
      Company Domain:
      <input v-model="companyDomain" />
    </div>
    <div>
      Company Employees:
      <input v-model="companyNumberOfEmployees" />
    </div>
    <br />
  </div>
</template>

<script>
import CompanyService from '../services/CompanyService'

export default {
  data() {
    return {
      company: {
        name: '',
        domain: '',
        numberOfEmployees: '',
      },
      companyName: '',
      companyDomain: '',
      companyNumberOfEmployees: '',
    }
  },
}
</script>
