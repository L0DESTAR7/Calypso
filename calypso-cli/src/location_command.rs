use crate::perform_get_user_location;
use std::process::ExitCode;

pub async fn location_command() -> ExitCode {
    let query = perform_get_user_location::perform_query(
        perform_get_user_location::get_user_location::Variables,
    )
    .await;
    if let Some(data) = query.ok() {
        let location = data.data.and_then(|data| data.get_user_location);

        match location {
            Some(location_data) => {
                println!("Your Location:");
                println!(
                    "- Country : {:#?} \n- City : {:#?} \n- Latitude: {:#?} \n- Longitude: {:#?} \n",
                    location_data.country.unwrap(),
                    location_data.city.unwrap(),
                    location_data.lat.unwrap(),
                    location_data.lon.unwrap(),
                );
                return ExitCode::SUCCESS;
            }

            None => {
                eprintln!("ERROR: The GraphQL Location Query returned no location data.");
            }
        }
        return ExitCode::SUCCESS;
    } else {
        eprintln!("ERROR: The GraphQL Location Query failed.");
        return ExitCode::FAILURE;
    }
}
