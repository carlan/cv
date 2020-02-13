<template>
  <Layout>
    <div class="main-wrapper">
      <div class="container px-3 px-lg-5">
        <article class="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
          <div class="resume-header">
            <div class="row align-items-center">
              <div class="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
                <h2 class="resume-name mb-0 text-uppercase">{{ cv.name }}</h2>
                <div class="resume-tagline mb-3 mb-md-0">{{ cv.title }}</div>
              </div>
              <div class="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
                <ul class="list-unstyled mb-0">
                  <li class="mb-2">
                    <i class="fas fa-envelope-square fa-fw fa-lg mr-2"></i>
                    <a class="resume-link" :href="'mailto:' + cv.email">{{ cv.email }}</a>
                  </li>
                  <li class="mb-0">
                    <i class="fas fa-map-marker-alt fa-fw fa-lg mr-2"></i>
                    {{ cv.location }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr />

          <div class="resume-intro py-3">
            <div class="media flex-column flex-md-row align-items-center">
              <img
                class="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto"
                :src="cv.picture"
                alt="image"
              />
              <div class="media-body text-left">
                <p class="mb-0" v-html="cv.summary"></p>
              </div>
            </div>
          </div>

          <hr />

          <div class="resume-body">
            <!-- resume-->
            <div class="row">
              <div class="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
                <!-- work experience -->
                <section class="work-section py-3">
                  <h3 class="text-uppercase resume-section-heading mb-4">Work Experiences</h3>
                  <div
                    class="item mb-3"
                    v-for="workExperience in cv.workExperiences"
                    :key="workExperience.startDate"
                  >
                    <div class="item-heading row align-items-center mb-2">
                      <h4
                        class="item-title col-12 col-md-6 col-lg-6 mb-2 mb-md-0"
                      >{{ workExperience.position }}</h4>
                      <div
                        class="item-meta col-12 col-md-6 col-lg-6 text-muted text-left text-md-right"
                      >{{ workExperience.company }} | {{ workExperience.startDate }} - {{ workExperience.endDate }}</div>
                    </div>
                    <div class="item-content">
                      <p>{{ workExperience.summary }}</p>
                      <ul class="resume-list">
                        <li v-for="detail in workExperience.details" :key="detail">{{ detail }}</li>
                      </ul>
                    </div>
                    <div class="item-content">
                      <p>Projects</p>
                      <ul class="resume-list">
                        <li v-for="project in workExperience.projects" :key="project.name">
                          <span>{{ project.name }}</span> -
                          <small>{{ project.stack }}</small>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <!-- /work experience -->
                <!-- Personal projects -->
                <section class="project-section py-3">
                  <h3 class="text-uppercase resume-section-heading mb-4">Personal Projects</h3>
                  <div class="item mb-3"
                       v-for="project in cv.personalProjects" :key="project.name">
                    <div class="item-heading row align-items-center mb-2">
                      <h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">{{ project.name }}</h4>
                      <div
                        class="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                        Open Source
                      </div>
                    </div>
                    <div class="item-content">
                      <p>{{ project.summary }}</p>
                    </div>
                  </div>
                </section>
                <!-- /Personal projects -->
              </div>

              <aside class="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
                <section class="skills-section py-3">
                  <!-- Skills -->
                  <h3 class="text-uppercase resume-section-heading mb-4">Skills</h3>
                  <div class="item">
                    <h4 class="item-title">Technical</h4>
                    <ul class="list-unstyled resume-skills-list">
                      <li class="mb-2">Angular/ReactJs/VueJS</li>
                      <li class="mb-2">Java/Python/Ruby/NodeJS</li>
                      <li class="mb-2">Spring/Spring Cloud/Grails</li>
                      <li class="mb-2">Oracle,SQLServer,Postgres,MySQL</li>
                      <li class="mb-2">Elasticsearch, Hazelcast</li>
                      <li>Deliver complex software</li>
                    </ul>
                  </div>
                  <!-- /Skills -->

                  <!-- Professinal -->
                  <div class="item">
                    <h4 class="item-title">Professional</h4>
                    <ul class="list-unstyled resume-skills-list">
                      <li class="mb-2">Team player</li>
                      <li></li>
                      <li class="mb-2">Problem solver</li>
                      <li class="mb-2">Effective communication</li>
                      <li>Good time management</li>
                    </ul>
                  </div>
                  <!-- /Professinal -->
                </section>

                <section class="education-section py-3">
                  <!-- Education -->
                  <h3 class="text-uppercase resume-section-heading mb-4">Education</h3>
                  <ul class="list-unstyled resume-education-list">
                    <li class="mb-3" 
                        v-for="edu in cv.education" :key="edu.startDate">
                      <div class="resume-degree font-weight-bold">{{ edu.degree }}</div>
                      <div class="resume-degree-org text-muted">{{ edu.institution }}</div>
                      <div class="resume-degree-time text-muted">{{ edu.startDate }} - {{ edu.endDate }}</div>
                    </li>
                  </ul>
                  <!-- /Education -->
                </section>

                <section class="skills-section py-3">
                  <!-- Languages -->
                  <h3 class="text-uppercase resume-section-heading mb-4">Languages</h3>
                  <ul class="list-unstyled resume-lang-list">
                    <li class="mb-2">
                      Portuguese
                      <span class="text-muted">(Native)</span>
                    </li>
                    <li class="mb-2">
                      English
                      <span class="text-muted">(Professional)</span>
                    </li>
                    <li>
                      Spanish
                      <span class="text-muted">(Basic)</span>
                    </li>
                  </ul>
                  <!-- /Languages -->
                </section>
                <section class="skills-section py-3">
                  <!-- Interests -->
                  <h3 class="text-uppercase resume-section-heading mb-4">Interests</h3>
                  <ul class="list-unstyled resume-interests-list mb-0">
                    <li class="mb-2">Programming</li>
                    <li class="mb-2">Movies</li>
                    <li class="mb-2">Tv Shows</li>
                    <li class="mb-2">Books</li>
                    <li class="mb-2">Gym/Work out</li>
                    <li class="mb-2">Health Food</li>
                    <li class="mb-2">Travelling</li>
                    <li>Photography</li>
                  </ul>
                  <!-- /Interests -->
                </section>
              </aside>
            </div>
            <!--/resume-->
          </div>
          <hr />
          <div id="resume-footer" class="resume-footer text-center">
            <ul class="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
              <li class="list-inline-item mb-lg-0 mr-3">
                <a class="resume-link" href="https://github.com/carlan">
                  <i class="fab fa-github-square fa-2x mr-2" data-fa-transform="down-4"></i>
                  <span class="d-none d-lg-inline-block text-muted">github.com/carlan</span>
                </a>
              </li>
              <li class="list-inline-item mb-lg-0 mr-3">
                <a class="resume-link" href="https://linkedin.com/in/carlan">
                  <i class="fab fa-linkedin fa-2x mr-2" data-fa-transform="down-4"></i>
                  <span class="d-none d-lg-inline-block text-muted">linkedin.com/in/carlan</span>
                </a>
              </li>
              <li class="list-inline-item mb-lg-0 mr-lg-3">
                <a class="resume-link" href="https://twitter.com/carlancalazans">
                  <i class="fab fa-twitter-square fa-2x mr-2" data-fa-transform="down-4"></i>
                  <span class="d-none d-lg-inline-block text-muted">@carlancalazans</span>
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>

      <footer class="footer text-center py-4">
        <small class="copyright text-muted">
          Designed with
          <i class="fas fa-heart"></i> by
          <a class="theme-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers - modified for my own needs.
        </small>
      </footer>
    </div>
  </Layout>
</template>

<script>
import json from "~/data/cv.json";

export default {
  data() {
    return {
			title: 'Curriculum Vitae',
      cv: json.cv
    };
  }
};
</script>

<style>
</style>