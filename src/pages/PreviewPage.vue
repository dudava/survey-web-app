<template>
  <q-page class="bg-grey-3 column items-center">
    <Survey 
    :imageURL="imageURL"
    :question="question"
    :choices="choices"
    :correctAnswer="correctAnswer"
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import Survey from 'src/components/Survey.vue'

export default defineComponent({
  name: 'PreviewPage',
  components: {
    Survey
  },
  data() {
    return {
      question: '',
      choices: [],
      correctAnswer: '',
      imageURL: '',
    }
  },
  mounted() {
    const queryParams = this.$route.query
    this.imageURL = queryParams.imageURL
    this.question = queryParams.question
    this.choices = queryParams.choices.split(',')
    this.correctAnswer = this.choices[Number(queryParams.correctAnswer)]
    
  }
  
})
</script>
