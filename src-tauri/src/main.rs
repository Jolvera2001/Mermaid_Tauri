// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::{  
    CustomMenuItem, 
    Menu,
    MenuEvent, 
    MenuItem, 
    Submenu, 
};

mod apis;
mod menus;

use apis::greet;
use menus::handle_menu_event;

fn main() {
    let open = CustomMenuItem::new("open".to_string(), "Open".to_string());
    let file_menu = Submenu::new("File", Menu::new().add_item(open));
    let menu = Menu::new()
        .add_submenu(file_menu)
        .add_native_item(MenuItem::Separator)
        .add_native_item(MenuItem::Quit);

    tauri::Builder::default()
        .menu(menu)
        .on_menu_event(handle_menu_event)
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
