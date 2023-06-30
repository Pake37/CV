import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCommonFieldsStore = defineStore('CommonFieldsStore', () => {
  const dropDownWorkExperience = ref(false)
  const dropDownEducation = ref(false)
  const dropDownSkills = ref(false)
  const dropDownReferences = ref(false)

  function isDropDownWorkExperience() {
    dropDownWorkExperience.value = !dropDownWorkExperience.value
  
  }
  function isDropDownEducation() {
    dropDownEducation.value = !dropDownEducation.value
    
  
  }
  function isDropDownSkills() {
    dropDownSkills.value = !dropDownSkills.value
    

  
  }
  function isDropDownReferences() {
    dropDownReferences.value = !dropDownReferences.value
  
  }

  return { dropDownWorkExperience,dropDownEducation,dropDownSkills,dropDownReferences,isDropDownWorkExperience,isDropDownEducation,isDropDownSkills,isDropDownReferences }
})
