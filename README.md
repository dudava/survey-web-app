# /view/?... - просмотр опроса

## Пример: 
```
/view?question=Кто лучше? Выбери один из ответов&choices=Котики|Собачки|Антилопы ньялы&correctAnswer=2&imageURL=https://cdn.quasar.dev/img/parallax2.jpg
```
![изображение](https://github.com/dudava/survey-web-app/assets/121783360/fad8f2d9-ca1a-4b05-82a4-fa804ae7eb7a)

## Параметры: 
**question** - вопрос <br>
**choices** - варианты ответов через | без пробелов <br>
**correctAnswer** - индекс правильного ответа (среди choices) начиная с нуля <br>
**imageURL** - URL изображения для опроса <br>


# Survey Web App Vue JS + Quasar (survey-standalone)

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
