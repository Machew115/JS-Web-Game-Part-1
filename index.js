function newImage(url, left, bottom) {
    let Image = document.createElement('img')
    Image.src = url
    Image.style.position = 'fixed'
    Image.style.left = left + 'px'
    Image.style.bottom = bottom + 'px'
    document.body.append(Image)
    return Image 
}

function newItem(url, left, bottom){
    let Image = newImage(url, left, bottom)

    Image.addEventListener('dblclick', function(){
        Image.remove()
    })

}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
newItem('assets/sword.png', 500, 450)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)
