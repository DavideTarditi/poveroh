import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';

@Component({
    selector: 'app-test-graphql',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule],
    templateUrl: './test-graphql.component.html',
})
export class TestGraphqlComponent implements OnInit {
    data: any;

    GET_USERS = gql`
        query {
            getUsers {
                id
                name
                surname
                email
                created_at
            }
        }
    `;

    constructor(private readonly apollo: Apollo) {}

    ngOnInit() {
        this.apollo
            .watchQuery({
                query: this.GET_USERS,
            })
            .valueChanges.subscribe((result: any) => {
                this.data = JSON.stringify(result.data?.getUsers);
            });
    }
}
