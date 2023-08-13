<template>
  <q-page class="bg-grey-3 column items-center">
    <Survey 
    :imageURL="imageURL"
    :question="question"
    :choices="choices"
    />
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Survey from 'src/components/Survey.vue'

export default {
  name: 'PreviewPage',
  components: {
    Survey
  },
  setup() {
    const route = useRoute()
    const question = ref('')
    const choices = ref([])
    const correctAnswer = ref(null)
    const imageURL = ref('')
    onMounted(() => {
      const queryParams = route.query
      imageURL.value = queryParams.imageURL
      question.value = queryParams.question
      choices.value = queryParams.choices.split('|')
    })
    return {
      question,
      choices,
      correctAnswer,
      imageURL,
    }
  }
}
</script>
