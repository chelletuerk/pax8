<template>
  <div class="companies">
    <strong><u><h1 style="font-size: 30px">Company List</h1></u></strong><br>
    <ul class="company" v-for="company in companies">
        <strong><li>Company Name: {{ company.name }}</li></strong>
        <li>Company ID: {{ company.id }}</li>
        <li>Company Domain: {{ company.domain }}</li>
        <li>Company # of Employees: {{ company.numberOfEmployees }}</li>
        <li>Company Suscriptions/Employee: {{ company.subscriptionsPerEmployee }}</li>
        <button @click="toggleEdit(company.id)" type="button" name="edit-button">Edit Company Info</button><br><br>
        <div  v-if="toggleEdit(company.id)">
          Hello
        </div>
      </ul>
  </div>
</template>

<script>

import CompanyService from '../services/CompanyService'

export default {
    data() {
      return {
        currentEdit: 0,
      }
    },
    methods: {
      editable(id) {
        // console.log(this.currentEdit)
        return id === this.currentEdit
      },
      toggleEdit(id) {
        this.currentEdit = id
        return this.editable(this.currentEdit)
      },
    //   getCompanyById(id = 0) {
    //     CompanyService.getById(id)
    //     .then(data => {
    //       this.uniqueCompany = data
    //     })
    //     return this.uniqueCompany
    //   }
     },
    created() {
      CompanyService.getAll()
      .then(data => {
        this.companies = data
      })
    },
    data() {
      return {
        companies: [],
        uniqueCompany: {},
        inMode: false,
      }
  }
}

</script>
