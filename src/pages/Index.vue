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
                  <div class="item mb-3">
                    <div class="item-heading row align-items-center mb-2">
                      <h4 class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Project 1</h4>
                      <div
                        class="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right"
                      >Open Source</div>
                    </div>
                    <div class="item-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. I can also add a
                        <a href="#" class="theme-link">project link here</a>.
                      </p>
                    </div>
                  </div>
                </section>
                <!-- /Personal projects -->
              </div>

              <aside class="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
                <section class="skills-section py-3">
                  <h3 class="text-uppercase resume-section-heading mb-4">Skills</h3>
                  <div class="item">
                    <h4 class="item-title">Technical</h4>
                    <ul class="list-unstyled resume-skills-list">
                      <li class="mb-2">Angular/ReactJs/VueJS</li>
                      <li class="mb-2">Java/Python/Ruby/NodeJS</li>
                      <li></li>
                      <li class="mb-2">Spring/Spring Cloud/Grails</li>
                      <li class="mb-2">Oracle,SQLServer,Postgres,MySQL</li>
                      <li>Deliver complex software</li>
                    </ul>
                  </div>

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
                </section>

                <section class="education-section py-3">
                  <h3 class="text-uppercase resume-section-heading mb-4">Education</h3>
                  <ul class="list-unstyled resume-education-list">
                    <li class="mb-3">
                      <div class="resume-degree font-weight-bold">MSc in Computer Science</div>
                      <div class="resume-degree-org text-muted">University X</div>
                      <div class="resume-degree-time text-muted">2010 - X</div>
                    </li>
                    <li>
                      <div class="resume-degree font-weight-bold">BSc X Y</div>
                      <div class="resume-degree-org text-muted">University Y</div>
                      <div class="resume-degree-time text-muted">2007 - 2010</div>
                    </li>
                  </ul>
                </section>

                <section class="skills-section py-3">
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
                </section>
                <section class="skills-section py-3">
                  <h3 class="text-uppercase resume-section-heading mb-4">Interests</h3>
                  <ul class="list-unstyled resume-interests-list mb-0">
                    <li class="mb-2">Movies</li>
                    <li class="mb-2">Tv Shows</li>
                    <li class="mb-2">Gym/Work out</li>
                    <li class="mb-2">Health Food</li>
                    <li class="mb-2">Travelling</li>
                    <li>Photography</li>
                  </ul>
                </section>
              </aside>
            </div>
            <!--//row-->
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
.resume-wrapper {
  border: 1px solid rgba(0, 0, 0, 0.025);
}

.resume-section-heading {
  position: relative;
  padding-left: 1rem;
  font-size: 1.125rem;
  letter-spacing: 0.15rem;
  color: #54b689;
}

.resume-section-heading:before {
  content: "";
  display: inline-block;
  width: 5px;
  height: 100%;
  background: #54b689;
  position: absolute;
  left: 0;
  top: 0;
}

.resume-name {
  font-size: 2.75rem;
  font-weight: 900;
  letter-spacing: 0.4rem;
  color: #54b689;
}

.resume-tagline {
  font-size: 1.25rem;
  font-weight: 300;
}

.resume-contact {
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  font-size: 0.75rem;
}

a.resume-link {
  color: #4f4f4f;
}

a.resume-link:hover {
  color: #54b689;
}

.resume-profile-image {
  max-width: 120px;
}

.resume-intro {
  font-size: 0.875rem;
}

.resume-main .item-title {
  font-size: 1rem;
}

.resume-main .item-meta {
  font-size: 0.75rem;
}

.resume-main .item-content {
  font-size: 0.875rem;
}

.resume-aside {
  border-left: 1px solid rgba(0, 0, 0, 0.08);
}

.resume-aside .item {
  font-size: 0.875rem;
}

.resume-aside .item-title {
  font-size: 1rem;
}

.resume-education-list,
.resume-awards-list {
  font-size: 0.875rem;
}

.resume-degree-time-org,
.resume-degree-time {
  font-size: 0.75rem;
}

.resume-lang-list,
.resume-interests-list {
  font-size: 0.875rem;
}

.resume-social-list {
  font-size: 0.75rem;
}

.fa-heart {
  color: #fb866a;
}

@media (max-width: 991.98px) {
  .resume-aside {
    border-left: 0;
  }
}

@media (max-width: 767.98px) {
  .resume-contact {
    border-left: 0;
  }
}
</style>
