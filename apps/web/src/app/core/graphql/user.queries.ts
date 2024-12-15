import { gql } from 'apollo-angular';

export const LOGIN = gql`
    query Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            id
            name
            surname
            email
            created_at
        }
    }
`;
