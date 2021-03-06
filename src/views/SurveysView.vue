<template>
  <page-component>
    <template v-slot:header>
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold text-gray-900">
          {{ model.title ? model.title : "Create a Survey" }}
        </h1>
      </div>
    </template>
    <form @submit.prevent="saveSurvey">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <!-- image -->
          <div>
            <label class="block text-left text-sm font-medium text-gray-700">
              Image
            </label>
            <div class="mt-1 flex items-center">
              <img
                class="w-64 h-48 object-cover"
                :src="model.image"
                v-if="model.image"
                :alt="model.title"
              />
              <span
                class="
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-full
                  overflow-hidden
                  bg-gray-100
                "
                v-else
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-[80%] w-[80%] text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <button
                type="button"
                class="
                  relative
                  overflow-hidden
                  ml-5
                  bg-white
                  py-2
                  px-3
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  text-sm
                  leading-4
                  font-medium
                  text-gray-700
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                <input
                  type="file"
                  @change="onImageChoose"
                  class="
                    absolute
                    left-0
                    top-0
                    right-0
                    bottom-0
                    opacity-0
                    cursor-pointer
                  "
                />
                Change
              </button>
            </div>
          </div>
          <!-- image -->
          <!-- title -->
          <div>
            <label
              for="title"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              v-model="model.title"
              autocomplete="survey_title"
              class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>
          <!-- title -->

          <!-- description -->
          <div>
            <label
              for="about"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              v-model="model.description"
              autocomplete="survey_description"
              placeholder="Description your survey"
              class="
                mt-1
                focus:ring-indigo-500 focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
                border
              "
            />
          </div>
          <!-- description -->

          <!-- expire data -->
          <label
            for="about"
            class="block text-sm font-medium text-gray-700 text-left"
          >
            Expire date
          </label>
          <input
            type="date"
            name="expire_date"
            id="expire_date"
            v-model="model.expire_date"
            class="
              mt-1
              focus:ring-indigo-500 focus:border-indigo-500
              block
              w-full
              shadow-sm
              sm:text-sm
              border-gray-300
              rounded-md
            "
          />
          <!-- expire data -->

          <!-- status -->
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                type="checkbox"
                id="status"
                name="status"
                v-model="model.status"
                class="
                  focus:ring-indigo-500
                  h-4
                  w-4
                  text-indigo-600
                  border-gray-300
                  rounded
                "
              />
            </div>
            <div class="ml-3 text-sm">
              <label for="status" class="font-medium text-gray-700">
                Active
              </label>
            </div>
          </div>
          <!-- status -->
        </div>

        <!-- survey field -->
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <h3 class="text-2xl font-semibold flex items-center justify-between">
            Questions
            <button
              type="button"
              @click="addQuestion()"
              class="
                flex
                items-center
                text-sm
                py-1
                px-4
                rounded-sm
                text-white
                bg-gray-600
                hover:bg-gray-700
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 28 28"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add Question
            </button>
          </h3>
          <div v-if="!model.questions.length" class="text-center text-gray-600">
            You don't have any questions created
          </div>
          <div v-for="(question, index) in model.questions" :key="index">
            <question-editor
              :question="question"
              :index="index"
              @change="questionChange"
              @addQuestion="addQuestion"
              @deleteQuestion="deleteQuestion"
            ></question-editor>
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            class="
              inline-flex
              justify-center
              py-2
              px-4
              border border-transparent
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-white
              bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </page-component>
</template>

<script setup>
import store from "../store";
import { ref } from "@vue/reactivity";
import PageComponent from "../components/PageComponent.vue";
import { useRoute, useRouter } from "vue-router";
import QuestionEditor from "../components/editor/QuestionEditor.vue";
import { v4 as uuidv4 } from "uuid";

const route = useRoute();
const router = useRouter();

let model = ref({
  title: "",
  status: false,
  description: null,
  image: null,
  expire_data: null,
  questions: [],
});
console.log(store.state.surveys);
if (route.params.id) {
  model.value = store.state.surveys.find(
    (data) => data.id === parseInt(route.params.id)
  );
}

function onImageChoose(e) {
  const file = e.target.files[0];

  const reader = new FileReader();

  reader.onload = () => {
    model.value.image = reader.result;
    model.value.image_url = reader.result;
  };

  reader.readAsDataURL(file);
}
function addQuestion(index) {
  const newQuestion = {
    id: uuidv4(),
    type: "text",
    question: "",
    description: null,
    data: {},
  };
  model.value.questions.splice(index, 0, newQuestion);
}

function deleteQuestion(question) {
  model.value.questions = model.value.questions.filter(
    (q) => q.id !== question.id
  );
}

function questionChange(question) {
  model.value.questions = model.value.questions.map((q) => {
    if (q.id === question.id) {
      return JSON.parse(JSON.stringify(question));
    }
    return q;
  });
}

function saveSurvey() {
  store.dispatch("saveSurvey", model.value).then(({ data }) => {
    router.push({
      name: "SurveysView",
      params: { id: data.data.id },
    });
  });
}
</script>

<style >
</style>