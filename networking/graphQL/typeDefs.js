export const typeDefs = `
    #Custom type definitions for GraphQL
    type Author {
        id: ID!
        name: String
        books: [Book]
    }
    # ! is used for making a field mandatory
    type Book {
        id: ID!
        title: String!
        publishedYear: Int
        author: Author
    }
    #all the methods to get the data
    type Query {
        authors: [Author]
        books: [Book]
    }
    #all the methods to update the data
    type Mutation {
        addBook(title: String!, publishedYear: Int, authorId: ID!): Book!
    }
`;
