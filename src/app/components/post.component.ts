import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  numberAttribute,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import { injectQuery } from "@tanstack/angular-query-experimental";
import { QueriesService } from "../services/queries-service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "post",
  standalone: true,
  templateUrl: "./post.component.html",
  imports: [RouterLink],
})
export default class PostComponent {
  private queries = inject(QueriesService);

  postId = input.required({
    transform: numberAttribute,
  });

  // This will result in error NG0950
  // postQuery = injectQuery(this.queries.postAsComputed(this.postId()));

  // This works
  postQuery = injectQuery(computed(() => this.queries.post(this.postId())));
}
