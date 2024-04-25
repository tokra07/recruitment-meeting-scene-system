import { get, post } from '@/api/index'

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

export function getTalentSalary () {
  return get('/getTalentSalary')
}

export function getTalentIndustry () {
  return get('/getTalentIndustry')
}

export function getTalentEducation () {
  return get('/getTalentEducation')
}

export function getBoothList () {
  return get('/getBoothList')
}

export function getDetails (data) {
  return post('/getDetails', data)
}

export function getResumesRanking () {
  return get('/getResumesRanking')
}

export function getJobIndustryTrend () {
  return get('/getJobIndustryTrend')
}

export function getTalentIndustryTrend () {
  return get('/getTalentIndustryTrend')
}
