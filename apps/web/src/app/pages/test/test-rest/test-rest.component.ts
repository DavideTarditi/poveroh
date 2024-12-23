import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import axios from 'axios';

@Component({
    selector: 'app-test-graphql',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule],
    templateUrl: './test-rest.component.html',
})
export class TestRestComponent implements OnInit {
    data: any;

    constructor(private readonly apollo: Apollo) {}

    async ngOnInit() {
        try {
            const response = await axios.get(
                'http://localhost:4201/getUser',
                {}
            );
            this.data = response.data;
        } catch (error) {
            console.log(error);
        }
    }
}
