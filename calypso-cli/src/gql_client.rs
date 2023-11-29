use reqwest::Client;
use std::sync::Once;

static mut CLIENT: Option<Client> = None;
static INIT: Once = Once::new();

fn init_client() {
    unsafe {
        CLIENT = Some(Client::new());
    }
}

pub fn get_client() -> &'static Client {
    INIT.call_once(|| init_client());

    unsafe { CLIENT.as_ref().unwrap() }
}
