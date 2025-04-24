const deletePosts = async () => {
  // 1. Find all three-dot menu buttons
  const menuButtons = document.querySelectorAll('.vkuiIcon--more_horizontal_24');
  
  for (const icon of menuButtons) {
    // 2. Get the clickable parent element
    const menuButton = icon.closest('button');
    if (!menuButton) continue;
    
    // 3. Scroll the button into view properly
    menuButton.scrollIntoView({
      block: 'center',
      behavior: 'smooth'
    });
    
    // 4. Click to open the menu
    menuButton.click();
    
    // 5. Wait for menu to appear in correct position
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // 6. Find the visible delete option
    const deleteOption = [...document.querySelectorAll('.vkitDropdownActionSheetItem__in--zJnZq')]
      .find(item => {
        const textEl = item.querySelector('.vkitTextClamp__root--23kcq');
        return textEl && /delete|удалить/i.test(textEl.textContent);
      });
    
    if (deleteOption) {
      // 7. Click delete option
      deleteOption.click();
      
      // 8. Wait for confirmation dialog
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // 9. Confirm deletion
      const confirmBtn = document.querySelector('.ui_modal .button_primary');
      if (confirmBtn) confirmBtn.click();
      
      // 10. Wait before next deletion
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
};

// Run the function in batches
const runDeletion = async () => {
  while (true) {
    await deletePosts();
    // Scroll to load more posts
    window.scrollBy(0, 500);
    await new Promise(resolve => setTimeout(resolve, 1500));
  }
};

// Start the process
runDeletion();
