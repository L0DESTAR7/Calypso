mod gql_client;
mod location_command;
mod perform_get_location_weather;
mod perform_get_user_location;
mod weather_command;
use std::env;
use std::process::ExitCode;

#[tokio::main]
async fn main() -> ExitCode {
    println!("\nWelcome to Calypso CLI\n");

    let mut args = env::args();
    let _program = args.next().expect("program");
    if let Some(command) = args.next() {
        if command == "location" {
            return location_command::location_command().await;
        } else if command == "weather" {
            return weather_command::weather_command().await;
        } else {
            // TODO: Write a Usage help message.
            eprintln!("ERROR: Unknown command.")
        }
    } else {
        eprintln!("ERROR: No command was provided.");
        return ExitCode::FAILURE;
    }

    ExitCode::SUCCESS
}
