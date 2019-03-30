<template>
  <div class="company">
    <div v-if="saved" class="notification is-primary">
      <button class="delete" @click="closeAlert"></button>
      You have succesfully updated {{ companyName }}!
    </div>
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
    <button
    class="button is-outlined is-info is-small"
    @click="editCompanyProperties"
    >
      Save
    </button>
  </div>
</template>

<script>
import CompanyService from '../services/CompanyService'

export default {
  props: ['id'],
  data() {
    return {
      saved: false,
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
    created() {
    //get parseInt'd id prop from CompanyService component
    CompanyService.getById(+this.id)
      .then((data) => {
        this.company = data

        //check if null - if not assign company options to prop
        if (this.company !== null) {
          this.companyName = this.company.name
          this.companyDomain = this.company.domain
          this.companyNumberOfEmployees = this.company.numberOfEmployees
        }
      })
  },
  methods: {
    closeAlert() {
      this.saved = false
    },

     //mutate orginal object to reflect new changes on 'save' click
     //created flag for opening/closing save alert
      editCompanyProperties() {
      this.saved = true
      CompanyService.updateCompany(this.company.id, {
        name: this.companyName,
        domain: this.companyDomain,
        numberOfEmployees: this.companyNumberOfEmployees,
      })
    },
  },
}
</script>
