use crate::gql_client;
use graphql_client::{GraphQLQuery, Response};
use std::error::Error;

#[derive(GraphQLQuery)]
#[graphql(
    query_path = "src/gql-queries/location_weather.graphql",
    schema_path = "../graphql-backend-server/src/schema.graphql",
    response_derives = "Debug"
)]
pub struct GetLocationWeather;

pub async fn perform_query(
    variables: get_location_weather::Variables,
) -> Result<Response<get_location_weather::ResponseData>, Box<dyn Error>> {
    let request_body = GetLocationWeather::build_query(variables);

    let client = gql_client::get_client();
    let res = client
        .post("http://localhost:4000")
        .json(&request_body)
        .send()
        .await?;
    let response_body: Response<get_location_weather::ResponseData> = res.json().await?;
    // println!("{:#?}", response_body);
    Ok(response_body)
}
