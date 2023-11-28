use ::reqwest;
use graphql_client::{GraphQLQuery, Response};
use std::error::Error;

#[derive(GraphQLQuery)]
#[graphql(
    query_path = "src/gql-queries/user_location.graphql",
    schema_path = "../graphql-backend-server/src/schema.graphql",
    response_derives = "Debug"
)]
pub struct GetUserLocation;

pub async fn perform_query(
    variables: get_user_location::Variables,
) -> Result<Response<get_user_location::ResponseData>, Box<dyn Error>> {
    let request_body = GetUserLocation::build_query(variables);

    let client = reqwest::Client::new();
    let res = client
        .post("http://localhost:4000")
        .json(&request_body)
        .send()
        .await?;
    let response_body: Response<get_user_location::ResponseData> = res.json().await?;
    // println!("{:#?}", response_body);
    Ok(response_body)
}
