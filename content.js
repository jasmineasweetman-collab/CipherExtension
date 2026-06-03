document.addEventListener("mouseup",function()
{
    const selectedText=window.getSelection().toString();
    if(selectedText.length>0)
    {
        const browserAPI=(typeof browser!=="undefined")?browser:chrome;
        browserAPI.storage.local.set({selectedText:selectedText});
    }
});