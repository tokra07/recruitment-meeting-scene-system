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

export function getEnterpriseEducation () {
  return get('/getEnterpriseEducation')
}

export function getInfo () {
  return get('/getInfo')
}
