<template>
  <q-card class="survey-card" flat bordered>
    <img :src="imageURL">
    <q-card-section>
      <div class="text-h6">{{ question }}</div>
    </q-card-section>
    <q-list>
      <q-form @submit.prevent="onSubmit" class="q-gutter-md">
        <div v-for="choice in choices">
          <q-radio name="answer" v-model="answer" :val="choice" :label="choice" />
        </div>
        <div>
          <q-btn label="Ответить" type="submit" color="primary"/>
        </div>
      </q-form>
    </q-list>
    <q-card
      v-if="submitResult.length > 0"
      flat bordered
      class="q-mt-md"
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'"
    >
      <q-card-section class="row q-gutter-sm items-center">
        <div
          v-for="(item, index) in submitResult"
          :key="index"
          class="q-px-sm q-py-xs bg-green-3 rounded-borders text-center text-no-wrap"
        >Ответ принят</div>
      </q-card-section>
    </q-card>
  </q-card>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Survey',
  props: {
    imageURL: String,
    question: String,
    choices: Array,
  },
  setup() {
    const submitResult = ref([])
    return {
      answer: ref(''),
      submitResult,
      onSubmit(evt) {
        const formData = new FormData(evt.target)
        const data = []

        for (const [ name, value ] of formData.entries()) {
          data.push(value)
        }

        submitResult.value = data
      },
    }
  },
  
}
</script>
