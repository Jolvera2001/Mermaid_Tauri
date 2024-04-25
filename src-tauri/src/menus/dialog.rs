use tauri::{
    api::dialog::FileDialogBuilder,
    CustomMenuItem,
    Menu,
    MenuEvent,
    MenuItem,
    Submenu,
    WindowMenuEvent,
    State
};

pub fn handle_menu_event(event: WindowMenuEvent) {
    match event.menu_item_id() {
            "open" => {
                FileDialogBuilder::default()
                    .pick_file(|path_buf| match path_buf {
                        Some(path) => {}
                        _ => {}
                    });
            }
            _ => {}
        }
}