import { get } from '@/api/index'

export function getJobList () {
  return get('/getJobList')
}

export function getEnterpriseSalary () {
  return get('/getEnterpriseSalary')
}

export function getEnterpriseIndustry () {
  return get('/getEnterpriseIndustry')
}

export function getJobIndustry () {
  return get('/getJobIndustry')
}
