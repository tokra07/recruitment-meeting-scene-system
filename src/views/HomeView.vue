<template>
  <div>
    <JobList/>
    <EnterpriseSalary/>
    <EnterpriseIndustry/>
  </div>
</template>

<script>
import JobList from '@/components/JobList.vue'
import EnterpriseSalary from '@/components/EnterpriseSalary.vue'
import EnterpriseIndustry from '@/components/EnterpriseIndustry.vue'

export default {
  name: 'HomeView',
  components: {
    JobList,
    EnterpriseSalary,
    EnterpriseIndustry
  }
}
</script>
