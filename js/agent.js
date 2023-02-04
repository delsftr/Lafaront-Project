$(document).ready(() => 
{
    let currentImage = 1;
    const interval = setInterval(() =>
    {
        const images = $('.slider-image')
        let move = 0;
        if(currentImage === images.length)
        {
            move = 0;
            currentImage = 1;
        }
        else
        {
            move = 842;
            currentImage++;
        }
        
        images.animete(
        {
            left:move = 0 ? move : `-=${move}px`
        }
        , 1000, "Linear", () =>
        {
            console.log(images[currentImage - 1])
            
        })

    }   ,3000)

})