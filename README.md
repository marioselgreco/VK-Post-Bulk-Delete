# VK Post Bulk Deleter

A JavaScript script that automatically deletes posts from your VK (VKontakte) wall in bulk.

## Features

- Automatically finds and clicks the "Delete" option in VK's interface
- Handles both English ("Delete") and Russian ("Удалить") interfaces
- Properly waits for menus and dialogs to appear
- Auto-scrolls to load more posts
- Works with VK's current (2025) interface

## How to Use

1. Open your VK wall in a desktop browser (Chrome/Firefox recommended)
2. Open Developer Tools:
   - Chrome: `Ctrl+Shift+J` (Windows/Linux) or `Cmd+Opt+J` (Mac)
   - Firefox: `Ctrl+Shift+K` (Windows/Linux) or `Cmd+Opt+K` (Mac)
3. Go to the Console tab
4. Copy and paste the entire script from `vk-deleter.js`
5. Press Enter to run

## Script Behavior

- Opens each post's menu
- Clicks the Delete option
- Confirms the deletion
- Scrolls down to load more posts
- Repeats until stopped

## To Stop

- Refresh the page, or
- Close the browser tab, or
- Type `window.stop()` in console

## Requirements

- Modern browser (Chrome, Firefox, Edge)
- VK account with posts to delete
- Basic understanding of browser developer tools

## Warning

Use at your own risk. VK may temporarily limit your account if you delete too many posts too quickly.

## License

MIT License - free to use and modify
