export const GRAPHQL_API = "http://localhost:8080/query";

export const GET_STUDENTS_QUERY = `
query students {
  students {
    _id
    name
    nim
  }
}
`;
