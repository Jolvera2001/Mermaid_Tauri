// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::Menu;
use tauri::MenuItem;
use tauri::Submenu;
use tauri::AboutMetadata;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    let menu = Menu::new()
        // this adds the actual Menu bar in the window
        .add_native_item(MenuItem::About("My Application".to_string(), AboutMetadata::default()))
        // this is the menu ITEM and contains a native item
        .add_submenu(Submenu::new(
            "File",
            Menu::new().add_native_item(MenuItem::CloseWindow),
        ));
        
    tauri::Builder::default()
        .menu(menu)
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
