import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Courses from "../views/Courses.vue";
import Participants from "../views/Participants.vue";
import Attendance from "../views/Attendance.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/courses", component: Courses },
  { path: "/participants", component: Participants },
  { path: "/attendance", component: Attendance },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
