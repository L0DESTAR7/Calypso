use crate::{
    perform_get_location_weather::{self, get_location_weather::Coordinates},
    perform_get_user_location,
};
use std::process::ExitCode;

pub async fn weather_command() -> ExitCode {
    let location_query = perform_get_user_location::perform_query(
        perform_get_user_location::get_user_location::Variables,
    )
    .await;
    if let Some(data) = location_query.ok() {
        let location = data.data.and_then(|data| data.get_user_location);

        match location {
            Some(location_data) => {
                let coordinates = perform_get_location_weather::get_location_weather::Variables {
                    coordinates: Some(Coordinates {
                        lat: location_data.lat.unwrap(),
                        lon: location_data.lon.unwrap(),
                    }),
                };
                let weather_query = perform_get_location_weather::perform_query(coordinates).await;
                if let Some(data) = weather_query.ok() {
                    let weather = data
                        .data
                        .as_ref()
                        .and_then(|data| data.get_weather_info.as_ref())
                        .and_then(|data| data.current.as_ref());

                    let time = data
                        .data
                        .as_ref()
                        .and_then(|data| data.get_weather_info.as_ref())
                        .and_then(|data| data.location.as_ref());

                    match weather {
                        Some(weather_data) => {
                            println!("Weather Information:");
                            println!(
                                "\n {} - {}",
                                location_data.city.unwrap(),
                                location_data.country.unwrap()
                            );
                            println!(
                                " {}",
                                time.as_ref()
                                    .unwrap()
                                    .localtime
                                    .as_ref()
                                    .unwrap()
                                    .replace("-", "/")
                                    .replace(" ", "\n󱑍 ")
                            );
                            println!(
                                "\n   Temperature: {:#?} °C | {:#?} °F",
                                weather_data.temp_c.unwrap(),
                                weather_data.temp_f.unwrap(),
                            );
                            println!(
                                "  󰖝 Wind Speed:  {:#?} kph | {:#?} mph",
                                weather_data.wind_kph.unwrap(),
                                weather_data.wind_mph.unwrap(),
                            );
                            println!(
                                "  󰖞 Gust Speed:  {:#?} kph | {:#?} mph",
                                weather_data.gust_kph.unwrap(),
                                weather_data.gust_mph.unwrap(),
                            );
                            //  TODO: Implement util function for:
                            // - Expanding direction acronyms.
                            // - Displaying an arrow in the adequate direction.
                            println!(
                                "  󱎂 Direction:   {}",
                                weather_data.wind_dir.as_ref().unwrap()
                            );
                            println!(
                                "  󰖐 Condition:   {}",
                                weather_data
                                    .condition
                                    .as_ref()
                                    .unwrap()
                                    .text
                                    .as_ref()
                                    .unwrap()
                                    .replace("\"", ""),
                            );
                            println!("  󰸊 Humidity:    {} %", weather_data.humidity.unwrap(),);
                            return ExitCode::SUCCESS;
                        }

                        None => {
                            eprintln!("ERROR: The GraphQL Weather Query returned no weather data.");
                            return ExitCode::FAILURE;
                        }
                    }
                }
            }

            None => {
                eprintln!("ERROR: The GraphQL Location Query returned no location data.");
                return ExitCode::FAILURE;
            }
        }
        return ExitCode::SUCCESS;
    } else {
        eprintln!("ERROR: The GraphQL Location Query failed.");
        return ExitCode::FAILURE;
    }
}
