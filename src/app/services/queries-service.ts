import { computed, inject, Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { queryOptions } from "@tanstack/angular-query-experimental";
import { PostsService } from "./posts-service";

@Injectable({
  providedIn: "root",
})
export class QueriesService {
  private postsService = inject(PostsService);

  post(postId: number) {
    return queryOptions({
      queryKey: ["post", postId],
      queryFn: () => {
        return lastValueFrom(this.postsService.postById$(postId));
      },
    });
  }

  postAsComputed(postId: number) {
    return computed(() =>
      queryOptions({
        queryKey: ["post", postId],
        queryFn: () => {
          return lastValueFrom(this.postsService.postById$(postId));
        },
      }),
    );
  }
}
