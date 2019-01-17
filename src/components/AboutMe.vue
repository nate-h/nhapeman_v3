<template>
  <div class="about-me-container l-to-r equal lt">
      <!-- Content inserted here! -->
      <div class="row">
          <h2> About Me </h2>
          <p>
              Hi! I'm Nathanial Hapeman and I am a professional software engineer.
              I enjoy writing software for many different fields. I have worked most
              of my professional career as a simulation developer but have been doing
              front-end development for the past year. When I'm not watching Netflix
              or hanging out with friends, I'm probably coding.
          </p>

      </div>
      <div class="row">
          <img src="~img/stitchedme.jpg" alt="">
          <!-- <img src="~img/blankperson.jpg" alt=""> -->
      </div>
      <div class="row">

          <h2> Details </h2>

          <ul>
              <li class="question">Name:</li>
              <li class="answer">Nathanial Hapeman</li>
              <li class="question">Age:</li>
              <li class="answer">28</li>
              <li class="question">Location:</li>
              <li class="answer">Los Angeles, CA</li>
              <li class="question">Education:</li>
              <li class="answer">UC Riverside</li>
              <li class="answer">BS in Mechanical Engineering, minor in Computer Science</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: "AboutMe",
    data() {
        return {};
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.about-me-container {
    @extend %container;

    .row {
        &:not(:first-child) {
            margin-left: $margin;
        }
        &:not(:last-child) {
            margin-right: $margin;
        }

        ul {
            list-style: none;

            li {
                &.question {
                    color: $dark2;
                    margin-top: $margin-small;
                }

                &.answer {
                    color: $dark1;
                    font-weight: $fw-bold;
                }
            }
        }
    }
}
</style>
