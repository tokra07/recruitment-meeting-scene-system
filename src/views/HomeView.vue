<template>
  <div>
    <JobList/>
    <EnterpriseSalary/>
  </div>
</template>

<script>
import JobList from '@/components/JobList.vue'
import EnterpriseSalary from '@/components/EnterpriseSalary.vue'

export default {
  name: 'HomeView',
  components: {
    JobList,
    EnterpriseSalary
  }
}
</script>
