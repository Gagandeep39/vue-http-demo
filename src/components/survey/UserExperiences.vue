<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperience"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experience found. Start adding some experience
      </p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.userName"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import axios from 'axios';
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    loadExperience() {
      this.isLoading = true;
      axios
        .get(`${process.env.VUE_APP_URL}`)
        .then((res) => {
          const body = res.data;
          const results = [];
          for (const data in body) {
            results.push({
              id: data,
              userName: body[data].userName,
              rating: body[data].rating,
            });
          }
          this.results = results;
        })
        .catch((err) => {
          console.log(err);
          this.error = 'Error! Check log messages for more info.';
        })
        .finally(() => (this.isLoading = false));
    },
  },
  mounted() {
    this.loadExperience();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
