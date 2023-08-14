<template>
  <q-card class="survey-card" flat bordered>
    <img v-if="loaderModel" :src="imageURL">
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-file clearable color="orange" standout bottom-slots
        label="Загрузить изображение для опроса"
        @update:model-value="onImageLoaded"
        v-model="loaderModel"
        class="image-loader"
      >
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
        <template v-slot:hint>
          Для удаления изображения нажмите на крестик в правой части загрузчика
        </template>
      </q-file>
      <q-input
        filled
        v-model="question"
        label="Заголовок опроса *"
        hint=""
        lazy-rules
        :rules="[ val => val && (val.length > 0 || val.value.length > 0) || 'Пожалуйста, введите что-нибудь']"
      />
      
      <ul class="choices-list bg-grey-2">
        <q-input 
          v-for="(choice, index) in choices"
          filled
          label="Ответ *"
          v-model="choices[index]"
          hint=""
          lazy-rules
          :rules="[ val => val && (val.length > 0 || val.value.length > 0) || 'Пожалуйста, введите что-нибудь']"
          class="choice"
        >
          <template v-slot:append>
            <q-btn round dense flat icon="close" @click="() => {onDeleteChoice(index)}"/>
          </template>
          <template v-slot:after>
            <q-btn :class="{'bg-green-3': index==correctAnswerIndex}" round dense flat icon="check" @click="() => {onSelectCorrectAnswer(index)}"/>
          </template>
        </q-input>
      </ul>
      <div class="column items-center">
        <q-btn label="Добавить ответ" color="secondary" class="center" @click="onChoiceAdd"/>
      </div>
      <q-separator />
      <div>
        <q-btn label="Сохранить" type="submit" color="primary"/>
      </div>
    </q-form>
  </q-card>
</template>


<script>
import { useQuasar } from 'quasar'
import { watch, nextTick, toRef, toRefs, ref, onMounted, defineProps } from 'vue'
import { useRoute } from 'vue-router'


export default {
  name: 'SurveyEdit',
  props: {
    imageURL: String,
    question: String,
    choices: Array,
    correctAnswer: Number,
  },
  setup(props) {
    const question = ref(null)
    const choices = ref([])
    const correctAnswerIndex = ref(null)
    const imageURL = ref('')
    const $q = useQuasar()
    // watch(() => props.question, () => {
    //   question.value = props.question
    // })
    // что-то типо того
    
    question.value = props.question 
    for (let choice of props.choices) {
      choices.value.push(choice)  
    };
    correctAnswerIndex.value = props.correctAnswer
    

    const loaderModel = ref(null)
    return {
      loaderModel,
      imageURL,
      question,
      choices,
      correctAnswerIndex,
  
      onImageLoaded(image) {
        if (image) {
          imageURL.value = URL.createObjectURL(image)
        }
      },
      onSubmit() {
        if (!correctAnswerIndex.value && correctAnswerIndex.value != 0) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Необходимо создать и выбрать один правильный ответ'
          })
        }
        else {
          $q.notify({
            color: 'green-5',
            textColor: 'white',
            icon: 'check',
            message: 'Сохранено'
          })
          const response = {}
          response.question = question.value
          response.choices = choices.value
          response.correctAnswerIndex = correctAnswerIndex.value
          console.log(response)
        }
      },
      onChoiceAdd() {
        choices.value.push(ref(''))
      },
      onDeleteChoice(index) {
        choices.value.splice(index, 1)
        correctAnswerIndex.value = null
      },
      onSelectCorrectAnswer(index) {
        correctAnswerIndex.value = index
      }
    } 
  }
}
</script>

<style scoped> 
.image-loader {
  margin-bottom: 20px;
}
.choices-list {
  padding-left: 0px;
}
.choice {
  margin-bottom: 20px;
}
</style>