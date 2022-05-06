import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
  {
    id: 100,
    title: "The codeholic youtube channel content",
    slug: "the codeholic-youtube-channel-content",
    status: "draft",
    image:
      "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
    description:
      "My name is manut. I am a web developer with 1 year of experience.",
    created_at: "2021-12-20 18:00:00",
    updated_at: "2021-12-20 18:00:00",
    expire_date: "2021-12-31 18:00:00",
    questions: [
      {
        id: 1,
        type: "textarea",
        question: "What do think about coding",
        description: "write you thought with your honest opinion.",
        data: {},
      },
      {
        id: 2,
        type: "text",
        question: "What is your favorite color",
        description: null,
        data: {},
      },
      {
        id: 3,
        type: "select",
        question: "Which country are you from?",
        description: null,
        data: {
          options: [
            {
              uuid: "c17535ec-e40b-4dda-b8cd-a3dc22f9e97b",
              text: "USA",
            },
            {
              uuid: "c17535ec-e40b-4dda-b8cd-a3dc22f9e97c",
              text: "Cambodia",
            },
            {
              uuid: "c17535ec-e40b-4dda-b8cd-a3dc22f9e97d",
              text: "China",
            },
            {
              uuid: "c17535ec-e40b-4dda-b8cd-a3dc22f9e97e",
              text: "India",
            },
          ],
        },
      },
      {
        id: 3,
        type: "checkbox",
        question: "Which languages can you write?",
        description: null,
        data: {
          options: [
            {
              uuid: "a17535ec-e40b-4dda-b8cd-a3dc22f9e97b",
              text: "java",
            },
            {
              uuid: "b17535ec-e40b-4dda-b8cd-a3dc22f9e97c",
              text: "vuejs",
            },
            {
              uuid: "d17535ec-e40b-4dda-b8cd-a3dc22f9e97d",
              text: "react",
            },
            {
              uuid: "r17535ec-e40b-4dda-b8cd-a3dc22f9e97e",
              text: "angular",
            },
          ],
        },
      },
    ],
  },
  {
    id: 200,
    title: "The codeholic youtube channel content",
    slug: "the codeholic-youtube-channel-content",
    status: "draft",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    description:
      "My name is manut. I am a web developer with 1 year of experience.",
    created_at: "2021-12-20 18:00:00",
    updated_at: "2021-12-20 18:00:00",
    expire_date: "2021-12-31 18:00:00",
    questions: [
      {
        id: 1,
        type: "textarea",
        question: "What do think about coding",
        description: "write you thought with your honest opinion.",
        data: {},
      },
      {
        id: 2,
        type: "text",
        question: "What is your favorite color",
        description: null,
        data: {},
      },
      {
        id: 3,
        type: "select",
        question: "Which country are you from?",
        description: null,
        data: {
          options: [
            {
              uuid: "c17535ec-e40b-4dda-b8cd-a3dc22f9e97b",
              text: "USA",
            },
            {
              uuid: "c17535ec-e40b-4dda-b8cd-a3dc22f9e97c",
              text: "Cambodia",
            },
            {
              uuid: "c17535ec-e40b-4dda-b8cd-a3dc22f9e97d",
              text: "China",
            },
            {
              uuid: "c17535ec-e40b-4dda-b8cd-a3dc22f9e97e",
              text: "India",
            },
          ],
        },
      },
      {
        id: 3,
        type: "checkbox",
        question: "Which languages can you write?",
        description: null,
        data: {
          options: [
            {
              uuid: "a17535ec-e40b-4dda-b8cd-a3dc22f9e97b",
              text: "java",
            },
            {
              uuid: "b17535ec-e40b-4dda-b8cd-a3dc22f9e97c",
              text: "vuejs",
            },
            {
              uuid: "d17535ec-e40b-4dda-b8cd-a3dc22f9e97d",
              text: "react",
            },
            {
              uuid: "r17535ec-e40b-4dda-b8cd-a3dc22f9e97e",
              text: "angular",
            },
          ],
        },
      },
    ],
  },
  {
    id: 300,
    title: "The codeholic youtube channel content",
    slug: "the codeholic-youtube-channel-content",
    status: "draft",
    image:
      "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg",
    description:
      "My name is manut. I am a web developer with 1 year of experience.",
    created_at: "2021-12-20 18:00:00",
    updated_at: "2021-12-20 18:00:00",
    expire_date: "2021-12-31 18:00:00",
    questions: [
      {
        id: 1,
        type: "textarea",
        question: "What do think about coding",
        description: "write you thought with your honest opinion.",
        data: {},
      },
      {
        id: 2,
        type: "text",
        question: "What is your favorite color",
        description: null,
        data: {},
      },
      {
        id: 3,
        type: "select",
        question: "Which country are you from?",
        description: null,
        data: {
          options: [
            {
              uuid: "c17535ec-e40b-4dda-b8cd-a3dc22f9e97b",
              text: "USA",
            },
            {
              uuid: "c17535ec-e40b-4dda-b8cd-a3dc22f9e97c",
              text: "Cambodia",
            },
            {
              uuid: "c17535ec-e40b-4dda-b8cd-a3dc22f9e97d",
              text: "China",
            },
            {
              uuid: "c17535ec-e40b-4dda-b8cd-a3dc22f9e97e",
              text: "India",
            },
          ],
        },
      },
      {
        id: 3,
        type: "checkbox",
        question: "Which languages can you write?",
        description: null,
        data: {
          options: [
            {
              uuid: "a17535ec-e40b-4dda-b8cd-a3dc22f9e97b",
              text: "java",
            },
            {
              uuid: "b17535ec-e40b-4dda-b8cd-a3dc22f9e97c",
              text: "vuejs",
            },
            {
              uuid: "d17535ec-e40b-4dda-b8cd-a3dc22f9e97d",
              text: "react",
            },
            {
              uuid: "r17535ec-e40b-4dda-b8cd-a3dc22f9e97e",
              text: "angular",
            },
          ],
        },
      },
    ],
  },
  {
    id: 400,
    title: "The codeholic youtube channel content",
    slug: "the codeholic-youtube-channel-content",
    status: "draft",
    image:
      "https://images.pexels.com/photos/870711/pexels-photo-870711.jpeg?cs=srgb&dl=pexels-julius-silver-870711.jpg&fm=jpg",
    description:
      "My name is manut. I am a web developer with 1 year of experience.",
    created_at: "2021-12-20 18:00:00",
    updated_at: "2021-12-20 18:00:00",
    expire_date: "2021-12-31 18:00:00",
    questions: [],
  },
];

const store = createStore({
  state: {
    surveys: [...tmpSurveys],
    questionTypes: ["text", "select", "radio", "checkbox", "textarea"],
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
  },
  getters: {},
  actions: {
    saveSurvey({ commit }, survey) {
      delete survey.image_url;
      let res;
      if (survey.id) {
        res = axiosClient.put(`/survey/${survey.id}`, survey).then((res) => {
          commit("updateSurvey", res.data);
          return res;
        });
      } else {
        res = axiosClient.post("/survey", survey).then((res) => {
          commit("saveSurvey", res.data);
          return res;
        });
      }
      return res;
    },
    register({ commit }, user) {
      return axiosClient.post("/register", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    login({ commit }, user) {
      return axiosClient.post("/login", user).then(({ data }) => {
        commit("setUser", data);
        return data;
      });
    },
    logout({ commit }) {
      return axiosClient.post("/logout").then((res) => {
        commit("logout");
        return res;
      });
    },
  },
  mutations: {
    saveSurvey: (state, survey) => {
      state.surveys = [...state.surveys, survey.data];
    },
    updateSurvey: (state, survey) => {
      state.surveys = state.surveys.map((s) => {
        if (s.id == survey.data.id) {
          return survey.data;
        }
        return s;
      });
    },
    logout: (state) => {
      state.user.data = {};
      state.user.token = null;
      sessionStorage.removeItem("TOKEN");
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem("TOKEN", userData.token);
    },
  },
  modules: {},
});

export default store;
