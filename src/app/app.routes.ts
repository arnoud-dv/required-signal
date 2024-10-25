import type { Route } from "@angular/router";

export const routes: Array<Route> = [
  {
    path: "",
    loadComponent: () => import("./components/posts.component"),
  },
  {
    path: "post/:postId",
    loadComponent: () => import("./components/post.component"),
  },
];
