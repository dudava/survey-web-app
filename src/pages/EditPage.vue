<template>
  <q-page class="bg-grey-3 column items-center">
    <SurveyEdit
    :question="`ты жинжер?`"
    :correctAnswer="1"
    :choices="['Да', 'Нет', 'пшел нахуй']"
    />
  </q-page>
</template>

<script>
import SurveyEdit from 'src/components/SurveyEdit.vue'

export default {
  name: 'EditPage',
  components: {
    SurveyEdit
  }
}
</script>