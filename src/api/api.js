import { get } from '@/api/index'

export function getJobList () {
  return get('/getJobList')
}

export function getEnterpriseSalary () {
  return get('getEnterpriseSalary')
}
