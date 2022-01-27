import { gql } from "apollo-boost";

export const loginMixin = {
  methods: {
    getUsers() {
      const getUsers = gql`
      query MyQuery {
        viewer {
            id
            databaseId
            firstName
            lastName
            email
            capabilities
          }
      }
      `;
      return this.$apollo.query({
        query: getUsers,
      });
    }
  }
}