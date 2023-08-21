<template>
  <q-page class="bg-grey-3 column items-center">
    <Survey
    :surveyData="surveyData"
    @answersSelected="(answers) => sendSelectedAnswers(answers)"
    />
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Survey from 'src/components/Survey.vue'
import { WebApp } from "@grammyjs/web-app";

console.log(WebApp.initData);
// same as
console.log(window.Telegram.WebApp.initData);

export default {
  name: 'PreviewPage',
  components: {
    Survey
  },
  setup() {
    const route = useRoute()
    // const question = ref('')
    // const choices = ref([])
    // const correctAnswer = ref(null)
    // const surveyId = ref(null)
    const surveyData = ref([])
    
    surveyData.value = JSON.parse(route.query.json).surveyData
    // question.value = queryParams.question
    // choices.value = queryParams.choices
    // surveyId.value = Number(queryParams.surveyId)

    onMounted(() => {
      WebApp.ready();
    })
    return {
      // question,
      // choices,
      // correctAnswer,
      // surveyId,
      surveyData,

      sendSelectedAnswers(answers) {
        console.log(JSON.stringify(answers))
        window.Telegram.WebApp.sendData(JSON.stringify(answers))
      }
    }
  }
}
</script>
