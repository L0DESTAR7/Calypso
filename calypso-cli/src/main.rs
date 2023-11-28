mod location_command;
mod perform_get_user_location;
use std::env;
use std::process::ExitCode;

#[tokio::main]
async fn main() -> ExitCode {
    println!("Welcome to Calypso CLI");

    let mut args = env::args();
    let _program = args.next().expect("program");
    if let Some(command) = args.next() {
        if command == "location" {
            return location_command::location_command().await;
        }
    } else {
        eprintln!("ERROR: No command was provided.");
        return ExitCode::FAILURE;
    }

    ExitCode::SUCCESS
}
